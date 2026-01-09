from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def save_progress(data: dict):
    return {"status": "Progress saved"}
