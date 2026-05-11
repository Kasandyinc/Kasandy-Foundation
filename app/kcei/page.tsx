import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kasandy Circular Economy Initiative',
  description:
    "Canada's first full-stack textile circular economy hub — diverting textile waste from landfill, creating inclusive jobs for refugees, newcomers, people with disabilities, Black and Indigenous women.",
}

const steps = [
  {
    num: '01',
    label: 'COLLECT',
    body: 'Post-consumer textiles collected from BC residents, businesses, and institutions through donation points and scheduled pick-ups.',
  },
  {
    num: '02',
    label: 'SHRED & PROCESS',
    body: 'Industrial shredding, sorting, and fibre blending. Applied research and development conducted in partnership with Emily Carr University of Art + Design (ECUAD).',
  },
  {
    num: '03',
    label: 'MANUFACTURE',
    body: 'Bricks, panels, surfaces, and furnishings manufactured by KCEI workers — people who would otherwise face systematic exclusion from the green economy.',
  },
  {
    num: '04',
    label: 'DEPLOY',
    body: 'Finished products supplied to municipalities, hotels, real estate developers, and corporations committed to sustainable procurement.',
  },
]

const workers = [
  { label: 'Refugees & Newcomers', icon: '🌍' },
  { label: 'People with Disabilities', icon: '♿' },
  { label: 'Black & Indigenous Women', icon: '✊' },
]

const stats = [
  { value: '[X]', label: 'Tonnes diverted', color: 'text-kf-green' },
  { value: '[X]', label: 'Jobs created', color: 'text-brown' },
  { value: '[X]', label: 'Partners', color: 'text-kf-red' },
]

