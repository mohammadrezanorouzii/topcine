from pydantic import BaseModel, EmailStr, conint
from typing import Optional





class UserBase(BaseModel):

    id : int
    username : str
    email : str
    password : str


class UserCreate(BaseModel):

    username : str
    email : EmailStr
    password : str


class UserLogin(BaseModel):

    username : str
    password : str


class UserResponse(BaseModel):

    id : int
    username : str

    class Config:
        orm_mode : True


class Token(BaseModel):

    access_token : str
    token_type : str


class TokenData(BaseModel):

    id : Optional[str] = None


class Vote(BaseModel):

    movie_id : int
    dir : conint(le=1)