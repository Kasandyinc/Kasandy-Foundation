import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token') ?? ''
  const secret = process.env.RESEARCH_GATE_SECRET

  if (!secret) {
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  let payload: { documentId: string; email: string; refId: string }
  try {
    payload = jwt.verify(token, secret) as typeof payload
  } catch (err: unknown) {
    const expired = err instanceof Error && err.name === 'TokenExpiredError'
    return new NextResponse(
      expired
        ? 'This download link has expired. Return to the research page to request a new one.'
        : 'Invalid download link.',
      { status: expired ? 410 : 400 }
    )
  }

  const { documentId, email, refId } = payload
  const filePath = path.join(process.cwd(), 'public', 'research', `${documentId}.pdf`)
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Document not found.' }, { status: 404 })
  }

  const pdfBytes = fs.readFileSync(filePath)
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true })
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const date = new Date().toISOString().slice(0, 19).replace('T', ' ') + ' UTC'
  const watermarkText = `Downloaded by: ${email}  |  ${date}  |  Ref: ${refId}  |  For personal or professional use only. Not for redistribution.`

  for (const page of pdfDoc.getPages()) {
    page.drawText(watermarkText, {
      x: 14,
      y: 6,
      size: 5.5,
      font,
      color: rgb(0.31, 0.15, 0.055),
      opacity: 0.7,
    })
  }

  const watermarkedBytes = await pdfDoc.save()
  const slug = documentId.replace('KCEI_Research_', 'KCEI-').replace(/_/g, '-')

  return new NextResponse(Buffer.from(watermarkedBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${slug}-KF-Research.pdf"`,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-store',
    },
  })
}
