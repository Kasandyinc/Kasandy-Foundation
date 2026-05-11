'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'done' | 'error'

function MediaInquiryForm() {
  const [form, setForm] = useState({
    name: '', email: '', organization: '', mediaType: '', outlet: '', story: '', deadline: '',
  })
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  function update(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setError('')
    try {
      const res = await fetch('/api/forms/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Something went wrong.'); setState('error'); return }
      setState('done')
    } catch {
      setError('Network error. Please try again.')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div className="bg-green-pale border border-kf-green/30 rounded-xl p-8 text-center">
        <p className="font-montserrat font-bold text-kf-green text-[16px] mb-2">Inquiry received.</p>
        <p className="text-[13px] text-text-body max-w-md mx-auto">
          We typically respond within two business days. For urgent deadlines, please note that in your message.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your name *" value={form.name} onChange={update('name')} required />
        <Field label="Email address *" type="email" value={form.email} onChange={update('email')} required />
        <Field label="Organization / Publication" value={form.organization} onChange={update('organization')} />
        <div>
          <label className="font-montserrat text-[10px] font-bold tracking-wide uppercase text-text-muted block mb-1.5">
            Media type
          </label>
          <select
            value={form.mediaType}
            onChange={update('mediaType')}
            className="w-full border border-kf-border rounded-lg px-4 py-2.5 text-[14px] text-kf-text focus:outline-none focus:border-brown bg-white"
          >
            <option value="">Select…</option>
            {['Print / Digital', 'Broadcast (TV/Radio)', 'Podcast', 'Documentary', 'Academic', 'Other'].map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <Field label="Outlet / Publication name" value={form.outlet} onChange={update('outlet')} />
        <Field label="Deadline (if applicable)" value={form.deadline} onChange={update('deadline')} placeholder="e.g. June 15, 2026" />
      </div>
      <div>
        <label className="font-montserrat text-[10px] font-bold tracking-wide uppercase text-text-muted block mb-1.5">
          What are you working on? *
        </label>
        <textarea
          value={form.story}
          onChange={update('story')}
          required
          rows={5}
          placeholder="Tell us about your story or project and how the Kasandy Foundation fits in…"
          className="w-full border border-kf-border rounded-lg px-4 py-3 text-[14px] text-kf-text placeholder-text-muted focus:outline-none focus:border-brown resize-none"
        />
      </div>
      {error && <p className="text-[12px] text-kf-red">{error}</p>}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors disabled:opacity-60"
      >
        {state === 'loading' ? 'Sending…' : 'Send media inquiry →'}
      </button>
    </form>
  )
}

function SpeakingForm() {
  const [form, setForm] = useState({
    name: '', email: '', organization: '', eventName: '', eventDate: '', audience: '', format: '', brief: '',
  })
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  function update(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setError('')
    try {
      const res = await fetch('/api/forms/speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Something went wrong.'); setState('error'); return }
      setState('done')
    } catch {
      setError('Network error. Please try again.')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div className="bg-green-pale border border-kf-green/30 rounded-xl p-8 text-center">
        <p className="font-montserrat font-bold text-kf-green text-[16px] mb-2">Speaking inquiry received.</p>
        <p className="text-[13px] text-text-body max-w-md mx-auto">
          We review all speaking requests and respond within five business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your name *" value={form.name} onChange={update('name')} required />
        <Field label="Email address *" type="email" value={form.email} onChange={update('email')} required />
        <Field label="Organization *" value={form.organization} onChange={update('organization')} />
        <Field label="Event name *" value={form.eventName} onChange={update('eventName')} required />
        <Field label="Event date" value={form.eventDate} onChange={update('eventDate')} placeholder="e.g. September 2026" />
        <Field label="Audience size" value={form.audience} onChange={update('audience')} placeholder="e.g. 200–500 professionals" />
        <div className="sm:col-span-2">
          <label className="font-montserrat text-[10px] font-bold tracking-wide uppercase text-text-muted block mb-1.5">
            Format
          </label>
          <select
            value={form.format}
            onChange={update('format')}
            className="w-full border border-kf-border rounded-lg px-4 py-2.5 text-[14px] text-kf-text focus:outline-none focus:border-brown bg-white"
          >
            <option value="">Select…</option>
            {['Keynote', 'Panel', 'Fireside chat', 'Workshop', 'Webinar / Virtual', 'Other'].map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="font-montserrat text-[10px] font-bold tracking-wide uppercase text-text-muted block mb-1.5">
          Event brief &amp; context
        </label>
        <textarea
          value={form.brief}
          onChange={update('brief')}
          rows={5}
          placeholder="Tell us about your event, the audience, and what you'd like Jackee to speak about…"
          className="w-full border border-kf-border rounded-lg px-4 py-3 text-[14px] text-kf-text placeholder-text-muted focus:outline-none focus:border-brown resize-none"
        />
      </div>
      {error && <p className="text-[12px] text-kf-red">{error}</p>}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="bg-brown-deep text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {state === 'loading' ? 'Sending…' : 'Send speaking inquiry →'}
      </button>
    </form>
  )
}

function Field({
  label, value, onChange, type = 'text', required = false, placeholder,
}: {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="font-montserrat text-[10px] font-bold tracking-wide uppercase text-text-muted block mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full border border-kf-border rounded-lg px-4 py-2.5 text-[14px] text-kf-text placeholder-text-muted focus:outline-none focus:border-brown"
      />
    </div>
  )
}

export default function MediaForms() {
  const [active, setActive] = useState<'media' | 'speaking'>('media')

  return (
    <section className="bg-white py-14 px-6 md:px-10 border-t border-kf-border">
      <div className="max-w-3xl mx-auto">
        {/* Tab switcher */}
        <div className="flex gap-2 mb-8" id="media-inquiry">
          <button
            onClick={() => setActive('media')}
            className={`font-montserrat text-[11px] font-bold px-5 py-2.5 rounded-sm transition-colors ${
              active === 'media'
                ? 'bg-kf-red text-white'
                : 'border-2 border-kf-border text-text-muted hover:border-brown hover:text-kf-text'
            }`}
          >
            Media inquiry
          </button>
          <button
            id="speaking-inquiry"
            onClick={() => setActive('speaking')}
            className={`font-montserrat text-[11px] font-bold px-5 py-2.5 rounded-sm transition-colors ${
              active === 'speaking'
                ? 'bg-brown-deep text-white'
                : 'border-2 border-kf-border text-text-muted hover:border-brown hover:text-kf-text'
            }`}
          >
            Speaking inquiry
          </button>
        </div>

        {active === 'media' ? (
          <>
            <h2 className="font-montserrat font-extrabold text-2xl text-kf-text mb-2">Media inquiry</h2>
            <p className="text-[14px] text-text-muted mb-8">
              Journalists, producers, and documentarians: use this form for interview requests, background briefings, and press comment.
            </p>
            <MediaInquiryForm key="media" />
          </>
        ) : (
          <>
            <h2 className="font-montserrat font-extrabold text-2xl text-kf-text mb-2">Speaking inquiry</h2>
            <p className="text-[14px] text-text-muted mb-8">
              Event organizers and conference producers: use this form to inquire about Jackee Kasandy as a keynote speaker or panelist.
            </p>
            <SpeakingForm key="speaking" />
          </>
        )}
      </div>
    </section>
  )
}
