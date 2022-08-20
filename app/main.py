from fastapi import FastAPI
from .routers import auth, users
# from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


app.include_router(auth.router)
app.include_router(users.router)

@app.get("/")
def root():
    return {'message' : 'F'}