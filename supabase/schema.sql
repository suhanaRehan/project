-- Run this once in the Supabase SQL Editor for your project
-- (Project Settings > SQL Editor > New query)

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  service text not null,
  message text not null,
  date text not null default to_char(now(), 'YYYY-MM-DD'),
  status text not null default 'pending' check (status in ('pending', 'in-progress')),
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "Users can view their own inquiries"
  on public.inquiries for select
  using (auth.uid() = user_id);

create policy "Users can insert their own inquiries"
  on public.inquiries for insert
  with check (auth.uid() = user_id);
