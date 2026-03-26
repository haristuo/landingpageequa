-- Waitlist table for early access signups from landing page
CREATE TABLE IF NOT EXISTS public.waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  source text DEFAULT 'landingpage',
  converted_to_user boolean DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous INSERT only (public can add emails, cannot read/update/delete)
CREATE POLICY "Allow anon insert" ON public.waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- No SELECT, UPDATE, DELETE for anon - table is write-only for public
-- Authenticated users/service role can manage via Supabase dashboard or backend
