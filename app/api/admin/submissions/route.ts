import { NextResponse } from 'next/server'
import { getSubmissions, KV_KEYS } from '@/lib/admin-kv'
import type { MediaSubmission, SpeakingSubmission, ResearchDownload } from '@/lib/admin-kv'

export const dynamic = 'force-dynamic'

export async function GET() {
  const [media, speaking, research] = await Promise.all([
    getSubmissions<MediaSubmission>(KV_KEYS.mediaSubmissions),
    getSubmissions<SpeakingSubmission>(KV_KEYS.speakingSubmissions),
    getSubmissions<ResearchDownload>(KV_KEYS.researchDownloads),
  ])
  return NextResponse.json({ media, speaking, research })
}
