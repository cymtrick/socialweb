from flask_restful import Resource, reqparse
from database import db_session
from database_schema import User
import sqlalchemy.exc as sqlalchemy_exc
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


parser_exam = reqparse.RequestParser()
parser_exam.add_argument('question_id', help='This field cannot be blank', required=True)
parser_exam.add_argument('type', help='This field cannot be blank', required=True)
parser_exam.add_argument('select')
parser_exam.add_argument('code')

class UserRegistration(Resource):

    @jwt_required
    def post(self):
        data = parser_exam.parse_args()
