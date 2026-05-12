import { BarChart2, ExternalLink } from 'lucide-react'

export default function AdminAnalyticsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">Traffic and engagement overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://vercel.com/analytics"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#C0392B] transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <BarChart2 size={20} className="text-gray-400 group-hover:text-[#C0392B] transition-colors" />
            <ExternalLink size={14} className="text-gray-300" />
          </div>
          <p className="text-sm font-semibold text-gray-800">Vercel Analytics</p>
          <p className="text-xs text-gray-400 mt-1">Page views, visitors, and performance data</p>
        </a>

        <a
          href="https://search.google.com/search-console"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#C0392B] transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <BarChart2 size={20} className="text-gray-400 group-hover:text-[#C0392B] transition-colors" />
            <ExternalLink size={14} className="text-gray-300" />
          </div>
          <p className="text-sm font-semibold text-gray-800">Google Search Console</p>
          <p className="text-xs text-gray-400 mt-1">Search rankings, impressions, and SEO performance</p>
        </a>
      </div>
    </div>
  )
}
