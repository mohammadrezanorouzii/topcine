from fastapi import APIRouter






router = APIRouter(
    prefix = "/vote",
    tags = ["votes"]
)