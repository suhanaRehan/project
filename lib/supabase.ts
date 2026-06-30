import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

// Client-side Supabase client. Uses @supabase/ssr's browser client so the
// session is stored in cookies (not just localStorage), which keeps it
// compatible with middleware.ts and any future server components that
// need to read the session.
export const supabase = createBrowserClient(supabaseUrl, supabaseKey)

export interface Inquiry {
  id: string
  user_id: string
  service: string
  message: string
  date: string
  status: 'pending' | 'in-progress'
  created_at: string
}
