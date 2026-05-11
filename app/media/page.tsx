import type { Metadata } from 'next'
import MediaForms from './MediaForms'

export const metadata: Metadata = {
  title: 'Media & Speaking — Kasandy Foundation',
  description:
    'Press inquiries, speaker requests, and media resources for the Kasandy Foundation and the Kasandy Circular Economy Initiative (KCEI).',
}

const offerings = [
  {
    label: 'PRESS INQUIRIES',
    title: 'Media & Press',
    body: 'Interviews, on-camera appearances, background briefings, and written comment for journalists and broadcasters covering circular economy, social enterprise, Black entrepreneurship, and community employment.',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
  },
  {
    label: 'SPEAKING',
    title: 'Keynotes & Panels',
    body: "Jackee Kasandy speaks on circular economy design, inclusive green economy, Black women in social enterprise, and Canada–Kenya dual-country development. Available for conferences, university events, and government convenings.",
    accent: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
  },
  {
    label: 'RESEARCH',
    title: 'Research Collaboration',
    body: 'Academics and policy researchers interested in partnering on circular economy, textile waste, or inclusive employment research. Joint publications, MOU discussions, and data sharing for aligned research projects.',
    accent: 'border-t-kf-red',
    kickerClass: 'text-kf-red',
  },
  {
    label: 'PRESS KIT',
    title: 'Press Kit & Assets',
    body: 'Logos, photography, founder bio, organization backgrounder, and high-resolution imagery available for media use. Download the full press kit below.',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    isKit: true,
  },
]

const topics = [
  'Circular economy & textile waste',
  'Inclusive green economy design',
  'Black women in social enterprise',
  'Canada–Kenya international development',
  'Community employment & workforce inclusion',
  'Refugees & newcomers in the green economy',
  'Applied R&D with post-secondary institutions',
  'Impact investing & social enterprise funding',
]

export default function MediaPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brown-pale border-b border-kf-border py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="kicker-brown mb-3">Media &amp; Speaking</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text mb-5 leading-[1.08]">
            Tell the story that needs telling.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-8">
            The Kasandy Foundation is building something genuinely new — Canada&rsquo;s first full-stack textile circular economy hub, with two countries, inclusive employment, and a research-backed model. We&rsquo;re here to support journalists and event organizers who want to get the story right.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#media-inquiry"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Media inquiry →
            </a>
            <a
              href="#speaking-inquiry"
              className="border-2 border-brown-deep text-brown-deep font-montserrat text-[12px] font-bold px-5 py-2.5 rounded-sm hover:bg-brown-pale transition-colors"
            >
              Speaking inquiry →
            </a>
            <a
              href="/press/KF_Press_Kit_2026.pdf"
              download
              className="font-montserrat text-[12px] font-bold text-brown hover:underline self-center"
            >
              Download press kit →
            </a>
          </div>
        </div>
      </section>

      {/* OFFERINGS GRID */}
      <section className="bg-white py-14 px-6 md:px-10 border-b border-kf-border">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">What We Offer</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">
            Media, speaking, and research.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map(o => (
              <div
                key={o.label}
                className={`bg-cream rounded-xl border border-kf-border shadow-kf border-t-4 ${o.accent} p-6`}
              >
                <p className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-2 ${o.kickerClass}`}>
                  {o.label}
                </p>
                <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3">{o.title}</h3>
                <p className="text-[13px] text-text-body leading-relaxed mb-4">{o.body}</p>
                {o.isKit && (
                  <a
                    href="/press/KF_Press_Kit_2026.pdf"
                    download
                    className="font-montserrat text-[11px] font-bold text-brown hover:underline"
                  >
                    Download press kit →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING TOPICS */}
      <section className="bg-green-pale py-14 px-6 md:px-10 border-b border-kf-border">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Speaking Topics</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-8">
            What Jackee speaks about.
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {topics.map(t => (
              <li key={t} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-kf-green mt-2 shrink-0" />
                <span className="text-[14px] text-text-body leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORMS */}
      <MediaForms />

      {/* PRESS KIT */}
      <section className="bg-brown-pale py-14 px-6 md:px-10 border-t border-kf-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="kicker mb-2">Press Resources</p>
            <h2 className="font-montserrat font-extrabold text-2xl text-kf-text mb-3">Press kit &amp; assets.</h2>
            <p className="text-[14px] text-text-body leading-relaxed max-w-lg">
              Logos, photography, founder bio, and organization backgrounder. All assets are cleared for editorial use with attribution to the Kasandy Foundation.
            </p>
          </div>
          <a
            href="/press/KF_Press_Kit_2026.pdf"
            download
            className="shrink-0 bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
          >
            Download press kit →
          </a>
        </div>
      </section>
    </>
  )
}
