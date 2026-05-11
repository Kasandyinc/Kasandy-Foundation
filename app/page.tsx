import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Kasandy Foundation — Nothing and No One Is Wasted',
}

const programs = [
  {
    kicker: 'KASANDY CIRCULAR ECONOMY INITIATIVE',
    title: 'Textile waste → products → inclusive jobs.',
    body: "Canada's first full-stack textile circular economy hub. Endorsed by City of Vancouver. Research partner: ECUAD.",
    href: '/kcei',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
  },
  {
    kicker: 'GIRLS & WOMEN EDUCATION',
    title: 'Opening doors to higher education.',
    body: 'Bursaries for Black girls and women in Canada + One Girl Can Foundation in Kenya. Both streams equal in ambition.',
    href: '/girls-women',
    accent: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
  },
  {
    kicker: 'PATHS TO HOME · ADOPTION',
    title: 'Every child deserves a loving home.',
    body: 'A trust fund removing financial barriers for willing adoptive parents. 100% of donations go directly to families.',
    href: '/paths-to-home',
    accent: 'border-t-kf-red',
    kickerClass: 'text-kf-red',
  },
]

const stats = [
  { number: '[X]', label: 'Tonnes of textiles\ndiverted from landfill', color: 'text-brown' },
  { number: '[X]', label: 'Sustainable jobs\ncreated', color: 'text-kf-red' },
  { number: '[X]', label: 'Families funded\nthrough adoption', color: 'text-kf-green' },
  { number: '[X]', label: 'Girls & women\neducation funded', color: 'text-brown-soft' },
]

const doors = [
  { emoji: '🏭', label: 'Partner with KCEI',  sub: 'Source our products or donate textiles', href: '/kcei#partner' },
  { emoji: '🎓', label: 'Support Education',   sub: 'Fund bursaries in Canada & Kenya',       href: '/girls-women' },
  { emoji: '🏠', label: 'Fund a Family',       sub: 'Help remove adoption cost barriers',     href: '/paths-to-home' },
  { emoji: '🤝', label: 'Become a Funder',     sub: 'Institutional grants & partnerships',    href: '/partners' },
  { emoji: '❤️', label: 'Donate',             sub: 'Support any of our three programs',      href: '/donate' },
]

const partners = ['FFBC', 'SBCCI', 'City of Vancouver', 'Emily Carr University', 'One Girl Can']

export default function HomePage() {
  return (
    <>
      {/* SPLIT HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        <div className="bg-cream flex flex-col justify-center px-10 md:px-16 py-16">
          <p className="kicker mb-3">The Kasandy Foundation</p>
          <h1 className="font-montserrat font-black text-4xl md:text-[44px] leading-[1.08] text-kf-text mb-5">
            Nothing and<br />No One Is Wasted.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed max-w-lg mb-8">
            A BC-registered charitable foundation built on one conviction: sustainability and social justice are the same bet. Everything we do in Canada, we also do in Kenya.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/donate" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors">
              Donate Now
            </Link>
            <Link href="/about" className="border-2 border-brown-deep text-brown-deep font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-brown-pale transition-colors">
              Our Story
            </Link>
          </div>
        </div>
        <div
          className="min-h-[380px] lg:min-h-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/photos/circular.jpg), linear-gradient(135deg, #7A4028 0%, #C4956A 100%)' }}
        />
      </section>

      {/* IMPACT STATS */}
      <section className="bg-brown-pale border-y border-kf-border">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className={`font-montserrat font-black text-4xl leading-none ${s.color}`}>{s.number}</div>
              <div className="text-[11px] text-text-muted mt-2 leading-snug whitespace-pre-line">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FIVE AUDIENCE DOORS */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker text-center mb-2">Get Involved</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text text-center mb-10">
            How do you want to make a difference?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {doors.map(d => (
              <Link key={d.href} href={d.href} className="group bg-sand border border-kf-border rounded-lg p-5 text-center hover:shadow-kf-lg hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{d.emoji}</div>
                <div className="font-montserrat font-bold text-[13px] text-kf-text mb-1 group-hover:text-kf-red transition-colors">{d.label}</div>
                <div className="text-[11px] text-text-muted leading-snug">{d.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PROGRAMS */}
      <section className="bg-cream py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-2">Our Programs</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">Three missions. One foundation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map(p => (
              <div key={p.href} className={`bg-white rounded-xl p-6 border border-kf-border shadow-kf border-t-4 ${p.accent} flex flex-col`}>
                <div className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-3 ${p.kickerClass}`}>{p.kicker}</div>
                <h3 className="font-montserrat font-bold text-[18px] text-kf-text mb-3 leading-snug">{p.title}</h3>
                <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">{p.body}</p>
                <Link href={p.href} className={`font-montserrat text-[11px] font-bold ${p.kickerClass}`}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="bg-brown-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="kicker mb-2">The People Behind the Work</p>
            <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-5">
              Founded by Jackee Kasandy.<br />Built by a dedicated team.
            </h2>
            <p className="text-[14px] text-text-body leading-relaxed mb-6">
              Born and based in Vancouver with deep roots in Kenya, Jackee Kasandy built the Kasandy Foundation on the belief that nothing — and no one — should be wasted. Together with Deress Asghedom, Nadine Umutoni, and Raphael Malachi, the team is turning that belief into action.
            </p>
            <Link href="/team" className="font-montserrat text-[12px] font-bold text-kf-red">Meet the team →</Link>
          </div>
          <div
            className="rounded-xl overflow-hidden min-h-[280px] bg-cover bg-center shadow-kf-lg"
            style={{ backgroundImage: 'url(/photos/team.jpg), linear-gradient(135deg, #50260E 0%, #C4956A 100%)' }}
          />
        </div>
      </section>

      {/* CANADA + KENYA PRINCIPLE */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="kicker mb-3">The Principle</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            🇨🇦 Canada = 🇰🇪 Kenya
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed mb-6">
            Everything we do in Canada, we also do in Kenya. This is not a footnote — it is the architectural principle of the Kasandy Foundation. The KCEI model will be replicated in Kenya. Education support runs in both countries simultaneously.
          </p>
          <Link href="/about" className="font-montserrat text-[12px] font-bold text-brown">Read our story →</Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-brown-deep text-white py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">Stay Connected</p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">Follow our impact.</h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Updates on KCEI, education grants, adoption funding, and the Foundation&apos;s work across Canada and Kenya.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-sm text-[13px] text-kf-text bg-white border-0 focus:outline-none focus:ring-2 focus:ring-kf-red"
            />
            <button type="submit" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-sand py-10 px-6 md:px-10 border-t border-kf-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-6">Supported by</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map(p => (
              <div key={p} className="bg-white border border-kf-border rounded px-5 py-3 font-montserrat text-[12px] font-semibold text-text-muted">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
