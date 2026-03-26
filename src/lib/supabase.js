import { createClient } from '@supabase/supabase-js'

const envUrl = import.meta.env.VITE_SUPABASE_URL
const envAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Fallback (public) config so the waitlist works even if Vercel env vars are missing.
// The anon key is meant to be shipped to the browser (RLS must protect access).
const fallbackUrl = 'https://wnghdshwpvyzbyfaysrq.supabase.co'
const fallbackAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduZ2hkc2h3cHZ5emJ5ZmF5c3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMDg1MjgsImV4cCI6MjA4ODY4NDUyOH0.EgBO8pz2DnnEkrXOuA_CE9vRJMfoCmXy-B71Eqnilpg'

const supabaseUrl = envUrl || fallbackUrl
const supabaseAnonKey = envAnonKey || fallbackAnonKey

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars missing. Waitlist will not work. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
