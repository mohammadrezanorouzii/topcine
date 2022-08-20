from typing import Optional
from pydantic import BaseModel, EmailStr, conint






class UserBase(BaseModel):

    id : int
    username : str
    email : str
    password : str


class UserCreate(BaseModel):

    username : str
    email : EmailStr
    password : str
    fist_name : str
    last_name : str
    is_male : bool
    is_female : bool
    is_other : Optional[bool] = False


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