export default function KCEIPage() {
  return (
    <>
      {/* PHOTO HERO */}
      <section
        id="overview"
        className="relative min-h-[520px] flex items-end bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/photos/kcei_hero.jpg), linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-kf-green/80 to-brown-deep/30" />
        <div className="relative z-10 px-10 md:px-16 py-14 max-w-2xl text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/70 mb-2">
            KASANDY CIRCULAR ECONOMY INITIATIVE
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl leading-[1.1] mb-5">
            We don&rsquo;t just recycle materials.
          </h1>
          <div className="flex gap-8 mb-7">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-montserrat font-black text-3xl text-white">{s.value}</div>
                <div className="font-montserrat text-[10px] font-bold tracking-wide text-white/70 uppercase mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#partner"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Partner with us &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/70 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Donate textiles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE SUB-NAV */}
      <div className="bg-sand border-b border-kf-border px-6 md:px-8 py-2.5 flex items-center gap-1 overflow-x-auto">
        <span className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-kf-red mr-4 shrink-0">KCEI</span>
        {[
          { label: 'Overview', href: '/kcei' },
          { label: 'Our Products', href: '/kcei/products' },
          { label: 'Who We Employ', href: '/kcei/communities' },
          { label: 'Partners & Ecosystem', href: '/kcei/ecosystem' },
        ].map(l => (
          <Link key={l.href} href={l.href} className={`font-montserrat text-[12px] px-3 py-1.5 rounded shrink-0 transition-colors ${
            l.href === '/kcei' ? 'bg-kf-red text-white font-bold' : 'text-text-muted hover:text-brown-deep'
          }`}>{l.label}</Link>
        ))}
      </div>

      {/* THE PROBLEM */}
      <section className="bg-cream py-16 px-6 md:px-10" id="kcei-overview">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">The Problem</p>
          <h2 className="font-montserrat font-black text-5xl md:text-6xl text-kf-text leading-none mb-6">
            500 million kilograms.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[15px] text-text-body leading-relaxed mb-4">
                Vancouver discards 500 million kilograms of textiles annually. The overwhelming majority goes
                straight to landfill — materials that could become building products, panels, and surfaces
                with real commercial value.
              </p>
              <p className="text-[15px] text-text-body leading-relaxed mb-4">
                At the same time, refugees, newcomers, and people with disabilities face systematic exclusion
                from the emerging green economy. Jobs in sustainability are concentrated among those who already
                have access. The people most affected by economic precarity are the last to benefit from the
                circular economy transition.
              </p>
              <p className="text-[15px] text-text-body leading-relaxed">
                KCEI is the missing link: the infrastructure that turns a waste problem into an employment
                opportunity, and an employment opportunity into a supply chain solution.
              </p>
            </div>
            <div className="space-y-5">
              <div
                className="rounded-xl overflow-hidden min-h-[220px] bg-cover bg-center shadow-kf-lg"
                style={{ backgroundImage: 'url(/photos/kcei_problem.jpg), linear-gradient(135deg, #7A4028 0%, #50260E 100%)' }}
              />
              <div className="bg-white rounded-xl border border-kf-border shadow-kf p-7">
                <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-text-muted mb-4">
                  Policy Alignment
                </p>
                <ul className="space-y-3">
                  {[
                    'Vancouver Zero Waste 2040',
                    'Greenest City Action Plan',
                    'BC Equity Framework for Green Jobs',
                  ].map(ref => (
                    <li key={ref} className="flex items-start gap-3 text-[13px] text-text-body">
                      <span className="mt-1 w-2 h-2 rounded-full bg-kf-green shrink-0" />
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section
        className="bg-green-pale py-16 px-6 md:px-10"
        id="products"
        style={{ backgroundImage: 'url(/photos/kcei-process.jpg), none' }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">The Process</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            From discarded textile to finished product — four steps.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(step => (
              <div
                key={step.num}
                className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-kf-green flex flex-col"
              >
                <div className="font-montserrat font-black text-4xl text-kf-green/30 leading-none mb-1">
                  {step.num}
                </div>
                <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-green mb-3">
                  STEP {step.num.replace('0', '')} &mdash; {step.label}
                </p>
                <p className="text-[13px] text-text-body leading-relaxed flex-1">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE EMPLOY */}
      <section className="bg-sand py-16 px-6 md:px-10" id="who-we-employ">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Who We Employ</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            Inclusive employment by design.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            KCEI was built on one conviction: sustainability and social inclusion must go hand in hand. Every
            job we create is intentionally designed for people who face the greatest barriers to employment in
            Canada&rsquo;s green economy.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {workers.map(w => (
              <div
                key={w.label}
                className="bg-white border border-kf-border rounded-full px-6 py-3 flex items-center gap-3 shadow-kf"
              >
                <span className="text-xl">{w.icon}</span>
                <span className="font-montserrat font-semibold text-[13px] text-kf-text">{w.label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-7">
              <p className="text-[15px] text-text-body leading-relaxed">
                KCEI doesn&rsquo;t just create jobs — it creates career pathways. Workers gain hands-on experience in
                industrial processing, quality assurance, and sustainable manufacturing. Skills that transfer.
                Wages that dignify.
              </p>
            </div>
            <div
              className="rounded-xl overflow-hidden min-h-[240px] bg-cover bg-center shadow-kf-lg"
              style={{ backgroundImage: 'url(/photos/communities.jpg), linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)' }}
            />
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-white py-16 px-6 md:px-10" id="ecosystem">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">The Ecosystem</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Built with partners, not around them.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Emily Carr University',
                sub: 'Research Partner',
                body: 'Formal ten-milestone MOU for applied R&D on circular textile products. ECUAD faculty and postgraduate researchers embedded in the KCEI pilot.',
                accent: 'border-t-kf-green',
              },
              {
                title: 'City of Vancouver',
                sub: 'Municipal Endorsement',
                body: 'KCEI is aligned with and endorsed by the City of Vancouver&rsquo;s Zero Waste 2040 plan and Greenest City Action Plan.',
                accent: 'border-t-brown',
              },
              {
                title: 'FFBC & SBCCI',
                sub: 'Government Funders',
                body: 'Active government grant supporters funding the KCEI pilot program — validating the model at a systemic level.',
                accent: 'border-t-kf-red',
              },
            ].map(card => (
              <div
                key={card.title}
                className={`bg-cream rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${card.accent}`}
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-text-muted mb-1">
                  {card.sub}
                </p>
                <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3">{card.title}</h3>
                <p
                  className="text-[13px] text-text-body leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section id="partner" className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Work With KCEI
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">Ready to work with KCEI?</h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Whether you&rsquo;re a municipality seeking sustainable products, a business with textile waste to
            donate, or an institutional funder ready to scale the model — we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partners"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Partner with us &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Donate textiles &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
