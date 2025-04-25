import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://irzvuvswwtjukebdinmu.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyenZ1dnN3d3RqdWtlYmRpbm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NDAwNzEsImV4cCI6MjA2MDMxNjA3MX0.Twzo9mZhlZCdi9i9StaxSg-qFVIrjdgQZ7uqPuDeboI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
