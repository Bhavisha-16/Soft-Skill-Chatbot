from fastapi import APIRouter, HTTPException
from ai.prompt_builder import build_prompt
from ai.evaluator import evaluate_response

router = APIRouter()

@router.post("/")
def evaluate(data: dict):
    try:
        persona = data.get("persona")
        skill = data.get("skill")
        level = data.get("level")
        response_text = data.get("response")

        if not all([persona, skill, level, response_text]):
            raise ValueError("Missing required fields")

        prompt = build_prompt(
            persona,
            skill,
            level,
            response_text
        )

        feedback = evaluate_response(prompt)

        return {
            "feedback": feedback
        }

    except Exception as e:
        print("❌ ERROR IN /evaluate ENDPOINT:", str(e))
        raise HTTPException(
            status_code=500,
            detail="AI evaluation failed"
        )
