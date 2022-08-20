from typing import List
from fastapi import  Response, status, HTTPException, Depends, APIRouter
from .. import models, schemas, utils, oath2
from ..database import get_db
from sqlalchemy.orm import Session



router = APIRouter(
    prefix = "/users",
    tags = ["users"]
)

    # get all users

@router.get("", response_model=List[schemas.UserResponse])
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return users

    # create a new user account

@router.post("", response_model=schemas.UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(user : schemas.UserCreate, db : Session = Depends(get_db)):
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


    # get a specific user

@router.get("/{id}", response_model=schemas.UserResponse)
def get_user(id: int, response: Response, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()
    if not user :
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with the id : {id} was not found")
    return user

    # delete account

@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_user_account(id : int , db : Session = Depends(get_db), current_user : int = Depends(oath2.get_current_user)):
    user_query = db.query(models.User).filter(models.User.id == id)
    user = user_query.first()
    if not user : 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"user with the id of {id} doesn't exist")
    if current_user.id != user.id : 
                                                               # for safety reasons we will not raise a 403 exception
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"user with the id of {id} doesn't exist")
    user_query.delete()
    db.commit()
    return Response(status_code=status.HTTP_200_OK)

    # update a user's credentials

@router.put("/{id}", status_code=status.HTTP_201_CREATED, response_model=schemas.UserResponse)
def update_user_account(user : schemas.UserBase, db : Session = Depends(get_db), current_user : int = Depends(oath2.get_current_user)):
    user_query = db.query(models.User).filter(models.User.id == user.id)
    user_to_be_updated = user_query.first()
    if not user : 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"user with the id of {id} doesn't exist")
    if current_user.id != user_to_be_updated.id : 
                                                               # for safety reasons we will not raise a 403 exception
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"user with the id of {id} doesn't exist")
    user_to_be_updated.username = user.username
    user_to_be_updated.password = utils.hash(user.password)
    user_to_be_updated.email = user.email
    db.commit()
    db.refresh(user_to_be_updated)
    return Response(status_code=status.HTTP_200_OK)
    
