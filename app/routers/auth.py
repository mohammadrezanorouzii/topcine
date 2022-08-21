from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import database, models, oauth2, utils, schemas


router = APIRouter(
    tags = ["Authentication"]
)


@router.post("/login/", response_model = schemas.Token)
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db : Session = Depends(database.get_db)):
    matched_user = db.query(models.User).filter(models.User.username == user_credentials.username).first()
    if not matched_user : 
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail = f"the provided username and password does not match")
    if not utils.verify(user_credentials.password, matched_user.password)  : 
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail = f"the provided username and password does not match")

    access_token = oauth2.create_access_token(data = {"user_id" : matched_user.id})

    return {"access_token" : access_token, "token_type" : "bearer"}