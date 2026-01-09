from fastapi import FastAPI
from api.evaluate import router as evaluate_router
from api.quiz import router as quiz_router
from api.progress import router as progress_router

app = FastAPI(title="Soft Skills Chatbot API")

app.include_router(evaluate_router, prefix="/evaluate")
app.include_router(quiz_router, prefix="/quiz")
app.include_router(progress_router, prefix="/progress")
