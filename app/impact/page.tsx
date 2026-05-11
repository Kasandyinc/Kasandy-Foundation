import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impact — The Kasandy Foundation',
  description:
    'Every number is verifiable. Every story is real. The Kasandy Foundation tracks outcomes, not activity — and publishes our methodology.',
}

const stats = [
  { value: '[X]', label: 'Tonnes diverted\nfrom landfill', sub: 'Goal: 100+ tonnes/year', color: 'text-brown' },
  { value: '[X]', label: 'Sustainable jobs\ncreated', sub: 'Goal: 50 jobs in 3 years', color: 'text-kf-red' },
  { value: '[X]', label: 'Partner\norganizations', sub: '', color: 'text-kf-green' },
  { value: '[X]', label: 'Cities and municipalities\nengaged', sub: '', color: 'text-brown-soft' },
  { value: '[X]', label: 'Girls and women\nsupported (Canada + Kenya)', sub: '', color: 'text-kf-green' },
  { value: '[X]', label: 'Families funded\nfor adoption', sub: '', color: 'text-kf-red' },
  { value: '[X]', label: 'Children placed\nin loving homes', sub: '', color: 'text-brown' },
]

const governance = [
  {
    title: 'DOCUMENTATION REQUIRED',
    body: 'No number hits any counter without supporting documentation on file. Every job is a real contract. Every tonne is a measured, logged diversion.',
  },
  {
    title: 'METHODOLOGY PUBLISHED',
    body: 'How each counter is calculated is published on this page. Funders, journalists, and the public can verify our methodology at any time.',
  },
  {
    title: 'ANNUAL REPORTING',
    body: 'Annual impact reports published and available for download. Methodology disclosed. Jackee sign-off required for all public-facing numbers.',
  },
]

const programCTAs = [
  { label: 'Donate to KCEI →', href: '/kcei', accent: 'border-t-brown', kickerColor: 'text-brown', kicker: 'KCEI' },
  { label: 'Fund education →', href: '/girls-women', accent: 'border-t-kf-green', kickerColor: 'text-kf-green', kicker: 'GIRLS & WOMEN' },
  { label: 'Paths to Home →', href: '/paths-to-home', accent: 'border-t-kf-red', kickerColor: 'text-kf-red', kicker: 'ADOPTION' },
]

export default function ImpactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brown-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Impact Dashboard</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text leading-[1.1] mb-5">
            Numbers that move funders.
          </h1>
          <p className="text-[16px] text-text-body leading-relaxed max-w-xl">
            Every number is verifiable. Every story is real. We track outcomes, not activity — and we publish our methodology.
          </p>
        </div>
      </section>

      {/* STATS GRID */}
      <section className="bg-white py-14 px-6 md:px-10 border-b border-kf-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className={`font-montserrat font-black text-4xl md:text-5xl leading-none ${s.color} mb-2`}>
                  {s.value}
                </div>
                <div className="text-[11px] text-text-body leading-snug whitespace-pre-line mb-1">{s.label}</div>
                {s.sub && (
                  <div className="font-montserrat text-[10px] font-semibold text-text-muted">{s.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTER GOVERNANCE */}
      <section className="bg-sand py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Counter Governance</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-3">
            How we count. Why you can trust these numbers.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            Every counter on this page is governed by the same standard: documentation first, publication second.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governance.map(g => (
              <div
                key={g.title}
                className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-brown"
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-brown mb-3">
                  {g.title}
                </p>
                <p className="text-[13px] text-text-body leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM CTA CARDS */}
      <section className="bg-cream py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Support a Program</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Fund what these numbers represent.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programCTAs.map(p => (
              <div
                key={p.href}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${p.accent} flex flex-col`}
              >
                <p className={`font-montserrat text-[9px] font-bold tracking-[3px] uppercase ${p.kickerColor} mb-4`}>
                  {p.kicker}
                </p>
                <div className="flex-1" />
                <Link
                  href={p.href}
                  className={`font-montserrat text-[13px] font-bold ${p.kickerColor} hover:underline`}
                >
                  {p.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Take Action
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Fund what these numbers represent.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Every number is a person, a family, or a tonne that did not end up in a landfill.
          </p>
          <Link
            href="/donate"
            className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
          >
            Donate &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
