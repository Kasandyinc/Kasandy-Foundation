import { ImageIcon } from 'lucide-react'

export default function AdminMediaPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Media Library</h1>
        <p className="text-sm text-gray-500 mt-1">Photos and files used across the site.</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <ImageIcon size={36} className="mx-auto text-gray-200 mb-3" />
        <p className="text-sm font-medium text-gray-500 mb-1">Media library coming soon</p>
        <p className="text-xs text-gray-400">
          Photos are currently served from <code className="bg-gray-100 px-1 rounded">/public/photos/</code>.
          Upload new images via your Vercel dashboard or directly to the repository.
        </p>
      </div>
    </div>
  )
}
