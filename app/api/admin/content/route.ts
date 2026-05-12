import { NextRequest, NextResponse } from 'next/server'
import { savePageContent, getPageContent } from '@/lib/admin-kv'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  const { pageId, blocks } = await req.json()

  if (!pageId || typeof blocks !== 'object') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  await savePageContent(pageId, blocks)

  // Revalidate the live page so changes appear immediately
  try {
    revalidatePath('/', 'layout')
  } catch {
    // revalidatePath may not be available in all environments
  }

  return NextResponse.json({ success: true })
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const pageId = searchParams.get('pageId')
  if (!pageId) return NextResponse.json({ error: 'Missing pageId' }, { status: 400 })
  const content = await getPageContent(pageId)
  return NextResponse.json(content)
}
