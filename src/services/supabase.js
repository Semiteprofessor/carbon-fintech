import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydW9wZnJlbWlvaW1tYnlkaXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NzEyNDIsImV4cCI6MjAzODM0NzI0Mn0.Z9hpdkvBn2NegktMlP3PghI_LGGpkiitFjeQ-6V_dkU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
