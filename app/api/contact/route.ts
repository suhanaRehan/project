import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Server-only client using the service role key, so it can insert into
// contact_submissions even though that table has no public RLS policies.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from('contact_submissions')
      .insert({ name, email, company: company || null, service: service || null, message })

    if (dbError) {
      console.error('Failed to save contact submission:', dbError)
      return NextResponse.json({ error: 'Failed to save your message. Please try again.' }, { status: 500 })
    }

    // 2. Email notification (only runs if RESEND_API_KEY and CONTACT_NOTIFY_EMAIL are set)
    const resendApiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL

    if (resendApiKey && notifyEmail) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Resend's onboarding domain works without verifying your own
            // domain, but only delivers to the email you signed up with.
            // Once you verify a domain in Resend, change this to something
            // like "Contact Form <contact@yourdomain.com>".
            from: 'Contact Form <onboarding@resend.dev>',
            to: notifyEmail,
            subject: `New contact form submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`,
          }),
        })

        if (!emailRes.ok) {
          // Don't fail the whole request if email fails — the submission
          // is already safely saved in Supabase.
          console.error('Resend email failed:', await emailRes.text())
        }
      } catch (emailErr) {
        console.error('Email notification error:', emailErr)
      }
    } else {
      console.warn('RESEND_API_KEY or CONTACT_NOTIFY_EMAIL not set — skipping email notification.')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}