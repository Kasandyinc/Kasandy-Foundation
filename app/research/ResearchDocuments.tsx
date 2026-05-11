'use client'

import { useState } from 'react'

const documents = [
  {
    id: 'KCEI_Research_01_Acoustic_Brick',
    category: 'MATERIAL RESEARCH',
    status: 'Active R&D',
    title: 'Acoustic Brick Compression Testing Report',
    desc: 'Applied R&D into textile-based acoustic brick manufacturing. Material testing, compression ratings, and acoustic performance benchmarks produced in collaboration with ECUAD.',
    type: 'Research Report',
    accent: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
    badgeClass: 'bg-green-pale text-green-deep',
  },
  {
    id: 'KCEI_Research_02_Inclusive_Green_Economy',
    category: 'POLICY PAPER',
    status: 'Policy development',
    title: 'Inclusive Green Economy: A Framework for Canadian Cities',
    desc: 'How circular economy initiatives can be designed from the outset to include communities systematically excluded from the green economy — refugees, newcomers, people with disabilities, Black and Indigenous women.',
    type: 'Policy Brief',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    badgeClass: 'bg-brown-pale text-brown-deep',
  },
  {
    id: 'KCEI_Research_03_Insulation_Feasibility',
    category: 'FEASIBILITY STUDY',
    status: 'Feasibility study',
    title: 'Textile-Based Insulation Panels: Feasibility Assessment',
    desc: 'Applied R&D into construction insulation from compressed textile waste. National Building Code compliance analysis. Positioned as a feasibility study — not a committed product stream.',
    type: 'Feasibility Study',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    badgeClass: 'bg-brown-pale text-brown-deep',
  },
  {
    id: 'KCEI_Research_04_Midline_Activity_Report',
    category: 'IMPACT REPORT',
    status: 'SBCCI grant deliverable',
    title: 'KCEI Midline Activity Report: January–April 2026',
    desc: 'Activity report covering KCEI operational milestones, partnership development, grant deliverables, and community engagement outcomes for the SBCCI grant period.',
    type: 'Impact Report',
    accent: 'border-t-kf-red',
    kickerClass: 'text-kf-red',
    badgeClass: 'bg-red-pale text-kf-red',
  },
  {
    id: 'KCEI_Research_05_Canada_Kenya_Textile_Pipeline',
    category: 'ECOSYSTEM ANALYSIS',
    status: 'Community education',
    title: 'The Canada–Kenya Textile Export Pipeline: What BC Residents Should Know',
    desc: "White paper documenting the bulk export of Canadian donated textiles to African markets. Evidence base for KCEI's community collection model and the case for local circular infrastructure.",
    type: 'White Paper',
    accent: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
    badgeClass: 'bg-green-pale text-green-deep',
  },
  {
    id: 'KCEI_Research_06_Circular_Economy_Employment_Models',
    category: 'RESEARCH BRIEF',
    status: 'Ecosystem analysis',
    title: 'Circular Economy Employment: International Models',
    desc: "Comparative analysis of circular economy employment models in France (FabBrick), the Netherlands, and Kenya. Evidence base for KCEI's inclusive employment design.",
    type: 'Research Brief',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    badgeClass: 'bg-brown-pale text-brown-deep',
  },
]

type Doc = typeof documents[number]

