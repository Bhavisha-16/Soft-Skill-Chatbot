// DO NOT redeclare `supabase`

const SUPABASE_URL = "https://bvfaxqyetripdntedhuq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZmF4cXlldHJpcGRudGVkaHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4Njk3MDQsImV4cCI6MjA4MzQ0NTcwNH0.ZMds4tWytEUusAP0GycF6LI4UfxBZ18QWsi6KxZkAA8";

// create client using CDN global
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
