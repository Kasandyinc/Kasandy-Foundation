'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const subNav = [
  { label: 'Overview', href: '/kcei' },
  { label: 'Our Products', href: '/kcei/products' },
  { label: 'Who We Employ', href: '/kcei/communities' },
  { label: 'Partners & Ecosystem', href: '/kcei/ecosystem' },
]

const products = [
  {
    title: 'Acoustic Bricks & Panels',
    badge: 'PRIMARY · NEAR-TERM',
    badgeColor: 'bg-kf-red text-white',
    status: 'Active development',
    body: 'Colourful, compressed textile bricks for interior walls, office partitions, and decorative acoustic surfaces. Inspired by FabBrick (France). Primary near-term product line.',
    serves: 'Offices · Hotels · Schools',
    accent: 'border-t-kf-red',
  },
  {
    title: 'Playground Surfaces',
    badge: 'CIVIC · PRIMARY',
    badgeColor: 'bg-kf-red text-white',
    status: 'Primary near-term',
    body: 'Compressed textile material for playground safety surfaces. Municipal procurement pipeline. Endorsed by City of Vancouver.',
    serves: 'Municipalities · Parks · Schools',
    accent: 'border-t-kf-red',
  },
  {
    title: 'Park Furnishings',
    badge: 'CIVIC · PRIMARY',
    badgeColor: 'bg-kf-red text-white',
    status: 'Primary near-term',
    body: 'Benches, planters, and street furniture made from compressed textile waste. Durable, weather-resistant, and circular.',
    serves: 'Cities · Parks · Campuses',
    accent: 'border-t-kf-red',
  },
  {
    title: 'Construction Insulation Panels',
    badge: 'FEASIBILITY STUDY',
    badgeColor: 'bg-brown text-white',
    status: 'Feasibility study',
    body: 'Alternative wall insulation from compressed textile waste. R&D with ECUAD. Positioned as a feasibility study — not a committed primary stream.',
    serves: 'Developers · Contractors',
    accent: 'border-t-brown',
  },
  {
    title: 'Upcycled Art & Installations',
    badge: 'ART & DÉCOR',
    badgeColor: 'bg-kf-green text-white',
    status: 'Active · ECUAD collaboration',
    body: 'Sustainable art fixtures and décor collaborations with Emily Carr University design students. Bespoke commissions for hotels, galleries, and corporate offices.',
    serves: 'Hotels · Galleries · Offices',
    accent: 'border-t-kf-green',
  },
  {
    title: 'Rework & Repair Services',
    badge: 'SERVICES',
    badgeColor: 'bg-brown text-white',
    status: 'Active',
    body: 'On-site clothing repair, alterations, and upcycling. Extends garment life, provides skills training, and creates direct employment.',
    serves: 'Individuals · Businesses',
    accent: 'border-t-brown',
  },
]

const esg = [
  {
    label: 'ENVIRONMENTAL',
    body: '100% post-consumer textile input. Zero virgin materials. Diverts waste from landfill. Aligned with Vancouver Zero Waste 2040.',
    accent: 'border-t-kf-green',
    kicker: 'text-kf-green',
  },
  {
    label: 'SOCIAL',
    body: 'Inclusive employment by design. Refugees, newcomers, people with disabilities, Black and Indigenous women.',
    accent: 'border-t-brown',
    kicker: 'text-brown',
  },
  {
    label: 'GOVERNANCE',
    body: 'Formal MOU with ECUAD. Government-endorsed. BC-registered nonprofit organization. Full grant transparency.',
    accent: 'border-t-kf-red',
    kicker: 'text-kf-red',
  },
]

export default function KCEIProductsPage() {
  const pathname = usePathname()

  return (
    <>
      {/* HERO */}
      <section className="bg-green-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">KCEI · OUR PRODUCTS</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text leading-[1.1] mb-5 max-w-2xl">
            We are not recycling clothing.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl">
            We are engineering circular economy infrastructure from post-consumer textiles. The end result is
            not second-hand clothing — it is acoustic bricks, playground surfaces, park furnishings, and
            construction insulation. Every product line is real, in development, or approaching market
            readiness.
          </p>
        </div>
      </section>

      {/* SUB-NAV */}
      <div className="bg-sand border-b border-kf-border px-6 md:px-8 py-2.5 flex items-center gap-1 overflow-x-auto">
        <span className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-kf-red mr-4 shrink-0">
          KCEI
        </span>
        {subNav.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`font-montserrat text-[12px] px-3 py-1.5 rounded shrink-0 transition-colors ${
              pathname === l.href
                ? 'bg-kf-red text-white font-bold'
                : 'text-text-muted hover:text-brown-deep'
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* PRODUCT LINES */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Product Lines</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-2">
            Five product families. One circular source.
          </h2>
          <p className="text-[14px] text-text-muted mb-10"></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <div
                key={p.title}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${p.accent} flex flex-col`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className={`inline-block font-montserrat text-[9px] font-bold tracking-[2px] uppercase px-2 py-1 rounded-full ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-1 leading-snug">
                  {p.title}
                </h3>
                <p className="font-montserrat text-[10px] font-semibold text-text-muted uppercase tracking-wide mb-3">
                  {p.status}
                </p>
                <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">{p.body}</p>
                <div className="border-t border-kf-border pt-3">
                  <span className="font-montserrat text-[10px] font-bold tracking-[1px] uppercase text-text-muted">
                    Serves
                  </span>
                  <p className="text-[12px] text-text-body mt-0.5">{p.serves}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="bg-brown-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">ESG Alignment</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Why procurement managers choose KCEI.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {esg.map(e => (
              <div
                key={e.label}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${e.accent}`}
              >
                <p className={`font-montserrat text-[10px] font-bold tracking-[3px] uppercase ${e.kicker} mb-3`}>
                  {e.label}
                </p>
                <p className="text-[14px] text-text-body leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-montserrat font-extrabold text-3xl mb-3">
            Source KCEI products. Partner with the hub.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Municipalities, developers, hotels, and institutions — KCEI is ready to supply.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partners"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Inquire about procurement &rarr;
            </Link>
            <Link
              href="/kcei"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Learn about KCEI &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
