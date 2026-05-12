import { NextRequest, NextResponse } from 'next/server'
import { appendSubmission, KV_KEYS } from '@/lib/admin-kv'
import type { SpeakingSubmission } from '@/lib/admin-kv'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, organization, eventName, eventDate, audience, format, brief } = body

  if (!name || !email || !eventName) {
    return NextResponse.json({ error: 'Name, email, and event name are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  // Save to KV for admin inbox
  const entry: SpeakingSubmission = {
    id: crypto.randomUUID(),
    name,
    email,
    org: organization || '—',
    eventName,
    eventDate: eventDate || undefined,
    location: undefined,
    audienceSize: audience || undefined,
    notes: brief || undefined,
    createdAt: new Date().toISOString(),
  }
  await appendSubmission(KV_KEYS.speakingSubmissions, entry)

  // Send email notification
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'speaking@kasandyfoundation.org',
        to: process.env.FOUNDATION_EMAIL ?? 'hello@kasandyfoundation.org',
        replyTo: email,
        subject: `Speaking inquiry: ${eventName} — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || '—'}`,
          `Event: ${eventName}`,
          `Event date: ${eventDate || '—'}`,
          `Audience: ${audience || '—'}`,
          `Format: ${format || '—'}`,
          '',
          `Brief:\n${brief || '—'}`,
        ].join('\n'),
      })
    } catch {
      // Non-fatal
    }
  }

  return NextResponse.json({ success: true })
}
