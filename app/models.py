from xmlrpc.client import Boolean
from sqlalchemy import TIMESTAMP, String, Integer, Column, Boolean, text
from .database import Base



class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key = True, nullable = False)
    username = Column(String, primary_key = False, nullable = False, unique = True)
    email = Column(String, primary_key = False, nullable = False, unique = False)
    password = Column(String, primary_key = False, nullable = False, unique = False)
    verified = Column(Boolean, server_default = 'False', nullable = False)
    created_at = Column(TIMESTAMP(timezone=True), nullable = False, server_default = text('now()'))
    fist_name = Column(String, primary_key = False, nullable = False, unique = False)
    last_name = Column(String, primary_key = False, nullable = False, unique = False)
    is_male = Column(Boolean, server_default = 'False', nullable = False)
    if_female = Column(Boolean, server_default = 'False', nullable = False)
    is_other = Column(Boolean, server_default = 'False', nullable = False)
