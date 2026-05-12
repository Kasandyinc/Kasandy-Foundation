import { NextRequest, NextResponse } from 'next/server'
import { appendSubmission, KV_KEYS } from '@/lib/admin-kv'
import type { MediaSubmission } from '@/lib/admin-kv'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, organization, mediaType, outlet, story, deadline } = body

  if (!name || !email || !story) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  // Save to KV for admin inbox
  const entry: MediaSubmission = {
    id: crypto.randomUUID(),
    name,
    email,
    outlet: outlet || organization || '—',
    story,
    deadline: deadline || undefined,
    createdAt: new Date().toISOString(),
  }
  await appendSubmission(KV_KEYS.mediaSubmissions, entry)

  // Send email notification
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'media@kasandyfoundation.org',
        to: process.env.FOUNDATION_EMAIL ?? 'hello@kasandyfoundation.org',
        replyTo: email,
        subject: `Media inquiry: ${name}${organization ? ` — ${organization}` : ''}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || '—'}`,
          `Media type: ${mediaType || '—'}`,
          `Outlet/Publication: ${outlet || '—'}`,
          `Deadline: ${deadline || '—'}`,
          '',
          `Message:\n${story}`,
        ].join('\n'),
      })
    } catch {
      // Non-fatal
    }
  }

  return NextResponse.json({ success: true })
}
