from .database import Base
from sqlalchemy import TIMESTAMP, String, Integer, Column, text, Enum, ForeignKey
import enum


class Gender(enum.Enum):

    male = "male"
    female = "female"
    other = "other"

class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key = True, nullable = False)
    username = Column(String, primary_key = False, nullable = False, unique = True)
    email = Column(String, primary_key = False, nullable = False, unique = True)
    password = Column(String, primary_key = False, nullable = False, unique = False)
    created_at = Column(TIMESTAMP(timezone=True), nullable = False, server_default = text('now()'))
    first_name = Column(String, primary_key = False, nullable = False, unique = False)
    last_name = Column(String, primary_key = False, nullable = False, unique = False, server_default = None)
    gender = Column(Enum(Gender), primary_key = False, nullable = False, server_default = "other")

class Watchlist(Base):

    __tablename__ = "watchlists"

    user_id = Column(Integer, primary_key = False, nullable = False)
    movie_id = Column(Integer, primary_key = True, nullable = False)
