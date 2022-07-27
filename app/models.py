from xmlrpc.client import Boolean
from sqlalchemy import TIMESTAMP, String, Integer, Column, Boolean, text, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base



class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key = True, nullable = False)
    username = Column(String, primary_key = False, nullable = False, unique = True)
    email = Column(String, primary_key = False, nullable = False, unique = False)
    verified = Column(Boolean, server_default = 'False', nullable = False)
    created_at = Column(TIMESTAMP(timezone=True), nullable = False, server_default = text('now()'))


# class Movie(Base):


class Vote(Base):

    __tablename__ = "votes"

    user_id = Column(Integer, ForeignKey("users.id", ondelete = "CASCADE"), primary_key = True)
    movie_id = Column(Integer, ForeignKey("posts.id", ondelete = "CASCADE"), primary_key = True)