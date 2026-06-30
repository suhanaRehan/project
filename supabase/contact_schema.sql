-- Run this once in the Supabase SQL Editor for your project
-- (Project Settings > SQL Editor > New query)
--
-- Stores contact form submissions from the public /contact page.
-- Visitors are usually not logged in, so this is a separate table from
-- `inquiries` (which requires a logged-in user_id).

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  service text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- No public select/insert policies are created here on purpose.
-- Inserts happen exclusively via the /api/contact server route using the
-- service role key, which bypasses RLS. This keeps submissions private —
-- only accessible from the Supabase dashboard or server-side code.