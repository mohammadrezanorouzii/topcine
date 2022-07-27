from fastapi import FastAPI
from .routers import movies, users, auth, votes


app = FastAPI()


app.include_router(auth.router)
app.include_router(movies.router)
app.include_router(users.router)
app.include_router(votes.router)