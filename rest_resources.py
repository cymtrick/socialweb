from flask_restful import Resource, reqparse
from database import db_session
from database_schema import Topic, User
import sqlalchemy.exc as sqlalchemy_exc
from datetime import datetime,timedelta
import io
from multiprocessing.pool import ThreadPool
from werkzeug.datastructures import FileStorage
import uuid
from database_schema import killTokenModel
from flask import request
import bcrypt
import math, random
import re
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required,
                                get_jwt_identity, get_raw_jwt)
from flask import jsonify



parser_registration = reqparse.RequestParser()
parser_registration.add_argument('username', help='This field cannot be blank', required=True)
parser_registration.add_argument('password', help='This field cannot be blank', required=True)
parser_registration.add_argument('dob', help='This field cannot be blank', required=True)



parser_login = reqparse.RequestParser()
parser_login.add_argument('username', help='This field cannot be blank', required=True)
parser_login.add_argument('password', help='This field cannot be blank', required=True)

#parser_topic = reqparse.RequestParser()
#parser_topic.add_argument('title', required=True);


class GetTopic(Resource):
    def get(self):
        #data = parser_topic.parse_args()
        topics = db_session.query(Topic).all()
        retData = []
        for tp in topics:
            dat = {}
            dat['id'] = tp.id
            dat['name'] = tp.topic_name
            retData.append(dat)
        return {"message": "success", "data": retData}



class UserRegistration(Resource):
    def post(self):
        data = parser_registration.parse_args()


        if re.match("^[A-Za-z0-9_.-]*$", data['username']):
            if re.match("^(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^\*])(?=.{8,})", data['password']):
                if re.match(
                        "^(((0[1-9]|[12][0-9]|30)[/]?(0[13-9]|1[012])|31[/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[/]?02)[/]?[0-9]{4}|29[/]?02[/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$",
                        data["dob"]):
                  if re.match("^(19[3-9]\d|20(0\d|1[0-4]))$",data['dob'].split('/')[2]):
                    # uuid_entry = uuid(
                    # uuid=encrypt_string(data['uuid'])
                    # )
                    uid = str(uuid.uuid4())
                    user = User(
                        name = data['username'],
                        username=str.casefold(data['username']),
                        password=bcrypt.hashpw(data['password'].encode('utf8'), bcrypt.gensalt()),
                        dob=datetime.strptime(data['dob'],"%d/%m/%Y"),
                        date_creation=str(datetime.utcnow()),
                        login_uid=uid,
                        is_active=0
                    )
                    try:
                        # uuid_entry.save_to_db()
                        user.save_to_db()
                        return {'message': 'User is created', 'code': '901', 'uid': uid}
                        # except:
                    except sqlalchemy_exc.ArgumentError:  # specific exception
                        pass  # do something else here if you want

                    except sqlalchemy_exc.SQLAlchemyError as error:
                        print(error)
                        if re.match("(.*)Duplicate entry(.*)for key 'username'(.*)", error.args[0]) or re.match(
                                "(.*)Duplicate entry(.*)for key 'username'(.*)", error.args[0]):
                            return {'message': 'User already exists', 'code': '10010'}, 403
                  else:
                      return {'message': 'Date of birth is wrong', 'code': '10005-1'}
                else:
                    return {'message': 'Date of birth is wrong', 'code': '10005-1'}
            else:
                return {'message': 'Password should be greater than 8, contain Captial letter, Number and a special character -,!,@,#.&',
                        'code': '10004'}
        else:
            return {'message': 'Username should contain only valid fields such as _ and .', 'code': '10005-2'}




class UserLogin(Resource):
    def post(self):
        data = parser_login.parse_args()
        try:
            user = db_session.query(User).filter_by(username=data['username']).first()
        except:
            return {"message": "Something went wrong", "code": "10006"}
        if user is not None:
            if user.username == data['username']:
                if bcrypt.checkpw(data['password'].encode('utf8'), user.password.encode('utf8')):
                    uid = uuid.uuid4()
                    last_login = uid
                    user.login_uid = last_login
                    db_session.add(user)
                    db_session.commit()
                    access_token = create_access_token(identity=uid)
                    return {'jwt_access_token': access_token}

                else:
                    return {"message": "Invalid Credentials", "code": "10007"},403

            else:
                return {"message": "Invalid Credentials", "code": "10007"},403
        else:
            return {"message": "User doesn't exist", "code": "10008"},403


class Logout(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            kill_token = killTokenModel(jti=jti)
            kill_token.save_to_db()
            return {'message': 'User logout'}
        except:
            return {'message': 'Something went wrong while Logout', 'code': '10009'},404
