from fastapi import APIRouter

router = APIRouter()

@router.post("/validate")
def validate_quiz(data: dict):
    score = data.get("score", 0)
    level = data.get("level")

    if level == "Intermediate":
        passed = score >= 60
    elif level == "Expert":
        passed = score >= 75
    else:
        passed = True

    return {
        "passed": passed,
        "score": score
    }
