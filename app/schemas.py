from typing import Optional
from pydantic import BaseModel, EmailStr
from .models import Gender


class UserBase(BaseModel):

    id : int
    username : str
    email : str
    password : str
    first_name : str
    last_name : Optional[str] = None
    gender : Gender


class UserCreate(BaseModel):

    username : str
    email : EmailStr
    password : str
    first_name : str
    last_name : Optional[str] = None
    gender : Gender


class UserUpdate(BaseModel):

    username : str
    first_name : Optional[str]
    last_name : Optional[str] = None
    password : str
    gender : Gender


class UserResponse(BaseModel):

    id : int
    username : str
    first_name : str
    last_name : str

    class Config:
        orm_mode=True

class WatchList(BaseModel):

    user_id : int
    movie_id : int


class WatchListCreate(BaseModel):

    user_id : int
    movie_id : int


class WatchListResponse(BaseModel):

    user_id : int
    movie_id : int

    class Config:
        orm_mode=True


class Token(BaseModel):

    access_token : str
    token_type : str


class TokenData(BaseModel):

    id : Optional[str] = None


