import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paths to Home — Adoption Funding',
  description:
    'The Kasandy Foundation\'s Paths to Home fund removes financial barriers for willing adoptive parents in Canada. Every child deserves a loving home — cost should never be what decides.',
}

const fundStats = [
  { value: '3',    label: 'Families funded',                    badge: '2026–2028 Target', color: 'text-kf-red' },
  { value: '3',    label: 'Children placed in loving homes',    badge: '2026–2028 Target', color: 'text-brown' },
  { value: '100%', label: 'Of donations go directly to families', badge: 'Policy commitment', color: 'text-kf-green' },
]

const howItWorks = [
  {
    num: '01',
    title: 'Apply',
    body: 'Eligible families apply for support through a straightforward, confidential application process. We do not require perfection — we require willingness.',
  },
  {
    num: '02',
    title: 'Review',
    body: 'Applications are reviewed with care and confidentiality by the Kasandy Foundation team. Financial need is assessed with compassion, not judgment.',
  },
  {
    num: '03',
    title: 'Receive',
    body: 'Funds are disbursed directly to qualifying adoption costs — legal fees, home studies, agency fees, travel, and court costs.',
  },
]

const whoCanApply = [
  'Families pursuing adoption in Canada — both domestic and international',
  'Applicants who can demonstrate willingness and capacity to parent',
  'Families facing financial barriers to completing the adoption process',
  'Financial need assessed with compassion, not judgment',
]

export default function PathsToHomePage() {
  return (
    <>
      {/* PHOTO HERO */}
      <section
        className="relative min-h-[520px] flex items-end bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/photos/adoption_hero.jpg), linear-gradient(135deg, #50260E 0%, #7A4028 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/85 to-brown-deep/30" />
        <div className="relative z-10 px-10 md:px-16 py-14 max-w-2xl text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/70 mb-2">
            PATHS TO HOME &middot; ADOPTION FUNDING
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl leading-[1.1] mb-4">
            Every child deserves a loving home.
          </h1>
          <p className="text-[17px] text-white/90 font-montserrat font-semibold mb-3 italic">
            Cost shouldn&rsquo;t be what decides.
          </p>
          <p className="text-[14px] text-white/80 leading-relaxed mb-7 max-w-lg">
            Adoption is an act of extraordinary love. It is also, in Canada, an act that can cost $15,000 to
            $50,000 or more — before a child ever comes home.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {fundStats.map(s => (
              <div key={s.label}>
                <div className="font-montserrat font-black text-3xl text-white">{s.value}</div>
                <div className="font-montserrat text-[10px] font-bold tracking-wide text-white/65 uppercase mt-0.5 leading-snug">
                  {s.label}
                </div>
                <div className="font-montserrat text-[8px] font-bold tracking-wide text-white/40 uppercase mt-1">
                  {s.badge}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#apply"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Apply for funding &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/70 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Donate to the fund &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-red-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">The Problem</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-8">
            The cost of love should never be $50,000.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="bg-white rounded-xl border border-kf-border shadow-kf p-7 mb-6">
                <div className="font-montserrat font-black text-4xl md:text-5xl text-kf-red leading-none mb-3">
                  $15,000–$50,000+
                </div>
                <p className="font-montserrat text-[12px] font-bold text-text-muted uppercase tracking-wide">
                  Typical cost of adoption in Canada before a child comes home
                </p>
              </div>
              <p className="text-[15px] text-text-body leading-relaxed mb-4">
                In Canada, adoption costs between $15,000 and $50,000 or more. For many families, that is
                simply impossible.
              </p>
              <p className="text-[15px] text-text-body leading-relaxed">
                Legal fees. Home studies. Agency fees. Travel. Court costs. The costs of adoption are real,
                significant, and front-loaded — which means that willing, loving families are turned away not
                because they can&rsquo;t parent, but because they can&rsquo;t pay.
              </p>
            </div>
            <div className="space-y-5">
              <div
                className="rounded-xl overflow-hidden min-h-[220px] bg-cover bg-center shadow-kf-lg"
                style={{ backgroundImage: 'url(/photos/adoption_content.jpg), linear-gradient(135deg, #7A4028 0%, #C4956A 100%)' }}
              />
              <blockquote className="bg-brown-pale rounded-xl p-7 border-l-4 border-brown-soft">
                <p className="text-[15px] text-text-body leading-relaxed italic mb-5">
                  &ldquo;This cause is close to my heart. I&rsquo;ve always believed that children deserve loving homes,
                  and that willing parents should never have to go into debt to make that happen. The Paths to
                  Home fund is personal.&rdquo;
                </p>
                <footer className="font-montserrat text-[11px] font-bold text-text-muted uppercase tracking-wide">
                  Jackee Kasandy &mdash; Founder &amp; Executive Director
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE FUND WORKS */}
      <section className="bg-cream py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">How It Works</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            A trust fund that removes barriers.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            The Paths to Home fund is straightforward by design. We do not make the application process
            another barrier. We make it a bridge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map(step => (
              <div
                key={step.num}
                className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-kf-red flex flex-col"
              >
                <div className="font-montserrat font-black text-4xl text-kf-red/20 leading-none mb-1">
                  {step.num}
                </div>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3">{step.title}</h3>
                <p className="text-[13px] text-text-body leading-relaxed flex-1">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3">
          {['/photos/adoption_hero.jpg', '/photos/adoption_family.jpg', '/photos/adoption_hope.jpg'].map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${src}), linear-gradient(135deg, #50260E 0%, #C4956A 100%)` }} />
          ))}
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="bg-sand py-16 px-6 md:px-10" id="apply">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="kicker mb-3">Who Can Apply</p>
            <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-5">
              Compassion-first eligibility.
            </h2>
            <p className="text-[15px] text-text-body leading-relaxed mb-6">
              We assess every application with care, not a checklist. If you are a family in Canada who
              wants to adopt and faces financial barriers, we want to hear from you.
            </p>
            <ul className="space-y-4 mb-8">
              {whoCanApply.map(item => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-text-body">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-kf-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
              >
                Apply for funding &rarr;
              </Link>
            </div>
          </div>
          <div
            className="rounded-xl overflow-hidden min-h-[320px] bg-cover bg-center shadow-kf-lg"
            style={{
              backgroundImage:
                'url(/photos/adoption_family.jpg), linear-gradient(135deg, #C4956A 0%, #7A4028 100%)',
            }}
          />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Paths to Home
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Apply for funding. Or make funding possible.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Every dollar donated to Paths to Home goes directly to a family. No administration. No overhead.
            Just children coming home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Apply for funding &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Donate to the fund &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
