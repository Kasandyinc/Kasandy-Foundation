'use client'

import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const SQUARE_APP_ID = process.env.NEXT_PUBLIC_SQUARE_APP_ID!
const SQUARE_LOCATION_ID = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!

const funds = [
  {
    id: 'kcei',
    kicker: 'KASANDY CIRCULAR ECONOMY INITIATIVE',
    title: 'Circular Economy Fund',
    description: 'Powers textile waste transformation into jobs. Funds equipment, R&D with ECUAD, and inclusive employment for refugees, newcomers, and people with disabilities.',
    photo: '/photos/circular.jpg',
    gradient: 'linear-gradient(135deg, #7A4028 0%, #C4956A 100%)',
    accentClass: 'border-t-brown',
    kickerClass: 'text-brown',
    allocation: [
      { label: 'Equipment & Manufacturing', pct: 55, color: 'bg-brown' },
      { label: 'Employment & Training',      pct: 30, color: 'bg-brown-soft' },
      { label: 'R&D (ECUAD MOU)',            pct: 15, color: 'bg-kf-border' },
    ],
  },
  {
    id: 'education',
    kicker: 'GIRLS & WOMEN EDUCATION',
    title: 'Education Fund',
    description: 'Funds bursaries for Black girls and women in Canada and supports One Girl Can Foundation in Kenya. Both streams are equal in ambition and funding.',
    photo: '/photos/edu_hero.jpg',
    gradient: 'linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)',
    accentClass: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
    allocation: [
      { label: 'Canada bursaries',    pct: 50, color: 'bg-kf-green' },
      { label: 'Kenya (One Girl Can)', pct: 40, color: 'bg-green-deep' },
      { label: 'Administration',       pct: 10, color: 'bg-kf-border' },
    ],
  },
  {
    id: 'adoption',
    kicker: 'PATHS TO HOME · ADOPTION',
    title: 'Paths to Home Fund',
    description: '100% of donations go directly to families. Covers legal fees, home studies, agency fees, and other qualifying adoption costs for families in financial need.',
    photo: '/photos/adoption_hero.jpg',
    gradient: 'linear-gradient(135deg, #C8352A 0%, #7A4028 100%)',
    accentClass: 'border-t-kf-red',
    kickerClass: 'text-kf-red',
    allocation: [
      { label: 'Direct family disbursements', pct: 100, color: 'bg-kf-red' },
    ],
  },
]

const tiers = [25, 50, 100, 250, 500]

declare global {
  interface Window {
    Square?: {
      payments: (appId: string, locationId: string) => Promise<{
        card: () => Promise<{
          attach: (selector: string) => Promise<void>
          tokenize: () => Promise<{ status: string; token?: string; errors?: { message: string }[] }>
        }>
      }>
    }
  }
}

