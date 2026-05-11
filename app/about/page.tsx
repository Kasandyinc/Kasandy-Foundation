import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — The Kasandy Foundation',
  description:
    'A BC-registered nonprofit organization built on one conviction: sustainability and social justice are the same bet. Learn about the Kasandy Foundation, our three programs, and the Canada + Kenya principle.',
}

const pillars = [
  {
    num: 'PILLAR 1',
    label: 'FLAGSHIP',
    title: 'Kasandy Circular Economy Initiative',
    body: "Canada's first full-stack textile circular economy hub. Textile waste into products and inclusive jobs. City of Vancouver endorsed. Research partner: Emily Carr University.",
    href: '/kcei',
    accent: 'border-t-brown',
    kickerColor: 'text-brown',
    photo: '/photos/circular.jpg',
  },
  {
    num: 'PILLAR 2',
    label: 'EDUCATION',
    title: 'Girls & Women Education',
    body: 'Bursaries for Black girls and women in Canada. One Girl Can Foundation partnership in Kenya. Both streams equal in ambition, powered by the same values.',
    href: '/girls-women',
    accent: 'border-t-kf-green',
    kickerColor: 'text-kf-green',
    photo: '/photos/edu_hero.jpg',
  },
  {
    num: 'PILLAR 3',
    label: 'FAMILY',
    title: 'Paths to Home',
    body: 'A trust fund removing financial barriers for willing adoptive parents in Canada. 100% of donations go directly to families.',
    href: '/paths-to-home',
    accent: 'border-t-kf-red',
    kickerColor: 'text-kf-red',
    photo: '/photos/adoption_hero.jpg',
  },
]

const credentials = [
  {
    title: 'BC Registration',
    sub: 'BC Nonprofit Organization',
    body: 'BC Incorporation No.: S0075186 · Business No.: 786954701. A BC-registered nonprofit organization. Charitable status application in progress with the Canada Revenue Agency.',
    accent: 'border-t-brown',
  },
  {
    title: 'Current Funders',
    sub: 'FFBC & SBCCI',
    body: 'Active government grant supporters funding the KCEI pilot program — validating the model at a systemic level and anchoring the Foundation\'s credibility with institutional partners.',
    accent: 'border-t-kf-red',
  },
  {
    title: 'Research MOU',
    sub: 'Emily Carr University',
    body: 'Formal ten-milestone MOU with ECUAD for applied R&D on circular textile products. Faculty lead, facilities access, and postgraduate research embedded in the pilot.',
    accent: 'border-t-kf-green',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* SPLIT HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-cream flex flex-col justify-center px-10 md:px-16 py-16">
          <p className="kicker mb-3">About the Kasandy Foundation</p>
          <h1 className="font-montserrat font-black text-4xl md:text-[44px] leading-[1.08] text-kf-text mb-5">
            We believe that nothing — and no one — should be wasted.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed max-w-lg mb-6">
            A BC-registered nonprofit organization built on one conviction: sustainability and social justice
            are the same bet. Everything we do in Canada, we also do in Kenya.
          </p>
          <p className="font-montserrat text-[11px] font-semibold text-text-muted mb-8">
            Established 2020 &middot; Vancouver, BC
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#story"
              className="font-montserrat text-[12px] font-bold text-kf-red hover:underline"
            >
              Our story &rarr;
            </Link>
            <span className="text-text-muted">·</span>
            <Link
              href="/team"
              className="font-montserrat text-[12px] font-bold text-brown hover:underline"
            >
              Meet the team &rarr;
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src="/photos/team.jpg"
            alt="Kasandy Foundation team: Deress Asghedom, Jackee Kasandy, Nadine Umutoni, Raphael Malachi"
            width={1200}
            height={500}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-brown-pale py-16 px-6 md:px-10" id="story">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Mission &amp; Vision</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            What we believe. What we&rsquo;re building.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-7 border-t-4 border-t-brown">
              <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-brown mb-3">
                Mission
              </p>
              <p className="text-[15px] text-text-body leading-relaxed">
                Transform textile waste into purposeful products and purposeful employment — while funding
                education and family, in Canada and Kenya. Three missions. One foundation. One set of values.
                Nothing and no one is wasted.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-7 border-t-4 border-t-kf-green">
              <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-green mb-3">
                Vision
              </p>
              <p className="text-[15px] text-text-body leading-relaxed">
                A world where the circular economy is built with — not around — the communities it&rsquo;s meant
                to serve. Where education is universal. Where every child has a loving home. Vancouver as a
                global model. Kenya as equal partner, not recipient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PROGRAMS */}
      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Three Programs</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            Three missions, one coherent strategy.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            The Kasandy Foundation is not a collection of unrelated programs. Each mission reinforces the
            others: employment, education, and family are the three pillars of a just and sustainable future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(p => (
              <div
                key={p.href}
                className={`bg-cream rounded-xl border border-kf-border shadow-kf border-t-4 ${p.accent} flex flex-col overflow-hidden`}
              >
                <div
                  className="aspect-video bg-cover bg-center -mt-0 rounded-t-lg"
                  style={{ backgroundImage: `url(${p.photo}), linear-gradient(135deg, #7A4028 0%, #C4956A 100%)` }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className={`font-montserrat text-[9px] font-bold tracking-[3px] uppercase ${p.kickerColor} mb-1`}>
                    {p.num} &mdash; {p.label}
                  </div>
                  <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">{p.body}</p>
                  <Link
                    href={p.href}
                    className={`font-montserrat text-[11px] font-bold ${p.kickerColor} hover:underline`}
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CANADA + KENYA PRINCIPLE */}
      <section className="bg-green-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">The Principle</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-6">
            🇨🇦 Canada + 🇰🇪 Kenya
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-3xl mb-4">
            Everything we do in Canada, we also do in Kenya. This is not a footnote. It is the architectural
            principle of the Kasandy Foundation.
          </p>
          <p className="text-[15px] text-text-body leading-relaxed max-w-3xl mb-4">
            The KCEI model will be replicated in Kenya. Education support runs in both countries
            simultaneously. Kasandy Foundation is not a Canadian organization with a Kenya project. It is an
            international foundation with two equally important homes.
          </p>
          <p className="text-[15px] text-text-body leading-relaxed max-w-3xl mb-10">
            This principle is not aspirational. It is the operating rule. Every decision we make in Canada is
            held against the question: are we doing this in Kenya too?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-5 border-l-4 border-l-kf-red">
              <div className="text-2xl mb-2">🇨🇦</div>
              <p className="font-montserrat font-bold text-[14px] text-kf-text">Canada</p>
              <p className="text-[12px] text-text-muted mt-1">Vancouver, British Columbia</p>
            </div>
            <div className="bg-white rounded-xl border border-kf-border shadow-kf p-5 border-l-4 border-l-kf-green">
              <div className="text-2xl mb-2">🇰🇪</div>
              <p className="font-montserrat font-bold text-[14px] text-kf-text">Kenya</p>
              <p className="text-[12px] text-text-muted mt-1">Growing presence, equal ambition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-sand py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Credentials</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Registered. Funded. Researched.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map(c => (
              <div
                key={c.title}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${c.accent}`}
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-text-muted mb-1">
                  {c.sub}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3">{c.title}</h3>
                <p className="text-[13px] text-text-body leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Get Involved
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Ready to be part of this?
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Partner with us, fund our programs, or donate to the cause that moves you most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Donate &rarr;
            </Link>
            <Link
              href="/partners"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Become a partner &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
