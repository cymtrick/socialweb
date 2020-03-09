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
    backupcode = Column(String)
    Reputation = Column(String)
    is_active= Column(Integer)
    password=Column(String)
    dob= Column(Date)
    login_uid = Column(String)

    def save_to_db(self):
        db_session.add(self)
        db_session.commit()

    def to_json(self):
        return {
            "username": self.username,
            "date_creation":self.date_creation
        }