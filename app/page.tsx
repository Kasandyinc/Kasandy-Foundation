import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Kasandy Foundation — Nothing and No One Is Wasted',
}

const products = [
  {
    emoji: '🧱',
    name: 'Acoustic Bricks',
    desc: 'Interior walls, office partitions, decorative panels',
    badge: 'Primary product',
    bg: 'bg-brown-pale',
    border: 'border-t-brown',
    badgeColor: 'text-kf-red',
  },
  {
    emoji: '🎾',
    name: 'Playground Surfaces',
    desc: 'Municipal parks, schools, public spaces',
    badge: 'Procurement-ready',
    bg: 'bg-green-pale',
    border: 'border-t-kf-green',
    badgeColor: 'text-kf-green',
  },
  {
    emoji: '🌿',
    name: 'Park Furnishings',
    desc: 'Benches, planters, outdoor furniture',
    badge: 'ESG-aligned',
    bg: 'bg-sand',
    border: 'border-t-brown-soft',
    badgeColor: 'text-brown-soft',
  },
  {
    emoji: '🖼',
    name: 'Upcycled Art',
    desc: 'Hotel lobbies, galleries, corporate offices',
    badge: 'ECUAD collaboration',
    bg: 'bg-sand',
    border: 'border-t-text-muted',
    badgeColor: 'text-text-muted',
  },
  {
    emoji: '✂️',
    name: 'Rework & Repair',
    desc: 'Alterations, upcycling services',
    badge: 'Active service',
    bg: 'bg-sand',
    border: 'border-t-text-muted',
    badgeColor: 'text-text-muted',
  },
]

const steps = [
  {
    num: 'Step 1',
    label: 'Collect',
    emoji: '📦',
    body: 'Post-consumer textiles collected from BC residents, businesses, and institutions',
    border: 'border-t-kf-green',
    numColor: 'text-kf-green',
  },
  {
    num: 'Step 2',
    label: 'Shred & Process',
    emoji: '⚙️',
    body: 'Industrial shredding and fibre processing. R&D partnership with Emily Carr University (ECUAD)',
    border: 'border-t-brown',
    numColor: 'text-brown',
  },
  {
    num: 'Step 3',
    label: 'Manufacture',
    emoji: '🏭',
    body: 'Products made by KCEI workers — people systematically excluded from Canada\'s green economy',
    border: 'border-t-brown-soft',
    numColor: 'text-brown-soft',
  },
  {
    num: 'Step 4',
    label: 'Deploy',
    emoji: '🏘',
    body: 'Supplied to municipalities, hotels, and corporations committed to sustainable procurement',
    border: '',
    numColor: 'text-kf-red',
    dark: true,
  },
]

const communities = [
  { emoji: '🌍', label: 'Refugees & Newcomers' },
  { emoji: '♿', label: 'People with Disabilities' },
  { emoji: '✊🏾', label: 'Black & Indigenous Women' },
]

const targets = [
  { value: '[X]', label: 'Tonnes diverted' },
  { value: '[X]', label: 'Jobs created' },
  { value: '[X]', label: 'Municipal partners' },
  { value: '[X]', label: 'Product partners' },
]

