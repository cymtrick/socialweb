from sqlalchemy import *
from sqlalchemy.orm import (scoped_session, sessionmaker, relationship, backref)

from sqlalchemy.ext.declarative import declarative_base

engine = create_engine("mysql://root:@Prashanth123@192.168.1.26/irun", pool_pre_ping=True, )

db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))

Base = declarative_base()
Base.metadata.bind = engine
Base.query= db_session.query_property()