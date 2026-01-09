// js/supabaseClient.js

const SUPABASE_URL = "https://bvfaxqyetripdntedhuq.supabase.co";
const SUPABASE_ANON_KEY =
  "sb_publishable_t8buKJZFe5lxeXTPh6kNCw_MCEtaJfW";

// ✅ Create client and attach to window
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ✅ expose globally
window.supabase = supabaseClient;
