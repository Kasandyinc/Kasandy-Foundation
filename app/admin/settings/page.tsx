'use client'

import { useState } from 'react'
import { Save, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function SettingsPage() {
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [confirm, setConfirm] = useState('')
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (next !== confirm) {
      setStatus('error')
      setMessage('New passwords do not match.')
      return
    }
    if (next.length < 8) {
      setStatus('error')
      setMessage('New password must be at least 8 characters.')
      return
    }

    setSaving(true)
    setStatus('idle')

    const res = await fetch('/api/admin/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword: current, newPassword: next }),
    })

    setSaving(false)
    if (res.ok) {
      setStatus('saved')
      setMessage('Password updated. Update ADMIN_PASSWORD in Vercel env vars to make it permanent.')
      setCurrent(''); setNext(''); setConfirm('')
    } else {
      const body = await res.json()
      setStatus('error')
      setMessage(body.error ?? 'Failed to update password.')
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Admin panel configuration.</p>
      </div>

      <div className="max-w-lg">
        {/* Change password */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">Change Admin Password</h2>
          <p className="text-xs text-gray-500 mb-5">
            Vercel stores the password in the <code className="bg-gray-100 px-1 py-0.5 rounded">ADMIN_PASSWORD</code> environment variable.
            Update it there to make changes permanent.
          </p>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Current Password</label>
              <input
                type="password"
                value={current}
                onChange={e => setCurrent(e.target.value)}
                required
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">New Password</label>
              <input
                type="password"
                value={next}
                onChange={e => setNext(e.target.value)}
                required
                minLength={8}
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Confirm New Password</label>
              <input
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
              />
            </div>

            {status !== 'idle' && (
              <div className={`flex items-start gap-2 px-3 py-2.5 rounded text-sm ${
                status === 'saved' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {status === 'saved' ? <CheckCircle2 size={15} className="mt-0.5 shrink-0" /> : <AlertCircle size={15} className="mt-0.5 shrink-0" />}
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 bg-[#C0392B] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#a82b22] transition-colors disabled:opacity-60"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              Update Password
            </button>
          </form>
        </div>

        {/* Integration Status */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Integration Status</h2>
          <div className="space-y-3">
            {[
              { name: 'Square Payments', key: 'SQUARE_ACCESS_TOKEN' },
              { name: 'Resend Email',    key: 'RESEND_API_KEY' },
              { name: 'Vercel KV',       key: 'KV_REST_API_URL' },
              { name: 'Research Gate',   key: 'RESEARCH_GATE_SECRET' },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{item.name}</span>
                <div className="flex items-center gap-2">
                  <code className="text-xs text-gray-400">{item.key}</code>
                  <span className="w-2 h-2 rounded-full bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Manage all env vars in your Vercel project → Settings → Environment Variables.
          </p>
        </div>
      </div>
    </div>
  )
}
