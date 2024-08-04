import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";

const supabaseKey = import.meta.env.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
