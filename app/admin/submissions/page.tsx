'use client'

import { useEffect, useState } from 'react'
import type { MediaSubmission, SpeakingSubmission, ResearchDownload } from '@/lib/admin-kv'

type Tab = 'media' | 'speaking' | 'research'

function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-CA', {
    timeZone: 'America/Vancouver',
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default function SubmissionsPage() {
  const [tab, setTab] = useState<Tab>('media')
  const [data, setData] = useState<{ media: MediaSubmission[]; speaking: SpeakingSubmission[]; research: ResearchDownload[] } | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/submissions').then(r => r.json()).then(setData)
  }, [])

  const tabs = data ? [
    { key: 'media' as Tab,    label: 'Media Inquiries',    count: data.media.length },
    { key: 'speaking' as Tab, label: 'Speaking Requests',  count: data.speaking.length },
    { key: 'research' as Tab, label: 'Research Downloads', count: data.research.length },
  ] : []

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Submissions</h1>
        <p className="text-sm text-gray-500 mt-1">All incoming inquiries, speaking requests, and research downloads.</p>
      </div>

      {!data && <p className="text-sm text-gray-400 py-10 text-center">Loading…</p>}

      {data && (
        <>
          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b border-gray-200">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setExpanded(null) }}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  tab === t.key ? 'border-[#C0392B] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {t.label}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  tab === t.key ? 'bg-[#C0392B] text-white' : 'bg-gray-100 text-gray-500'
                }`}>{t.count}</span>
              </button>
            ))}
          </div>

          {/* Media */}
          {tab === 'media' && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {data.media.length === 0 ? (
                <p className="px-6 py-12 text-sm text-gray-400 text-center">No media inquiries yet.</p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {data.media.map(m => (
                    <div key={m.id}>
                      <button
                        onClick={() => setExpanded(expanded === m.id ? null : m.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">{m.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{m.outlet} &middot; {m.email}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-gray-400">{fmt(m.createdAt)}</span>
                          <span className="text-gray-400 text-lg">{expanded === m.id ? '−' : '+'}</span>
                        </div>
                      </button>
                      {expanded === m.id && (
                        <div className="px-6 pb-5 bg-gray-50 border-t border-gray-100">
                          <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                            <div>
                              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Story / Angle</p>
                              <p className="text-gray-700 whitespace-pre-wrap">{m.story}</p>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                <a href={`mailto:${m.email}`} className="text-[#C0392B] hover:underline">{m.email}</a>
                              </div>
                              {m.deadline && (
                                <div>
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Deadline</p>
                                  <p className="text-gray-700">{m.deadline}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Speaking */}
          {tab === 'speaking' && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {data.speaking.length === 0 ? (
                <p className="px-6 py-12 text-sm text-gray-400 text-center">No speaking requests yet.</p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {data.speaking.map(s => (
                    <div key={s.id}>
                      <button
                        onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">{s.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{s.eventName} &middot; {s.org}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-gray-400">{fmt(s.createdAt)}</span>
                          <span className="text-gray-400 text-lg">{expanded === s.id ? '−' : '+'}</span>
                        </div>
                      </button>
                      {expanded === s.id && (
                        <div className="px-6 pb-5 bg-gray-50 border-t border-gray-100">
                          <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                            <div className="space-y-3">
                              {s.eventDate && (
                                <div>
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Event Date</p>
                                  <p className="text-gray-700">{s.eventDate}</p>
                                </div>
                              )}
                              {s.location && (
                                <div>
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Location</p>
                                  <p className="text-gray-700">{s.location}</p>
                                </div>
                              )}
                              {s.audienceSize && (
                                <div>
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Audience Size</p>
                                  <p className="text-gray-700">{s.audienceSize}</p>
                                </div>
                              )}
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                <a href={`mailto:${s.email}`} className="text-[#C0392B] hover:underline">{s.email}</a>
                              </div>
                              {s.notes && (
                                <div>
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Notes</p>
                                  <p className="text-gray-700 whitespace-pre-wrap">{s.notes}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Research */}
          {tab === 'research' && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {data.research.length === 0 ? (
                <p className="px-6 py-12 text-sm text-gray-400 text-center">No research downloads yet.</p>
              ) : (
                <div className="divide-y divide-gray-100">
                  <div className="grid grid-cols-4 px-6 py-2 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    <span>Email</span>
                    <span className="col-span-2">Document</span>
                    <span className="text-right">Date</span>
                  </div>
                  {data.research.map(r => (
                    <div key={r.id} className="grid grid-cols-4 px-6 py-3 text-sm items-center">
                      <a href={`mailto:${r.email}`} className="text-[#C0392B] hover:underline truncate">{r.email}</a>
                      <span className="col-span-2 text-gray-700 truncate">{r.docTitle}</span>
                      <span className="text-xs text-gray-400 text-right">{fmt(r.createdAt)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
