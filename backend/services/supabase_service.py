from supabase import create_client
from config import SUPABASE_URL, SUPABASE_KEY

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def save_progress(user_id, skill, level, score):
    supabase.table("progress").insert({
        "user_id": user_id,
        "skill": skill,
        "level": level,
        "score": score,
        "attempts": 1
    }).execute()
