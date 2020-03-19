from flask_restful import Resource, reqparse
from database import db_session
from database_schema import User, new_table
import sqlalchemy.exc as sqlalchemy_exc
import json
from datetime import datetime,timedelta
import io
from multiprocessing.pool import ThreadPool
from werkzeug.datastructures import FileStorage
import uuid
from database_schema import exam_table, answer_table, leader_board
from flask import request
import bcrypt
import math, random
import re
from flask_jwt_extended import (jwt_required, jwt_refresh_token_required,
                                get_jwt_identity, get_raw_jwt)


#TODO Change datatype of ids to varchar..
parser_exam_get = reqparse.RequestParser()
parser_exam_get.add_argument('topic_id', type=int)
parser_exam_get.add_argument('user_id', type=int)

parser_exam = reqparse.RequestParser()
parser_exam.add_argument('topic_id', help='This field cannot be blank', required=True)
parser_exam.add_argument('question', help='This field cannot be blank', required=True)
parser_exam.add_argument('points', help='This field cannot be blank', required=True)
parser_exam.add_argument('answer_type', help='This field cannot be blank', required=True)
parser_exam.add_argument('answer_string', help='This field cannot be blank', required=True)
parser_exam.add_argument('answer_file', help='This field cannot be blank', required=True)

parser_leaderboard = reqparse.RequestParser()
parser_leaderboard.add_argument('topic_id', help='This field cannot be blank', required=True)
parser_leaderboard.add_argument('user_id', help='This field cannot be blank', required=True)
parser_leaderboard.add_argument('points', help='This field cannot be blank', required=True)

parser_leaderboard_get = reqparse.RequestParser()
parser_leaderboard_get.add_argument('topic_id', type=int)
parser_leaderboard_get.add_argument('user_id', type=int)
class Exam(Resource):

    #Adding exam QAs into db by users..
    @jwt_required
    def post(self):
        data = parser_exam.parse_args()
        current_user = get_jwt_identity()
        login_user = db_session.query(User).filter_by(login_uid=current_user).first()
        if login_user is not None:
            id = str(uuid.uuid4())
            question = new_table(
                id=id,
                topic_id=data['topic_id'],
                question=data['question'],
                points=data['points'],
                answer_type=data['answer_type'],
                answer_string=data['answer_string'],
                answer_file=data['answer_file']
            )
            try:
                question.save_to_db()
                return {'message': '200', 'status': 200}
            except sqlalchemy_exc.ArgumentError:  # specific exception
                pass  # do something else here if you want
            except sqlalchemy_exc.SQLAlchemyError as error:
                print(error)
                return {'message': '500', 'status': 500}
        else:
            return {'message': '20', 'status': 20}

    #Retreiving all questions for now (can be made to randomly pick n questions,
    # when db is large) based on topic_id.
    @jwt_required
    def get(self):
        data = parser_exam_get.parse_args()
        current_user = get_jwt_identity()
        login_user = db_session.query(User).filter_by(login_uid=current_user).first()
        if login_user is not None:
            topic_id = data['topic_id']
            qaList = db_session.query(new_table).filter_by(topic_id=topic_id).all()
            qaList = new_table.to_json(qaList)
            return {'message': '200', 'status': 200, 'data': json.dumps(qaList)}
        else:
            return {'message': '20', 'status': 20}

class LeaderBoard(Resource):

    @jwt_required
    def post(self):
        data = parser_leaderboard.parse_args()
        current_user = get_jwt_identity()
        login_user = db_session.query(User).filter_by(login_uid=current_user).first()
        if login_user is not None:
            # Get the data to update it, else add new data..
            lb = db_session.query(leader_board).filter_by(topic_id = data['topic_id'], user_id = data['user_id']).first()
            if lb is not None:
                lb.points = data['points']
                db_session.commit()
                return {'message': '200', 'status': 200}
            else:
                lb = leader_board(
                    id = uuid.uuid4(),
                    topic_id = data['topic_id'],
                    user_id = data['topic_id'],
                    points = data['points']
                )
                try:
                    lb.save_to_db()
                    return {'message': '200', 'status': 200}
                except sqlalchemy_exc.ArgumentError:
                    pass
                except sqlalchemy_exc.SQLAlchemyError as error:
                    print(error)
                    return {'message': '500', 'status': 200}

    @jwt_required
    def get(self):
        data = parser_leaderboard_get.parse_args()
        current_user = get_jwt_identity()
        login_user = db_session.query(User).filter_by(login_uid=current_user).first()
        if login_user is not None:
            topic_id = data['topic_id']
            user_id = data['user_id']
            lb = db_session.query(leader_board).filter_by(topic_id = topic_id, user_id = user_id).first()
            lb = leader_board.to_json(lb)
            return {'message': '200', 'status': 200, 'data': json.dummps(lb)}
        else:
            return {'message': '20', 'status': 20}


