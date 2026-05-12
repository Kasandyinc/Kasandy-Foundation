import Link from 'next/link'
import { EDITABLE_PAGES } from '@/lib/page-content'
import { getPageContent } from '@/lib/admin-kv'
import { ExternalLink, ChevronRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ContentListPage() {
  const overrides = await Promise.all(
    EDITABLE_PAGES.map(p => getPageContent(p.id))
  )

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Content</h1>
        <p className="text-sm text-gray-500 mt-1">
          Edit text, stats, and body copy on every page. Changes apply instantly — no rebuild needed.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {EDITABLE_PAGES.map((page, i) => {
            const override = overrides[i]
            const editedCount = Object.values(override).filter(v => v?.trim()).length
            return (
              <div key={page.id} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{page.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{page.description}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                    editedCount > 0
                      ? 'bg-green-50 text-green-700 border-green-100'
                      : 'bg-gray-50 text-gray-400 border-gray-100'
                  }`}>
                    {editedCount > 0 ? `${editedCount} override${editedCount !== 1 ? 's' : ''}` : `${page.blocks.length} fields`}
                  </span>
                  <a
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-600 transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                  </a>
                  <Link
                    href={`/admin/content/${page.id}`}
                    className="flex items-center gap-1 text-xs text-[#C0392B] font-medium hover:underline"
                  >
                    Edit <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
