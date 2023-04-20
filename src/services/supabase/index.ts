import { createClient } from "@supabase/supabase-js";
import { Database } from "@/services/types";
export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
