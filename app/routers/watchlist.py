from app import models, database, schemas, oauth2
from fastapi import  status, HTTPException, Depends, APIRouter
from ..database import get_db
from sqlalchemy.orm import Session
from typing import List


router = APIRouter(
    prefix = "/watchlist",
    tags = ["watchlist"]
)


@router.get("/", status_code=status.HTTP_200_OK, response_model = List[schemas.WatchListResponse])
def get_a_watchlist(db : Session = Depends(get_db), current_user : int = Depends(oauth2.get_current_user)):

    watchlist = db.query(models.Watchlist).filter(models.Watchlist.user_id == current_user.id).all()
    if not watchlist : 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"watchlist not found!")
    return watchlist


@router.post("/", status_code=status.HTTP_201_CREATED)
def add_movie_to_watchlist(list : schemas.WatchListCreate, db : Session = Depends(database.get_db), current_user: int = Depends(oauth2.get_current_user)):
    
    user = db.query(models.User).filter(models.User.id == list.user_id)
    list.user_id = current_user.id
    if not user :
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, details = f"there is no post with the id of {list.user_id}")
    movie_query = db.query(models.Watchlist).filter(models.Watchlist.movie_id == list.movie_id, models.Watchlist.user_id == current_user.id)
    found_movie = movie_query.first()
    
    if found_movie :
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail = f"user {current_user.id} has already added this movie with the id of {list.movie_id} to their watchlist")
    new_movie = models.Watchlist(**list.dict())
    db.add(new_movie)
    db.commit()
    return{"message": "Movie Successfully Added!"}

@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_movie_from_watchlist(list : schemas.WatchList, db : Session = Depends(database.get_db), current_user : int = Depends(oauth2.get_current_user)):
    movie = db.query(models.Watchlist).filter(models.Watchlist.movie_id == list.movie_id)
    movie_query = movie.first()
    if not movie_query :
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail = f"user {current_user.id} dosen't have a movie on their watchlist with the id of {list.movie_id}")
    movie.delete(synchronize_session=False)
    db.commit()
    return{"message":"Movie Successfuly Removed"}    