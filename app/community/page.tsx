'use client'

import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'Show up with textiles',
    body: 'Residents bring post-consumer clothing, fabric, and textiles. All types welcome — sorted on site.',
  },
  {
    num: '02',
    title: 'Colour-coded bin sorting',
    body: 'Sorted into colour-coded bins by material type: cotton, synthetics, blended, and special materials. Community sorting = community learning.',
  },
  {
    num: '03',
    title: 'KCEI takes them home',
    body: 'All collected textiles go directly to the KCEI hub for processing. Zero to landfill. Zero to export. 100% circular.',
  },
  {
    num: '04',
    title: 'Your clothes become products',
    body: 'KCEI transforms sorted textiles into acoustic bricks, playground surfaces, park furnishings, and more. Traceable from your hands to finished product.',
  },
]

const bins = [
  {
    swatch: '🟤',
    label: 'Cotton & Natural Fibres',
    examples: 'T-shirts, jeans, towels, bedsheets',
  },
  {
    swatch: '🔵',
    label: 'Synthetics',
    examples: 'Polyester, nylon, fleece, activewear',
  },
  {
    swatch: '🟡',
    label: 'Blended Materials',
    examples: 'Mixed fibre garments — read your labels',
  },
  {
    swatch: '⬛',
    label: 'Special Materials',
    examples: 'Leather, wool, silk — handled separately',
  },
]

const checklist = [
  'Keeps textiles in BC',
  'Sends nothing to landfill',
  'Sends nothing abroad',
  'Creates local jobs',
  'Traceable from your hands to finished product',
]

export default function CommunityCollectionPage() {
  const isLive = process.env.NEXT_PUBLIC_COMMUNITY_COLLECTION_LIVE === 'true'

  if (!isLive) {
    return (
      <section className="bg-cream min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-lg mx-auto text-center">
          <p className="kicker mb-4">COMING SOON</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text leading-[1.1] mb-5">
            Saturday Fun Day.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed mb-6">
            KCEI&rsquo;s community textile collection events are coming to neighbourhoods across Vancouver. Stay
            tuned.
          </p>
          <p className="font-montserrat text-[11px] font-semibold text-text-muted mb-10">
            Bring your old clothes. Your neighbourhood. Real impact.
          </p>
          <Link
            href="/kcei"
            className="font-montserrat text-[12px] font-bold text-kf-red hover:underline"
          >
            &larr; Back to KCEI
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            KCEI COMMUNITY COLLECTION
          </p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl leading-[1.1] mb-5 max-w-2xl">
            Saturday Fun Day.
          </h1>
          <p className="text-[15px] text-white/85 leading-relaxed max-w-2xl">
            Your old clothes. Your neighbourhood. Real impact. KCEI&rsquo;s community textile collection events
            bring neighbours together to sort, share, and sustainably dispose of clothing and textiles —
            keeping them in British Columbia, and out of the export pipeline to Africa.
          </p>
        </div>
      </section>

      {/* THE AFRICA PIPELINE */}
      <section className="bg-red-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-kf-red pl-6 mb-8">
            <p className="kicker mb-3">Why this matters — The Africa Textile Pipeline</p>
            <p className="text-[15px] text-text-body leading-relaxed mb-4">
              When Canadians donate to Salvation Army or H&amp;M bins, most clothes go to Africa — not to
              people who need them. Large-scale textile exporters bulk-ship donated clothing to markets in
              Ghana, Kenya, and Nigeria — undermining local textile industries and creating environmental
              hazards. Canada exports its waste problem abroad and calls it charity.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-kf-border shadow-kf p-6 max-w-xl">
            <p className="font-montserrat text-[10px] font-bold tracking-[2px] uppercase text-kf-green mb-4">
              The KCEI Community Collection Model
            </p>
            <ul className="space-y-3">
              {checklist.map(item => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-text-body">
                  <span className="text-kf-green font-bold mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">How It Works</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Four steps. Total traceability.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(step => (
              <div
                key={step.num}
                className="bg-cream rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-kf-green flex flex-col"
              >
                <div className="font-montserrat font-black text-4xl text-kf-green/30 leading-none mb-1">
                  {step.num}
                </div>
                <h3 className="font-montserrat font-bold text-[15px] text-kf-text mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-text-body leading-relaxed flex-1">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLOUR-CODED BINS */}
      <section className="bg-brown-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-brown mb-3">Colour-Coded Bins</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Sorting made simple.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bins.map(bin => (
              <div
                key={bin.label}
                className="bg-white rounded-xl border border-kf-border shadow-kf p-6 text-center flex flex-col items-center"
              >
                <div className="text-4xl mb-3">{bin.swatch}</div>
                <h3 className="font-montserrat font-bold text-[14px] text-kf-text mb-2 leading-snug">
                  {bin.label}
                </h3>
                <p className="text-[12px] text-text-muted leading-relaxed">{bin.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Join the Movement
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Register for the next event.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            Events coming to neighbourhoods across Vancouver. Be the first to know.
          </p>
          <Link
            href="/donate"
            className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors inline-block"
          >
            Get notified &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
