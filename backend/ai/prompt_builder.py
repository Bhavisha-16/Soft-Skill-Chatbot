def build_prompt(persona, skill, level, user_response):
    return f"""
You are a soft skills trainer.

Persona: {persona}
Skill: {skill}
Level: {level}

User Response:
{user_response}

Evaluate based on:
- Clarity
- Tone
- Confidence
- Professionalism

Give short, constructive feedback.
"""
