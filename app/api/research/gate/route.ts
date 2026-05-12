import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { appendSubmission, KV_KEYS } from '@/lib/admin-kv'
import type { ResearchDownload } from '@/lib/admin-kv'

const DOC_TITLES: Record<string, string> = {
  'KCEI_Research_01_Acoustic_Brick': 'Acoustic Brick Research',
  'KCEI_Research_02_Inclusive_Green_Economy': 'Inclusive Green Economy',
  'KCEI_Research_03_Insulation_Feasibility': 'Insulation Feasibility',
  'KCEI_Research_04_Midline_Activity_Report': 'Midline Activity Report',
  'KCEI_Research_05_Canada_Kenya_Textile_Pipeline': 'Canada–Kenya Textile Pipeline',
  'KCEI_Research_06_Circular_Economy_Employment_Models': 'Circular Economy Employment Models',
}

const ALLOWED_IDS = [
  'KCEI_Research_01_Acoustic_Brick',
  'KCEI_Research_02_Inclusive_Green_Economy',
  'KCEI_Research_03_Insulation_Feasibility',
  'KCEI_Research_04_Midline_Activity_Report',
  'KCEI_Research_05_Canada_Kenya_Textile_Pipeline',
  'KCEI_Research_06_Circular_Economy_Employment_Models',
]

export async function POST(req: NextRequest) {
  const { email, documentId } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }
  if (!documentId || !ALLOWED_IDS.includes(documentId)) {
    return NextResponse.json({ error: 'Invalid document.' }, { status: 400 })
  }

  const secret = process.env.RESEARCH_GATE_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const refId = `KF-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`
  const token = jwt.sign(
    { documentId, email, refId },
    secret,
    { expiresIn: '15m' }
  )

  // Save to KV for admin inbox
  const entry: ResearchDownload = {
    id: crypto.randomUUID(),
    email,
    docId: documentId,
    docTitle: DOC_TITLES[documentId] ?? documentId,
    refId,
    createdAt: new Date().toISOString(),
  }
  await appendSubmission(KV_KEYS.researchDownloads, entry)

  // Send notification email if Resend is configured
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'research@kasandyfoundation.org',
        to: process.env.FOUNDATION_EMAIL ?? 'hello@kasandyfoundation.org',
        subject: `Research download: ${documentId}`,
        text: `Email: ${email}\nDocument: ${documentId}\nRef: ${refId}\nTime: ${new Date().toISOString()}`,
      })
    } catch {
      // Non-fatal — proceed with download
    }
  }

  return NextResponse.json({
    downloadUrl: `/api/research/download?token=${token}`,
    expiresIn: '15 minutes',
  })
}
