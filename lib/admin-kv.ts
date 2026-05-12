import { kv } from '@vercel/kv'

export const KV_KEYS = {
  // Form submissions (stored as JSON arrays)
  mediaSubmissions:    'kf:submissions:media',
  speakingSubmissions: 'kf:submissions:speaking',
  researchDownloads:   'kf:submissions:research',
  // Page content overrides: kf:content:{pageId} → { blocks: Record<string,string> }
  contentPrefix: 'kf:content',
} as const

// ── Generic helpers ──────────────────────────────────────────────────────────

export async function kvGet<T>(key: string, fallback: T): Promise<T> {
  try {
    const val = await kv.get<T>(key)
    return val ?? fallback
  } catch {
    return fallback
  }
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  await kv.set(key, value)
}

// ── Submissions ──────────────────────────────────────────────────────────────

export type MediaSubmission = {
  id: string
  name: string
  email: string
  outlet: string
  story: string
  deadline?: string
  createdAt: string
}

export type SpeakingSubmission = {
  id: string
  name: string
  email: string
  org: string
  eventName: string
  eventDate?: string
  location?: string
  audienceSize?: string
  notes?: string
  createdAt: string
}

export type ResearchDownload = {
  id: string
  email: string
  docId: string
  docTitle: string
  refId: string
  createdAt: string
}

export async function appendSubmission<T>(key: string, entry: T): Promise<void> {
  try {
    const existing = await kv.get<T[]>(key) ?? []
    await kv.set(key, [entry, ...existing])
  } catch {
    // KV not configured — silently skip (email is the primary notification)
  }
}

export async function getSubmissions<T>(key: string): Promise<T[]> {
  return kvGet<T[]>(key, [])
}

// ── Page content ─────────────────────────────────────────────────────────────

export async function getPageContent(pageId: string): Promise<Record<string, string>> {
  return kvGet<Record<string, string>>(`${KV_KEYS.contentPrefix}:${pageId}`, {})
}

export async function savePageContent(pageId: string, blocks: Record<string, string>): Promise<void> {
  const existing = await getPageContent(pageId)
  await kvSet(`${KV_KEYS.contentPrefix}:${pageId}`, { ...existing, ...blocks })
}
