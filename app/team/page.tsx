import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team — The Kasandy Foundation',
  description:
    'Meet Jackee Kasandy and the team behind the Kasandy Foundation — the people building Canada\'s first full-stack textile circular economy hub and funding education and family across Canada and Kenya.',
}

const teamMembers = [
  {
    name: 'Deress Asghedom',
    role: 'Operations & Technical Lead',
    bio: 'Operations and technical lead for the KCEI manufacturing hub. Deress brings hands-on expertise in industrial processes and systems management to the day-to-day delivery of the KCEI pilot.',
    photo: '/photos/team-deress.jpg',
    gradient: 'linear-gradient(135deg, #50260E 0%, #7A4028 100%)',
  },
  {
    name: 'Jackee Kasandy',
    role: 'Founder & Executive Director',
    bio: 'Founder and Executive Director. Architect of KCEI. Born in Vancouver, rooted in Kenya. Jackee embodies the Foundation\'s dual identity — everything she builds in Canada, she builds in Kenya too.',
    photo: '/photos/team-jackee.jpg',
    gradient: 'linear-gradient(135deg, #C8352A 0%, #7A4028 100%)',
    featured: true,
  },
  {
    name: 'Nadine Umutoni',
    role: 'Team Member',
    bio: 'Nadine brings lived experience and professional expertise to the Kasandy Foundation team. Bio to be completed.',
    photo: '/photos/team-nadine.jpg',
    gradient: 'linear-gradient(135deg, #4A7C62 0%, #2E5240 100%)',
  },
  {
    name: 'Raphael Malachi',
    role: 'Project Coordinator',
    bio: 'Multidisciplinary strategist working across branding, social impact, and digital innovation. Raphael brings creative and strategic depth to the Foundation\'s communications and project delivery.',
    photo: '/photos/team-raphael.jpg',
    gradient: 'linear-gradient(135deg, #7A4028 0%, #C4956A 100%)',
  },
]

const researchers = [
  {
    name: 'Ellen [Surname]',
    role: 'Faculty Lead',
    org: 'Emily Carr University',
    bio: 'Faculty lead and grant applicant for the ECUAD–Kasandy Foundation research MOU. Leads the academic side of the circular textile R&D partnership.',
  },
  {
    name: 'William [Surname]',
    role: 'Facilities & Research',
    org: 'Emily Carr University',
    bio: 'Facilities and research office. Oversees equipment and lab access for the KCEI pilot, ensuring the manufacturing and materials science research has the infrastructure it needs.',
  },
  {
    name: 'Annika [Surname]',
    role: 'Postgraduate Researcher',
    org: 'Emily Carr University',
    bio: 'Postgraduate researcher embedded in the KCEI pilot. Leads material testing and circular product development under the ECUAD research MOU.',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* PHOTO HERO — JACKEE */}
      <section
        className="relative min-h-[500px] flex items-end bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/photos/collaboration.jpg), linear-gradient(135deg, #50260E 0%, #7A4028 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/85 to-brown-deep/20" />
        <div className="relative z-10 px-10 md:px-16 py-14 max-w-2xl text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/70 mb-2">
            FOUNDER &amp; EXECUTIVE DIRECTOR
          </p>
          <h1 className="font-montserrat font-black text-5xl md:text-6xl leading-[1.05] mb-5">
            Jackee Kasandy
          </h1>
          <p className="text-[15px] text-white/85 leading-relaxed mb-7 max-w-xl">
            Jackee Kasandy is the founder and Executive Director of the Kasandy Foundation — and the
            architect of the Kasandy Circular Economy Initiative. Born and based in Vancouver, BC, with deep
            roots in Kenya, Jackee embodies the Foundation&rsquo;s dual identity: everything she builds in
            Canada, she builds in Kenya too.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="font-montserrat text-[12px] font-bold text-white/80 hover:text-white transition-colors"
            >
              Full bio &rarr;
            </Link>
            <span className="text-white/40">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[12px] font-bold text-white/80 hover:text-white transition-colors"
            >
              LinkedIn &rarr;
            </a>
            <span className="text-white/40">·</span>
            <Link
              href="/press"
              className="font-montserrat text-[12px] font-bold text-white/80 hover:text-white transition-colors"
            >
              Press kit &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-brown-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">The Team</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-3">
            The people behind the work.
          </h2>
          {/* Group photo */}
          <div className="mb-12">
            <div
              className="rounded-xl overflow-hidden w-full min-h-[360px] bg-cover bg-center shadow-kf-lg"
              style={{
                backgroundImage:
                  'url(/photos/team.jpg), linear-gradient(135deg, #C8352A 0%, #7A4028 100%)',
              }}
            />
            <p className="font-montserrat text-[11px] text-text-muted mt-3 text-center italic">
              LEFT TO RIGHT: Deress Asghedom &middot; Jackee Kasandy &middot; Nadine Umutoni &middot; Raphael Malachi
            </p>
          </div>

          {/* Individual cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map(m => (
              <div
                key={m.name}
                className={`bg-white rounded-xl border border-kf-border shadow-kf overflow-hidden flex flex-col ${
                  m.featured ? 'ring-2 ring-kf-red' : ''
                }`}
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${m.photo}), ${m.gradient}` }}
                />
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-1">
                    {m.role}
                  </p>
                  <h3 className="font-montserrat font-bold text-[15px] text-kf-text mb-2 leading-snug">
                    {m.name}
                  </h3>
                  <p className="text-[12px] text-text-body leading-relaxed flex-1">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH PARTNERS */}
      <section className="bg-green-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Research Partners</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            Academic and institutional team behind KCEI research.
          </h2>
          <p className="text-[14px] text-text-body leading-relaxed max-w-2xl mb-10">
            Through a formal ten-milestone MOU with Emily Carr University of Art + Design, the Kasandy
            Foundation has embedded academic rigour into the KCEI pilot from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchers.map(r => (
              <div
                key={r.name}
                className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-kf-green"
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-green mb-1">
                  {r.org} &mdash; {r.role}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3">{r.name}</h3>
                <p className="text-[13px] text-text-body leading-relaxed">{r.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
                Advisory
              </p>
              <h2 className="font-montserrat font-extrabold text-3xl mb-4">
                Advisory Inquiries Welcome
              </h2>
              <p className="text-[14px] text-white/75 leading-relaxed mb-6">
                Experts in circular economy, textile science, Indigenous land stewardship, education policy,
                social enterprise, and impact investing are welcome to reach out. The Kasandy Foundation
                believes in building with, not around.
              </p>
              <Link
                href="/partners"
                className="inline-block bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
              >
                Get in touch &rarr;
              </Link>
            </div>
            <div>
              <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
                Press &amp; Speaking
              </p>
              <h2 className="font-montserrat font-extrabold text-3xl mb-4">
                Jackee is available for media.
              </h2>
              <p className="text-[14px] text-white/75 leading-relaxed mb-6">
                Looking for press information or speaking engagements? Jackee is available for media
                interviews, panel discussions, and speaking engagements on circular economy, inclusive
                employment, and social enterprise.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/press"
                  className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
                >
                  Press kit &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
                >
                  Book Jackee &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