export default function DonatePage() {
  const [selectedFund, setSelectedFund] = useState<string>('kcei')
  const [amount, setAmount]             = useState<number>(50)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [frequency, setFrequency]       = useState<'one-time' | 'monthly'>('one-time')
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState<string | null>(null)
  const [success, setSuccess]           = useState(false)
  const [, setSdkReady]                 = useState(false)

  const finalAmount = customAmount ? parseFloat(customAmount) : amount
  const fund = funds.find(f => f.id === selectedFund)!

  async function handlePayment() {
    setLoading(true)
    setError(null)
    try {
      if (!window.Square) throw new Error('Square payments not loaded.')
      const payments = await window.Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID)
      const card     = await payments.card()
      await card.attach('#card-container')
      const result = await card.tokenize()
      if (result.status !== 'OK' || !result.token) {
        throw new Error(result.errors?.[0]?.message ?? 'Payment failed.')
      }
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: result.token,
          amount: Math.round(finalAmount * 100),
          fund: selectedFund,
          frequency,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Payment failed.')
      setSuccess(true)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-cream">
        <div className="text-5xl mb-6">🙏</div>
        <p className="kicker mb-3">Thank You</p>
        <h1 className="font-montserrat font-black text-4xl text-kf-text mb-5">Your donation is confirmed.</h1>
        <p className="text-[15px] text-text-body leading-relaxed max-w-lg mb-8">
          Your gift to the <strong>{fund.title}</strong> is making a difference. You&apos;ll receive a tax receipt at your email address.
        </p>
        <Link href="/" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://sandbox.web.squarecdn.com/v1/square.js"
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
      />

      {/* HERO */}
      <section className="bg-brown-pale border-b border-kf-border py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="kicker mb-3">Donate</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text mb-4 leading-[1.08]">
            Support the work.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed">
            Choose a fund, set your amount, and give with confidence. 85¢ of every dollar goes directly to programs.
          </p>
        </div>
      </section>

      {/* MAIN DONATE FLOW */}
      <section className="bg-cream py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT: Fund selector */}
          <div className="lg:col-span-2 space-y-5">
            {/* Step 1: Choose fund */}
            <div>
              <p className="font-montserrat font-bold text-[11px] tracking-[2px] uppercase text-text-muted mb-4">Step 1 — Choose a fund</p>
              <div className="space-y-4">
                {funds.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFund(f.id)}
                    className={`w-full text-left bg-white border-2 rounded-xl p-5 transition-all shadow-kf ${
                      selectedFund === f.id ? 'border-kf-red' : 'border-kf-border hover:border-brown-soft'
                    }`}
                  >
                    <div
                      className="w-full h-24 rounded-lg mb-4 bg-cover bg-center"
                      style={{ backgroundImage: `url(${f.photo}), ${f.gradient}` }}
                    />
                    <div className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-1 ${f.kickerClass}`}>{f.kicker}</div>
                    <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-2">{f.title}</h3>
                    <p className="text-[12.5px] text-text-body leading-relaxed">{f.description}</p>
                    {/* Allocation bars */}
                    <div className="mt-4 space-y-2">
                      {f.allocation.map(a => (
                        <div key={a.label}>
                          <div className="flex justify-between font-montserrat text-[11px] font-semibold text-kf-text mb-1">
                            <span>{a.label}</span><span>{a.pct}%</span>
                          </div>
                          <div className="h-[6px] bg-kf-border rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Amount & frequency */}
            <div>
              <p className="font-montserrat font-bold text-[11px] tracking-[2px] uppercase text-text-muted mb-4">Step 2 — Choose an amount</p>
              {/* Frequency toggle */}
              <div className="flex gap-2 mb-5">
                {(['one-time', 'monthly'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`font-montserrat text-[11px] font-bold px-5 py-2.5 rounded-sm border transition-colors ${
                      frequency === f
                        ? 'bg-brown-deep text-white border-brown-deep'
                        : 'bg-white text-text-body border-kf-border hover:border-brown'
                    }`}
                  >
                    {f === 'one-time' ? 'One-time' : 'Monthly'}
                  </button>
                ))}
              </div>
              {/* Amount tiers */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-4">
                {tiers.map(t => (
                  <button
                    key={t}
                    onClick={() => { setAmount(t); setCustomAmount('') }}
                    className={`font-montserrat font-bold text-[14px] py-3 rounded-sm border transition-colors ${
                      amount === t && !customAmount
                        ? 'bg-kf-red text-white border-kf-red'
                        : 'bg-white text-text-body border-kf-border hover:border-brown'
                    }`}
                  >
                    ${t}
                  </button>
                ))}
              </div>
              {/* Custom amount */}
              <div className="flex items-center gap-2">
                <span className="font-montserrat font-bold text-text-muted text-[14px]">$</span>
                <input
                  type="number"
                  min="5"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={e => setCustomAmount(e.target.value)}
                  className="flex-1 border border-kf-border rounded-sm px-4 py-3 text-[14px] text-kf-text focus:outline-none focus:ring-2 focus:ring-kf-red"
                />
              </div>
            </div>

            {/* Step 3: Payment */}
            <div>
              <p className="font-montserrat font-bold text-[11px] tracking-[2px] uppercase text-text-muted mb-4">Step 3 — Payment</p>
              <div id="card-container" className="bg-white border border-kf-border rounded-sm p-4 min-h-[80px]" />
              {error && <p className="text-kf-red text-[13px] mt-3">{error}</p>}
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-kf-border rounded-xl p-6 shadow-kf sticky top-24">
              <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-text-muted mb-4">Your donation</p>
              <div className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-1 ${fund.kickerClass}`}>{fund.kicker}</div>
              <p className="font-montserrat font-bold text-[16px] text-kf-text mb-4">{fund.title}</p>
              <div className="border-t border-kf-border pt-4 mb-4">
                <div className="flex justify-between font-montserrat text-[13px] text-text-body mb-2">
                  <span>Amount</span>
                  <span className="font-bold text-kf-text">${finalAmount > 0 ? finalAmount.toFixed(2) : '—'}</span>
                </div>
                <div className="flex justify-between font-montserrat text-[13px] text-text-body">
                  <span>Frequency</span>
                  <span className="font-bold text-kf-text capitalize">{frequency}</span>
                </div>
              </div>
              <button
                onClick={handlePayment}
                disabled={loading || !(finalAmount > 0)}
                className="w-full bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide py-4 rounded-sm hover:bg-[#a82b22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing…' : `Donate $${finalAmount > 0 ? finalAmount.toFixed(2) : '—'}`}
              </button>
              <p className="text-[10px] text-text-muted mt-3 text-center leading-snug">
                Secure payment via Square. You will receive a tax receipt by email. The Kasandy Foundation is a registered BC charitable organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-brown-pale border-t border-kf-border py-12 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="kicker text-center mb-2">Accountability</p>
          <h2 className="font-montserrat font-extrabold text-2xl text-kf-text text-center mb-8">Where your money goes.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { pct: '85%', label: 'Program delivery', desc: 'Direct investment into KCEI operations, education bursaries, and adoption funding.' },
              { pct: '10%', label: 'Fundraising & outreach', desc: 'Awareness campaigns to grow the movement and reach more families.' },
              { pct: '5%',  label: 'Administration', desc: 'Governance, compliance, and financial reporting.' },
            ].map(a => (
              <div key={a.pct} className="bg-white rounded-xl p-6 border border-kf-border shadow-kf text-center">
                <div className="font-montserrat font-black text-4xl text-kf-red mb-2">{a.pct}</div>
                <div className="font-montserrat font-bold text-[13px] text-kf-text mb-2">{a.label}</div>
                <p className="text-[12px] text-text-body leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
