from database import Base
from sqlalchemy import *
from database import db_session

class User(Base):


    __tablename__='auth_user'
    __table_args__ = {'extend_existing': True}
    id = Column(Integer,primary_key=True)
    name = Column(String)
    username = Column(String)
    date_creation = Column(String)
    is_active= Column(Integer)
    password=Column(String)
    dob= Column(Date)
    login_uid = Column(String)
    year = Column(Integer)
    study_level = Column(String)

    def save_to_db(self):
        db_session.add(self)
        db_session.commit()

    def to_json(self):
        return {
            "username": self.username,
            "date_creation":self.date_creation
        }

class killTokenModel(Base):

    __tablename__ = "kill_token"
    id = Column(Integer, primary_key = True)
    jti = Column(String)

    def save_to_db(self):
        db_session.add(self)
        db_session.commit()

    @classmethod
    def is_jti_blacklisted(cls, jti):
        query = cls.query.filter_by(jti=jti).first()
        return bool(query)


class exam_table(Base):
    __tablename__ = 'exam_table'
    id = Column(Integer,primary_key=true)
    course_name = Column(String)
    questions_uuid = Column(String)
    date_creation = Column(DateTime)

    def save_to_db(self):
        db_session.add(self)
        db_session.commit()


class answer_table(Base):

    __tablename__ = 'answer_table'
    id = Column(Integer,primary_key=true)
    question_string = Column(String)
    answer_type = Column(Integer)
    answer_string =  Column(String)
    answer_file =  Column(String)

    def save_to_db(self):
        db_session.add(self)
        db_session.commit()

class leader_board(Base):

    __tablename__ = 'leader_board'
    id = Column(Integer, primary_key=true)
    course_id = Column(Integer)
    rank = Column(Integer)
    user_id = Column(Integer)

    def save_to_db(self):
        db_session.add(self)
        db_session.commit()

