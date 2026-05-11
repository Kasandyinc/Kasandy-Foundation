import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const ALLOWED = [
  'KCEI_Research_01_Acoustic_Brick',
  'KCEI_Research_02_Inclusive_Green_Economy',
  'KCEI_Research_03_Insulation_Feasibility',
  'KCEI_Research_04_Midline_Activity_Report',
  'KCEI_Research_05_Canada_Kenya_Textile_Pipeline',
  'KCEI_Research_06_Circular_Economy_Employment_Models',
]

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') ?? ''
  if (!ALLOWED.includes(id)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'public', 'research', `${id}.pdf`)
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  const buffer = fs.readFileSync(filePath)
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline',
      'Cache-Control': 'private, max-age=3600',
    },
  })
}
