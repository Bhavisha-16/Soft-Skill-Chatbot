// DO NOT redeclare `supabase`

const SUPABASE_URL = "https://bvfaxqyetripdntedhuq.supabase.co";
const SUPABASE_ANON_KEY = "PASTE_YOUR_REAL_ANON_PUBLIC_KEY_HERE";

// create client using CDN global
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
