'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const subNav = [
  { label: 'Overview', href: '/kcei' },
  { label: 'Our Products', href: '/kcei/products' },
  { label: 'Who We Employ', href: '/kcei/communities' },
  { label: 'Partners & Ecosystem', href: '/kcei/ecosystem' },
]

const communities = [
  {
    icon: '🌍',
    title: 'Refugees & Newcomers',
    body: 'KCEI offers refugees and newcomers meaningful, stable employment in Vancouver\'s growing green economy. Trauma-informed workplace design. Language-accessible training. Dignity of work from day one.',
    funder: 'IRCC · ESDC · Settlement programs',
  },
  {
    icon: '♿',
    title: 'People with Physical Disabilities',
    body: 'Accessible workshop design, adaptive equipment, and flexible roles ensure full participation. KCEI\'s hub is designed with accessibility as a first principle, not an afterthought.',
    funder: 'WorkBC disability programs · Federal Equity Act',
  },
  {
    icon: '🧠',
    title: 'People with Developmental Disabilities',
    body: 'Supported employment model with structured, repetitive tasks in sorting and processing that align with varied support needs.',
    funder: 'CLBC · Federal Disability Tax Credit programs',
  },
  {
    icon: '✊🏾',
    title: 'Black Women',
    body: 'Employment in the green economy for Black women — with leadership pathways, not just entry-level roles. Equity in wages, advancement, and decision-making.',
    funder: 'Black entrepreneurship programs · Women\'s employment equity',
  },
  {
    icon: '🪶',
    title: 'Indigenous Women',
    body: 'KCEI\'s circular economy model aligns with Indigenous principles of stewardship and care for the land. We actively recruit Indigenous women into leadership roles across the hub.',
    funder: 'Indigenous economic development funds · FNEI',
  },
  {
    icon: '👩‍💼',
    title: 'Women Experiencing Barriers to Employment',
    body: 'Single mothers, women in recovery, women leaving precarious work — KCEI offers flexible scheduling, wraparound support, and a workplace built around real lives.',
    funder: 'Women\'s employment programs · ESDC',
  },
]

export default function KCEICommunitiesPage() {
  const pathname = usePathname()

  return (
    <>
      {/* HERO */}
      <section className="bg-kf-green py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            KCEI · WHO WE EMPLOY
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl leading-[1.1] mb-5 max-w-2xl">
            The green economy will include everyone. Or it won&rsquo;t work.
          </h1>
          <p className="text-[15px] text-white/85 leading-relaxed max-w-2xl">
            KCEI was built on one conviction: sustainability and social inclusion must go hand in hand. We hire
            from communities that are systematically excluded from the green economy — and design workplaces
            that actually work for them.
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

      {/* COMMUNITIES */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">The Workforce</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-2">
            Six communities, one workforce.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed mb-10">
            The people who make KCEI possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map(c => (
              <div
                key={c.title}
                className="bg-white border border-kf-border rounded-xl p-6 shadow-kf flex flex-col"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">{c.body}</p>
                <div className="border-t border-kf-border pt-3">
                  <span className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted block mb-1">
                    Funder Alignment
                  </span>
                  <p className="text-[12px] text-text-body">{c.funder}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-green-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Strategic Note</p>
          <blockquote className="border-l-4 border-kf-green pl-6 mb-10">
            <p className="text-[15px] text-text-body leading-relaxed italic mb-3">
              &ldquo;Each community named here is a distinct federal, provincial, and foundation funding
              trigger. ESDC, WorkBC, IRCC, disability employment programs, Indigenous economic development
              funds — all have mandates tied to exactly these groups. KCEI was designed to serve every one of
              them simultaneously.&rdquo;
            </p>
            <cite className="font-montserrat text-[11px] font-semibold text-text-muted not-italic">
              — Strategic note
            </cite>
          </blockquote>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-kf-green text-center">
              <p className="font-montserrat font-black text-3xl text-kf-green mb-2">6</p>
              <p className="font-montserrat text-[11px] font-bold tracking-wide uppercase text-text-muted">
                Distinct employment communities served
              </p>
            </div>
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-brown text-center">
              <p className="font-montserrat font-black text-3xl text-brown mb-2">Multiple</p>
              <p className="font-montserrat text-[11px] font-bold tracking-wide uppercase text-text-muted">
                Federal &amp; provincial funding mandates aligned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO SECTION */}
      <section className="bg-sand px-6 md:px-10 py-14 border-t border-kf-border">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-kf-lg">
            <img
              src="/photos/disability_image_2.png"
              alt="Inclusive workforce — KCEI workers including people with disabilities, wheelchair users, and prosthetic limb users"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p className="font-montserrat text-[11px] font-semibold text-text-muted italic mt-4 text-center">
            KCEI employs people with physical and developmental disabilities — accessible workplace design is a first principle, not an afterthought.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-montserrat font-extrabold text-3xl mb-3">
            Partner with KCEI. Hire from our workforce. Fund the hub.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Whether you&rsquo;re an employer, a funder, or a municipality — there is a role for you in the KCEI
            ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partners"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Learn about partnership &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Donate to KCEI &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