export default function ResearchDocuments() {
  const [viewer, setViewer] = useState<Doc | null>(null)
  const [gate, setGate] = useState<Doc | null>(null)
  const [email, setEmail] = useState('')
  const [gateState, setGateState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [gateError, setGateError] = useState('')

  function openViewer(doc: Doc) {
    setViewer(doc)
  }

  function openGate(doc: Doc) {
    setGate(doc)
    setEmail('')
    setGateState('idle')
    setGateError('')
  }

  async function handleDownload(e: React.FormEvent) {
    e.preventDefault()
    if (!gate) return
    setGateState('loading')
    setGateError('')
    try {
      const res = await fetch('/api/research/gate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, documentId: gate.id }),
      })
      const data = await res.json()
      if (!res.ok) {
        setGateError(data.error ?? 'Something went wrong.')
        setGateState('error')
        return
      }
      setGateState('done')
      // Trigger download
      const a = document.createElement('a')
      a.href = data.downloadUrl
      a.click()
    } catch {
      setGateError('Network error. Please try again.')
      setGateState('error')
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map(doc => (
          <div
            key={doc.id}
            className={`bg-white rounded-xl border border-kf-border shadow-kf border-t-4 ${doc.accent} flex flex-col`}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-2 ${doc.kickerClass}`}>
                {doc.category}
              </div>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className={`font-montserrat text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${doc.badgeClass}`}>
                  {doc.type}
                </span>
                <span className="bg-sand text-text-muted font-montserrat text-[9px] font-semibold px-2.5 py-1 rounded-full">
                  {doc.status}
                </span>
              </div>
              <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug flex-1">
                {doc.title}
              </h3>
              <p className="text-[12.5px] text-text-body leading-relaxed mb-5">{doc.desc}</p>
              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => openViewer(doc)}
                  className="font-montserrat text-[11px] font-bold text-kf-green hover:underline"
                >
                  Read online →
                </button>
                <button
                  onClick={() => openGate(doc)}
                  className="font-montserrat text-[11px] font-bold text-kf-red hover:underline"
                >
                  Download PDF →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF VIEWER MODAL */}
      {viewer && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex flex-col"
          onClick={e => { if (e.target === e.currentTarget) setViewer(null) }}
        >
          <div className="bg-white flex items-center justify-between px-5 py-3 border-b border-kf-border shrink-0">
            <div>
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted">
                {viewer.category}
              </p>
              <p className="font-montserrat font-bold text-[14px] text-kf-text leading-snug max-w-2xl">
                {viewer.title}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 ml-6">
              <button
                onClick={() => { setViewer(null); openGate(viewer) }}
                className="font-montserrat text-[11px] font-bold text-kf-red hover:underline hidden sm:block"
              >
                Download PDF →
              </button>
              <button
                onClick={() => setViewer(null)}
                className="font-montserrat text-[11px] font-bold text-text-muted hover:text-kf-text"
              >
                ✕ Close
              </button>
            </div>
          </div>
          <iframe
            src={`/api/research/view?id=${viewer.id}`}
            className="flex-1 w-full"
            title={viewer.title}
          />
        </div>
      )}

      {/* EMAIL GATE MODAL */}
      {gate && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setGate(null) }}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            <button
              onClick={() => setGate(null)}
              className="font-montserrat text-[10px] font-bold text-text-muted hover:text-kf-text mb-5 block"
            >
              ← Back
            </button>
            <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-2">
              Download PDF
            </p>
            <h2 className="font-montserrat font-bold text-[18px] text-kf-text mb-1 leading-snug">
              {gate.title}
            </h2>
            <p className="text-[13px] text-text-muted mb-6">
              Enter your email to receive a personalized download link. Valid for 15 minutes.
            </p>

            {gateState === 'done' ? (
              <div className="bg-green-pale border border-kf-green/30 rounded-lg p-5 text-center">
                <p className="font-montserrat font-bold text-kf-green text-[14px] mb-1">Your download is starting.</p>
                <p className="text-[12px] text-text-body">
                  Your copy of this research includes a personal watermark. It is licensed for personal and professional use — not redistribution.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="font-montserrat text-[10px] font-bold tracking-wide uppercase text-text-muted block mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-kf-border rounded-lg px-4 py-2.5 text-[14px] text-kf-text placeholder-text-muted focus:outline-none focus:border-brown"
                  />
                </div>
                {gateError && (
                  <p className="text-[12px] text-kf-red">{gateError}</p>
                )}
                <button
                  type="submit"
                  disabled={gateState === 'loading'}
                  className="w-full bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide py-3 rounded-sm hover:bg-[#a82b22] transition-colors disabled:opacity-60"
                >
                  {gateState === 'loading' ? 'Generating link…' : 'Download PDF →'}
                </button>
                <p className="text-[11px] text-text-muted text-center">
                  We use your email only to watermark this document. No spam.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
