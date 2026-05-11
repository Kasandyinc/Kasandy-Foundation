'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const subNav = [
  { label: 'Overview', href: '/kcei' },
  { label: 'Our Products', href: '/kcei/products' },
  { label: 'Who We Employ', href: '/kcei/communities' },
  { label: 'Partners & Ecosystem', href: '/kcei/ecosystem' },
]

const researchPartners = [
  {
    category: 'RESEARCH PARTNER · MOU SIGNED',
    title: 'Emily Carr University of Art + Design',
    body: 'Formal MOU covering a ten-milestone collaboration. Ellen (faculty lead), William (facilities), Annika (postgraduate researcher). Industrial design, material testing, product development, and research infrastructure.',
    badge: 'Milestone-triggered · Active MOU',
    badgeColor: 'bg-green-pale text-kf-green border border-kf-green/30',
    accent: 'border-t-kf-green',
  },
  {
    category: 'CONSORTIUM MEMBER',
    title: 'UBC Slow Fashion Cluster',
    body: 'Research and advocacy network focused on sustainable fashion systems. KCEI participates as a consortium member, contributing practical circular economy knowledge.',
    badge: 'Active membership',
    badgeColor: 'bg-green-pale text-kf-green border border-kf-green/30',
    accent: 'border-t-kf-green',
  },
  {
    category: 'EQUIPMENT PARTNER',
    title: 'George Brown College',
    body: 'Site visit scheduled for shredder unit evaluation. KCEI assessing a George Brown unit as one of two options for core processing equipment at the hub.',
    badge: 'Equipment evaluation · Site visit pending',
    badgeColor: 'bg-brown-pale text-brown border border-brown/30',
    accent: 'border-t-brown',
  },
]

const municipalPartners = [
  {
    category: 'MUNICIPAL · ENDORSED',
    title: 'City of Vancouver',
    body: 'Endorsed KCEI. Alignment with Zero Waste 2040 Strategy, Greenest City Action Plan, and Equity Framework.',
    accent: 'border-t-kf-red',
  },
  {
    category: 'MUNICIPAL · ACTIVE',
    title: 'City of Victoria',
    body: 'Active engagement on textile waste strategy and regional circular economy planning.',
    accent: 'border-t-kf-red',
  },
  {
    category: 'REGIONAL · FUNDER TARGET',
    title: 'Capital Regional District',
    body: 'CRD Rethink Waste Grant is a priority funding target. Engagement on textile waste strategy and KCEI alignment.',
    accent: 'border-t-brown',
  },
  {
    category: 'WASTE MGMT · MEMBER',
    title: 'CWMA',
    body: 'Coast Waste Management Association member. Access to waste management networks and shared advocacy on textile diversion policy.',
    accent: 'border-t-brown',
  },
]

const industryPartners = [
  {
    category: 'Industry advocacy',
    title: 'Threading Change',
    sub: 'Sara McQuaid',
    body: "Canada's leading textile sustainability advocacy organization. KCEI ecosystem partner.",
    accent: 'border-t-kf-green',
  },
  {
    category: 'Global inspiration',
    title: 'FabBrick (France)',
    sub: null,
    body: "The French circular economy pioneer whose compressed textile brick technology inspired KCEI's primary product line. Not a formal partner — a proof of concept.",
    accent: 'border-t-brown',
  },
]

export default function KCEIEcosystemPage() {
  const pathname = usePathname()

  return (
    <>
      {/* HERO */}
      <section className="bg-brown-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-brown mb-3">KCEI · PARTNERS & ECOSYSTEM</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text leading-[1.1] mb-5 max-w-2xl">
            The infrastructure behind the initiative.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl">
            KCEI is not built alone. A network of research institutions, municipal governments, industry
            organizations, and global innovators make this work possible — and credible.
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

      {/* RESEARCH & ACADEMIC PARTNERS */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Research &amp; Academic Partners</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Where the science gets done.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchPartners.map(p => (
              <div
                key={p.title}
                className={`bg-cream rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${p.accent} flex flex-col`}
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-2">
                  {p.category}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">{p.body}</p>
                <span
                  className={`inline-block font-montserrat text-[10px] font-bold px-3 py-1 rounded-full ${p.badgeColor}`}
                >
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUNICIPAL & GOVERNMENT PARTNERS */}
      <section className="bg-brown-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-brown mb-3">Municipal &amp; Government Partners</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            The cities and regions behind the work.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {municipalPartners.map(p => (
              <div
                key={p.title}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${p.accent}`}
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-2">
                  {p.category}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[13px] text-text-body leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY ECOSYSTEM */}
      <section className="bg-green-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Industry Ecosystem</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            The industry network shaping the field.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {industryPartners.map(p => (
              <div
                key={p.title}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${p.accent}`}
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-2">
                  {p.category}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-1 leading-snug">
                  {p.title}
                </h3>
                {p.sub && (
                  <p className="font-montserrat text-[11px] text-text-muted mb-3">{p.sub}</p>
                )}
                {!p.sub && <div className="mb-3" />}
                <p className="text-[13px] text-text-body leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Join the ecosystem
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Join the KCEI ecosystem.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            For municipalities, corporations, research institutions, and funders. KCEI is actively expanding
            its partner network.
          </p>
          <Link
            href="/partners"
            className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors inline-block"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
