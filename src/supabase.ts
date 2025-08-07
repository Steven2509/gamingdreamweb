// src/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oheygzgihjiavxglgiol.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oZXlnemdpaGppYXZ4Z2xnaW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NDI1ODQsImV4cCI6MjA3MDExODU4NH0.3s6Hu2yDNZIoOZzCATc2Nu9pvcbhfskE78fBo0NkNeg";

export const supabase = createClient(supabaseUrl, supabaseKey);
