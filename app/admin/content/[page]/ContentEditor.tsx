'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { EditablePage } from '@/lib/page-content'
import RichTextEditor from '@/components/admin/RichTextEditor'
import { Save, RotateCcw, ExternalLink, ChevronLeft, Loader2, CheckCircle2 } from 'lucide-react'

export default function ContentEditor({
  pageDef,
  overrides,
}: {
  pageDef: EditablePage
  overrides: Record<string, string>
}) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    pageDef.blocks.forEach(b => {
      init[b.key] = overrides[b.key] ?? ''
    })
    return init
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function set(key: string, val: string) {
    setValues(prev => ({ ...prev, [key]: val }))
  }

  function reset(key: string) {
    setValues(prev => ({ ...prev, [key]: '' }))
  }

  function resetAll() {
    const init: Record<string, string> = {}
    pageDef.blocks.forEach(b => { init[b.key] = '' })
    setValues(init)
  }

  async function handleSave() {
    setSaving(true)
    setError('')
    setSaved(false)

    const res = await fetch('/api/admin/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageId: pageDef.id, blocks: values }),
    })

    setSaving(false)
    if (res.ok) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } else {
      setError('Save failed. Check that Vercel KV is connected to this project.')
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/content" className="text-gray-400 hover:text-gray-700 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{pageDef.label}</h1>
            <p className="text-sm text-gray-500 mt-0.5">{pageDef.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={pageDef.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            <ExternalLink size={14} /> View page
          </a>
          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-2 rounded hover:bg-gray-50 transition-colors"
          >
            <RotateCcw size={14} /> Reset all
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 bg-[#C0392B] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#a82b22] transition-colors disabled:opacity-60"
          >
            {saving ? <Loader2 size={14} className="animate-spin" /> : saved ? <CheckCircle2 size={14} /> : <Save size={14} />}
            {saved ? 'Saved!' : 'Save changes'}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs text-gray-500">
          Leave a field blank to use the hardcoded default. Drag &amp; drop images directly into text editors.
        </div>
        <div className="divide-y divide-gray-100">
          {pageDef.blocks.map(block => {
            const currentValue = values[block.key] ?? ''
            // A rich text field is "overridden" if it has real HTML content (not just empty tags)
            const isOverridden = block.type === 'textarea'
              ? currentValue.replace(/<[^>]*>/g, '').trim().length > 0
              : currentValue.trim().length > 0

            return (
              <div key={block.key} className="px-6 py-6">
                {/* Label row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <label className="text-sm font-semibold text-gray-800">{block.label}</label>
                    {block.hint && <p className="text-xs text-gray-400 mt-0.5">{block.hint}</p>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {isOverridden && (
                      <span className="text-[10px] bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full font-medium">
                        Custom
                      </span>
                    )}
                    {isOverridden && (
                      <button
                        onClick={() => reset(block.key)}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        Reset to default
                      </button>
                    )}
                  </div>
                </div>

                {/* Input */}
                {block.type === 'textarea' ? (
                  <RichTextEditor
                    value={currentValue}
                    onChange={val => set(block.key, val)}
                    placeholder={block.defaultValue}
                  />
                ) : block.type === 'number' ? (
                  <input
                    type="number"
                    value={currentValue}
                    onChange={e => set(block.key, e.target.value)}
                    placeholder={block.defaultValue}
                    className="w-32 text-sm border border-gray-200 rounded px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
                  />
                ) : (
                  <input
                    type="text"
                    value={currentValue}
                    onChange={e => set(block.key, e.target.value)}
                    placeholder={block.defaultValue}
                    className="w-full text-sm border border-gray-200 rounded px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
                  />
                )}

                {/* Default preview */}
                {block.type !== 'textarea' && (
                  <p className="text-[11px] text-gray-400 mt-1.5">
                    Default: <span className="italic">{block.defaultValue.slice(0, 100)}{block.defaultValue.length > 100 ? '…' : ''}</span>
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom save */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xs text-gray-400">Changes are saved to Vercel KV and apply immediately on the live site.</p>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-1.5 bg-[#C0392B] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#a82b22] transition-colors disabled:opacity-60"
        >
          {saving ? <Loader2 size={14} className="animate-spin" /> : saved ? <CheckCircle2 size={14} /> : <Save size={14} />}
          {saved ? 'Saved!' : 'Save changes'}
        </button>
      </div>
    </div>
  )
}