const funders = [
  { name: 'FFBC', desc: 'Federal grant funder. Active support for KCEI pilot infrastructure.', tag: 'Federal funder' },
  { name: 'SBCCI', desc: 'Federal grant funder. Clean innovation scale-up program.', tag: 'Federal funder' },
  { name: 'City of Vancouver', desc: 'Municipal endorsement. Zero Waste 2040 alignment.', tag: 'Municipal endorsement' },
  { name: 'Emily Carr University', desc: 'Research MOU. Material testing, product R&D, ECUAD pilot host.', tag: 'Research partner' },
  { name: 'One Girl Can', desc: 'Kenya girls\' education partner. Active program co-delivery.', tag: 'Education partner' },
]

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: KCEI HERO ── */}
      <section
        className="relative min-h-[600px] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(/photos/kcei_hero.jpg), linear-gradient(135deg, #50260E 0%, #7A4028 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(80,38,14,0.88) 0%, rgba(80,38,14,0.55) 60%, rgba(80,38,14,0.18) 100%)' }} />
        <div className="relative z-10 px-8 md:px-16 py-14 max-w-[820px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-montserrat text-[9px] text-white/60 tracking-[2px] uppercase">KASANDY FOUNDATION</span>
            <span className="text-white/30">·</span>
            <span className="font-montserrat text-[9px] text-kf-red tracking-[2px] uppercase font-bold">FLAGSHIP INITIATIVE</span>
          </div>
          <p className="font-montserrat text-[11px] text-white/65 tracking-[2px] uppercase mb-2">
            Kasandy Circular Economy Initiative
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-[52px] leading-[1.05] text-white mb-5 max-w-[680px]">
            We turn textile waste<br />into jobs and products.
          </h1>
          <p className="text-[15px] text-white/88 leading-[1.75] max-w-[560px] mb-6">
            Canada&apos;s first full-stack textile circular economy hub. We collect post-consumer textiles from BC residents and businesses, shred and process them into acoustic bricks, playground surfaces, park furnishings, and more — creating inclusive employment for refugees, newcomers, and people with disabilities along the way.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="/kcei" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors">
              Explore KCEI &rarr;
            </Link>
            <Link href="/partners" className="border border-white/50 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors">
              Partner with us &rarr;
            </Link>
            <Link href="/community" className="border border-white/50 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors">
              Donate textiles &rarr;
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {['City of Vancouver Endorsed', 'ECUAD Research MOU', 'FFBC & SBCCI Funded', 'Active since July 2024'].map(badge => (
              <span key={badge} className="bg-white/12 border border-white/20 text-white font-montserrat text-[10px] font-semibold px-3 py-1 rounded">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT KCEI MAKES ── */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="kicker mb-2">WHAT KCEI MAKES</p>
            <h2 className="font-montserrat font-extrabold text-[28px] text-kf-text mb-4 leading-snug">
              Discarded textiles become real products.
            </h2>
            <p className="text-[13.5px] text-text-body leading-[1.75] mb-6">
              Every tonne of textile waste KCEI processes becomes a product with a commercial buyer — acoustic panels for offices, surfaces for playgrounds, furnishings for parks. ESG-aligned. Procurement-ready.
            </p>
            <Link href="/kcei/products" className="font-montserrat text-[12px] font-bold text-brown hover:underline">
              See all KCEI products &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {products.map(p => (
              <div key={p.name} className={`${p.bg} border-t-4 ${p.border} rounded-lg p-4`}>
                <div className="text-xl mb-2">{p.emoji}</div>
                <div className="font-montserrat text-[13px] font-bold text-kf-text mb-1">{p.name}</div>
                <div className="text-[11px] text-text-muted leading-snug mb-2">{p.desc}</div>
                <div className={`font-montserrat text-[9px] font-bold uppercase tracking-wide ${p.badgeColor}`}>{p.badge}</div>
              </div>
            ))}
            <div className="bg-brown-deep rounded-lg p-4 flex flex-col items-center justify-center text-center">
              <div className="font-montserrat text-[9px] text-kf-red font-bold tracking-[1.5px] uppercase mb-2">ESG</div>
              <div className="font-montserrat text-[13px] font-extrabold text-white leading-snug">E · S · G<br />All three stories<br />in every product.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <section className="bg-green-pale py-12 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-kf-green mb-2">THE PROCESS</p>
          <h2 className="font-montserrat font-extrabold text-[24px] text-kf-text mb-8">
            From discarded clothes to finished products — four steps.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map(s => (
              <div key={s.label} className={`rounded-lg p-5 text-center border-t-4 ${s.dark ? 'bg-brown-deep' : 'bg-white'} ${s.border}`}>
                <div className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-2 ${s.dark ? 'text-kf-red' : s.numColor}`}>{s.num}</div>
                <div className="text-[24px] mb-2">{s.emoji}</div>
                <div className={`font-montserrat text-[14px] font-bold mb-2 ${s.dark ? 'text-white' : 'text-kf-text'}`}>{s.label}</div>
                <div className={`text-[11.5px] leading-snug ${s.dark ? 'text-white/75' : 'text-text-muted'}`}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHO + TARGETS ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Who KCEI employs */}
        <div className="bg-brown-pale px-8 md:px-12 py-14">
          <p className="kicker-brown mb-3">WHO KCEI EMPLOYS</p>
          <h2 className="font-montserrat font-extrabold text-[24px] text-kf-text mb-4 leading-snug">
            The green economy will include everyone. Or it won&apos;t work.
          </h2>
          <p className="text-[13px] text-text-body leading-[1.75] mb-6">
            KCEI was designed from the ground up to employ people facing the greatest barriers to work in Canada&apos;s green economy. Trauma-informed workplace. Living wages. Career pathways.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {communities.map(c => (
              <div key={c.label} className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border-l-4 border-brown">
                <span className="text-lg">{c.emoji}</span>
                <span className="font-montserrat text-[12px] font-semibold text-kf-text">{c.label}</span>
              </div>
            ))}
          </div>
          <Link href="/kcei/communities" className="font-montserrat text-[11px] font-bold text-brown hover:underline">
            See full community profiles &rarr;
          </Link>
        </div>

        {/* 2026 targets */}
        <div className="bg-kf-text px-8 md:px-12 py-14">
          <p className="font-montserrat text-[9px] tracking-[2px] text-kf-red font-bold uppercase mb-2">KCEI 2026 PROGRAMME TARGETS</p>
          <h2 className="font-montserrat font-extrabold text-[22px] text-white mb-3">Where we&apos;re heading.</h2>
          <p className="text-[12px] text-white/55 leading-[1.6] mb-6">
            KCEI became operational July 2024. These are our first-year programme targets. We will publish verified impact data as milestones are reached.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {targets.map(t => (
              <div key={t.label} className="bg-white/7 border border-white/10 rounded-lg p-4 text-center border-t-2 border-t-brown-soft">
                <div className="font-montserrat text-[28px] font-black text-brown-soft">{t.value}</div>
                <div className="font-montserrat text-[9px] text-white/55 uppercase tracking-wide mt-1">{t.label}</div>
                <div className="font-montserrat text-[8px] text-kf-red font-bold uppercase tracking-wide mt-1">2026 Target</div>
              </div>
            ))}
          </div>
          <Link href="/kcei#partner" className="font-montserrat text-[12px] font-bold text-white border border-white/40 px-5 py-2.5 rounded-sm hover:bg-white/10 transition-colors inline-block">
            Partner with KCEI &rarr;
          </Link>
        </div>
      </section>

      {/* ── SECTION 5: FOUNDATION CONTEXT ── */}
      <section className="bg-cream py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-2">THE KASANDY FOUNDATION</p>
          <h2 className="font-montserrat font-extrabold text-[30px] text-kf-text mb-4">
            KCEI is our flagship. The Foundation does more.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-12">
            Jackee Kasandy built KCEI on the belief that sustainability and social justice are the same bet. The Foundation extends that belief to two more missions: funding girls&apos; education in Canada and Kenya, and removing the financial barriers that keep willing families from adopting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KCEI flagship */}
            <div className="bg-white rounded-xl border border-kf-border shadow-kf border-t-4 border-t-brown p-6 flex flex-col md:col-span-1">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-brown mb-1">FLAGSHIP</p>
              <p className="font-montserrat text-[8px] font-bold tracking-[2px] uppercase text-text-muted mb-3">KCEI · Circular Economy Initiative</p>
              <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3 leading-snug">
                Textile waste → products → inclusive jobs.
              </h3>
              <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-3">
                Canada&apos;s first full-stack hub. Endorsed by City of Vancouver.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {['Acoustic bricks', 'Playground surfaces', 'Park furnishings'].map(tag => (
                  <span key={tag} className="bg-brown-pale text-brown font-montserrat text-[9px] font-semibold px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
              <Link href="/kcei" className="font-montserrat text-[11px] font-bold text-brown hover:underline">Explore KCEI in depth &rarr;</Link>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl border border-kf-border shadow-kf border-t-4 border-t-kf-green p-6 flex flex-col">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-kf-green mb-3">GIRLS & WOMEN EDUCATION</p>
              <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3 leading-snug">
                Education that doesn&apos;t stop at borders.
              </h3>
              <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">
                Bursaries for Black girls and women in Canada. One Girl Can Foundation in Kenya. Equal in both countries.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-green-pale text-kf-green font-montserrat text-[10px] font-semibold px-2 py-1 rounded">🇨🇦 Canada</span>
                <span className="bg-green-pale text-kf-green font-montserrat text-[10px] font-semibold px-2 py-1 rounded">🇰🇪 Kenya</span>
              </div>
              <Link href="/girls-women" className="font-montserrat text-[11px] font-bold text-kf-green hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Adoption */}
            <div className="bg-white rounded-xl border border-kf-border shadow-kf border-t-4 border-t-kf-red p-6 flex flex-col">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-kf-red mb-3">PATHS TO HOME</p>
              <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3 leading-snug">
                Every child deserves a loving home.
              </h3>
              <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">
                Trust fund removing financial barriers for adoptive families. 100% of donations to the fund.
              </p>
              <div className="mb-4">
                <span className="bg-red-pale text-kf-red font-montserrat text-[10px] font-semibold px-2 py-1 rounded">100% Pledge · Every dollar to families</span>
              </div>
              <Link href="/paths-to-home" className="font-montserrat text-[11px] font-bold text-kf-red hover:underline">Access the fund &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TEAM TEASER ── */}
      <section className="bg-brown-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="kicker mb-2">THE PEOPLE BEHIND THE WORK</p>
            <h2 className="font-montserrat font-extrabold text-[28px] text-kf-text mb-5 leading-snug">
              Founded by Jackee Kasandy.<br />Built by a dedicated team.
            </h2>
            <p className="text-[14px] text-text-body leading-relaxed mb-3">
              Born and based in Vancouver with deep roots in Kenya, Jackee Kasandy built the Kasandy Foundation on the belief that nothing — and no one — should be wasted.
            </p>
            <p className="text-[14px] text-text-body leading-relaxed mb-6">
              Together with Deress Asghedom, Nadine Umutoni, and Raphael Malachi, the team is turning that belief into action.
            </p>
            <Link href="/team" className="font-montserrat text-[12px] font-bold text-kf-red hover:underline">Meet the team &rarr;</Link>
          </div>
          <div>
            <div className="rounded-xl overflow-hidden shadow-kf-lg">
              <Image
                src="/photos/team_cropped.jpg"
                alt="Kasandy Foundation team: Deress Asghedom, Jackee Kasandy, Nadine Umutoni, Raphael Malachi"
                width={1200}
                height={350}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p className="font-montserrat text-[10px] text-text-muted text-center mt-2 tracking-wide">
              Left to right: Deress Asghedom · Jackee Kasandy · Nadine Umutoni · Raphael Malachi
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PARTNERS / FUNDERS ── */}
      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <p className="kicker">INSTITUTIONAL PARTNERS & FUNDERS</p>
            <Link href="/partners" className="font-montserrat text-[11px] font-bold text-brown hover:underline">Become a funder &rarr;</Link>
          </div>
          <h2 className="font-montserrat font-extrabold text-[26px] text-kf-text mb-10">The organizations that back this work.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funders.map(f => (
              <div key={f.name} className="bg-white border border-kf-border rounded-lg p-5 shadow-kf">
                <div className="font-montserrat text-[14px] font-bold text-kf-text mb-1">{f.name}</div>
                <div className="font-montserrat text-[9px] font-semibold uppercase tracking-wide text-text-muted mb-3">{f.tag}</div>
                <p className="text-[12px] text-text-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA BAR ── */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">Get Involved</p>
          <h2 className="font-montserrat font-extrabold text-[28px] mb-4">Ready to work with KCEI?</h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Whether you&apos;re a municipality, a business with textile waste, or a funder — we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kcei#partner" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors">
              Partner with KCEI &rarr;
            </Link>
            <Link href="/donate" className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors">
              Donate to the Foundation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: NEWSLETTER ── */}
      <section className="bg-kf-text text-white py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">Stay Connected</p>
          <h2 className="font-montserrat font-extrabold text-[28px] mb-4">We&apos;ll send you the receipts.</h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Impact updates, funding milestones, and ways to get involved — direct to your inbox. No filler.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-sm text-[13px] text-kf-text bg-white border-0 focus:outline-none focus:ring-2 focus:ring-kf-red"
            />
            <button type="submit" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors shrink-0">
              Subscribe
            </button>
          </form>
          <p className="font-montserrat text-[10px] text-white/40">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
