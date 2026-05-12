export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { getSubmissions, KV_KEYS } from '@/lib/admin-kv'
import type { MediaSubmission, SpeakingSubmission, ResearchDownload } from '@/lib/admin-kv'
import { EDITABLE_PAGES } from '@/lib/page-content'
import { Inbox, FileText, Heart, ArrowRight, ExternalLink } from 'lucide-react'

export default async function AdminDashboard() {
  const [media, speaking, research] = await Promise.all([
    getSubmissions<MediaSubmission>(KV_KEYS.mediaSubmissions),
    getSubmissions<SpeakingSubmission>(KV_KEYS.speakingSubmissions),
    getSubmissions<ResearchDownload>(KV_KEYS.researchDownloads),
  ])

  const totalSubmissions = media.length + speaking.length + research.length
  const recentMedia = media.slice(0, 3)
  const recentSpeaking = speaking.slice(0, 3)

  const statCards = [
    {
      label: 'Total Submissions',
      value: totalSubmissions,
      sub: `${media.length} media · ${speaking.length} speaking · ${research.length} research`,
      icon: Inbox,
      href: '/admin/submissions',
      color: 'bg-red-50 text-[#C0392B]',
    },
    {
      label: 'Editable Pages',
      value: EDITABLE_PAGES.length,
      sub: 'Home, KCEI, Education, Adoption, and more',
      icon: FileText,
      href: '/admin/content',
      color: 'bg-amber-50 text-amber-700',
    },
    {
      label: 'Research Downloads',
      value: research.length,
      sub: 'Email-gated PDF downloads',
      icon: FileText,
      href: '/admin/submissions',
      color: 'bg-green-50 text-green-700',
    },
    {
      label: 'Donations',
      value: '—',
      sub: 'Connect Square to see live data',
      icon: Heart,
      href: '/admin/donations',
      color: 'bg-pink-50 text-pink-700',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back, Jackee. Here&apos;s your foundation overview.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <Link
            key={card.href + card.label}
            href={card.href}
            className="bg-white rounded-lg border border-gray-200 p-5 hover:border-[#C0392B] transition-colors group"
          >
            <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
              <card.icon size={20} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">{card.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
          </Link>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Submissions */}
        <div className="lg:col-span-2 space-y-4">
          {/* Media */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-800">Recent Media Inquiries</h2>
              <Link href="/admin/submissions" className="text-xs text-[#C0392B] hover:underline flex items-center gap-1">
                View all <ArrowRight size={12} />
              </Link>
            </div>
            {recentMedia.length === 0 ? (
              <p className="px-6 py-8 text-sm text-gray-400 text-center">No media inquiries yet.</p>
            ) : (
              <div className="divide-y divide-gray-50">
                {recentMedia.map(m => (
                  <div key={m.id} className="px-6 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{m.name}</p>
                      <p className="text-xs text-gray-400">{m.outlet} · {m.email}</p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(m.createdAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Speaking */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-800">Recent Speaking Requests</h2>
              <Link href="/admin/submissions" className="text-xs text-[#C0392B] hover:underline flex items-center gap-1">
                View all <ArrowRight size={12} />
              </Link>
            </div>
            {recentSpeaking.length === 0 ? (
              <p className="px-6 py-8 text-sm text-gray-400 text-center">No speaking requests yet.</p>
            ) : (
              <div className="divide-y divide-gray-50">
                {recentSpeaking.map(s => (
                  <div key={s.id} className="px-6 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{s.name}</p>
                      <p className="text-xs text-gray-400">{s.eventName} · {s.org}</p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(s.createdAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-1">
              {[
                { label: 'Edit Impact Stats', href: '/admin/content/impact', emoji: '📊' },
                { label: 'Edit KCEI Content', href: '/admin/content/kcei', emoji: '♻️' },
                { label: 'Edit Team Bios', href: '/admin/content/team', emoji: '👥' },
                { label: 'View Submissions', href: '/admin/submissions', emoji: '📬' },
                { label: 'View Donations', href: '/admin/donations', emoji: '💛' },
                { label: 'View Live Site', href: '/', emoji: '🌐', external: true },
              ].map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <span className="w-5 text-center">{a.emoji}</span>
                  {a.label}
                  {a.external && <ExternalLink size={11} className="text-gray-300 ml-auto" />}
                </Link>
              ))}
            </div>
          </div>

          {/* Pages List */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-800">Editable Pages</h2>
              <Link href="/admin/content" className="text-xs text-[#C0392B] hover:underline">All →</Link>
            </div>
            <div className="divide-y divide-gray-50">
              {EDITABLE_PAGES.map(p => (
                <Link
                  key={p.id}
                  href={`/admin/content/${p.id}`}
                  className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <p className="text-sm text-gray-700">{p.label}</p>
                  <span className="text-xs text-gray-400">{p.blocks.length} fields</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
