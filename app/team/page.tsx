import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Founder & Team — The Kasandy Foundation',
  description:
    'Meet Jackee Kasandy and the team behind the Kasandy Foundation — the people building Canada\'s first full-stack textile circular economy hub and funding education and family across Canada and Kenya.',
}

const teamMembers = [
  {
    name: 'Jackee Kasandy',
    role: 'Founder & Executive Director',
    bio: 'A seasoned expert in retail, marketing, procurement, and strategic business practices — with over two decades of corporate advertising and marketing experience and a decade as a successful entrepreneur. Founder and CEO of Kasandy Inc., a thriving 7-figure lifestyle brand operating from Granville Island since 2016. Global President & Board Chair of the Black Entrepreneurs & Businesses of Canada Society (BEBC). Board Commissioner, BC Housing. Board of Directors & Governance Committee, Union Gospel Mission.',
    tags: ['Entrepreneurship', 'Procurement', 'Supplier Diversity', 'Advocacy'],
    accent: 'border-t-kf-red',
    featured: true,
  },
  {
    name: 'Deress Asghedom',
    role: 'Operations & Technical Lead',
    bio: 'A seasoned leader with over 20 years of experience in supply chain management, branding, and operations. He has led teams of 500+ and managed millions in inventory across North America. Founder of Vaster, Deress brings deep expertise in data-driven decision-making, customer-centric systems, and technology innovation — all applied to building KCEI\'s manufacturing and logistics infrastructure.',
    tags: ['Supply Chain', 'Operations', 'ML & AI', 'Brand Strategy'],
    accent: 'border-t-brown',
  },
  {
    name: 'Nadine Umutoni',
    role: 'Team Member',
    bio: 'Nadine brings lived experience and professional expertise to the Kasandy Foundation team.',
    tags: [],
    accent: 'border-t-kf-green',
  },
  {
    name: 'Raphael Machalani',
    role: 'Project Coordinator',
    bio: 'A strategic leader, consultant, and humanitarian specialist with over 10 years of international experience across development programs. He has led multi-country monitoring, evaluation, accountability and learning (MEAL) systems in partnership with UNICEF, the EU, and Global Affairs Canada. Founder of Kronowl, a strategic consultancy for social impact organizations, Raphael brings deep expertise in grant writing, program design, and equity-centred strategy.',
    tags: ['MEAL', 'Grant Writing', 'Impact Strategy', 'Humanitarian'],
    accent: 'border-t-brown-soft',
  },
]

const researchers = [
  {
    name: 'Ellen [Surname]',
    role: 'Faculty Lead & Grant Applicant',
    org: 'ECUAD · Faculty Lead',
    bio: 'Faculty lead and grant applicant for the ECUAD–Kasandy Foundation research MOU. Leads the academic side of the circular textile R&D program.',
  },
  {
    name: 'William [Surname]',
    role: 'Facilities & Research Office',
    org: 'ECUAD · Facilities',
    bio: 'Oversees equipment and lab access for the KCEI pilot, including shredder installation scheduled June 2026.',
  },
  {
    name: 'Annika [Surname]',
    role: 'Postgraduate Researcher',
    org: 'ECUAD · Researcher',
    bio: 'Postgraduate researcher embedded in the KCEI pilot. Leads material testing and circular product development under the ECUAD MOU.',
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
          <p className="text-[15px] text-white/85 leading-relaxed mb-4 max-w-xl">
            Jackee is a seasoned expert in retail, marketing, procurement, and strategic business practices
            — with over two decades of corporate advertising and marketing experience and a decade as a
            successful entrepreneur.
          </p>
          <p className="text-[14px] text-white/70 leading-relaxed mb-7 max-w-xl">
            Founder and Executive Director of the Kasandy Foundation, and Global President &amp; Board Chair
            of the Black Entrepreneurs &amp; Businesses of Canada Society (BEBC).
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/press/KF_Press_Kit_2026.pdf"
              download
              className="font-montserrat text-[12px] font-bold text-white/80 hover:text-white transition-colors"
            >
              Press kit &rarr;
            </a>
            <span className="text-white/40">·</span>
            <Link
              href="/media"
              className="font-montserrat text-[12px] font-bold text-white/80 hover:text-white transition-colors"
            >
              Book Jackee &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* JACKEE — FULL BIO */}
      <section className="bg-white py-14 px-6 md:px-10 border-b border-kf-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="kicker mb-3">Founder &amp; Executive Director</p>
            <h2 className="font-montserrat font-extrabold text-2xl text-kf-text mb-5 leading-snug">
              Jackee Kasandy
            </h2>
            <p className="text-[14px] text-text-body leading-relaxed mb-4">
              As the founder and CEO of Kasandy Inc., a thriving 7-figure lifestyle brand, Jackee has applied
              her expertise to advertising, marketing, growth, and transformational strategy across diverse
              industries including retail, food, consumer products, and hospitality. Her flagship brick-and-mortar
              store has operated at the historic Granville Island in Vancouver, BC since 2016.
            </p>
            <p className="text-[14px] text-text-body leading-relaxed mb-4">
              A recognized leader in procurement strategy and supplier diversity, Jackee created a
              groundbreaking, first-of-its-kind procurement course designed to help suppliers become
              certification-ready while enabling corporations to diversify their supply chains.
            </p>
            <p className="text-[14px] text-text-body leading-relaxed mb-6">
              The Vancouver Economic Commission recognized her as one of the &ldquo;23 Black Leaders in
              Vancouver&rdquo; for her advocacy, education, and leadership in supporting women and business
              owners. Her thought leadership has been featured in Montecristo Magazine and national and
              international media.
            </p>
          </div>
          <div className="space-y-5">
            <div className="bg-cream rounded-xl border border-kf-border p-5">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-3">
                Current Roles
              </p>
              <ul className="space-y-2">
                {[
                  'Founder & Executive Director, The Kasandy Foundation',
                  'Global President & Board Chair, BEBC Society (est. 2020)',
                  'Founder & CEO, Kasandy Inc.',
                  'Board Commissioner, BC Housing (appointed by Minister Ravi Kahlon)',
                  'Board of Directors & Governance Committee, Union Gospel Mission',
                ].map(r => (
                  <li key={r} className="flex gap-2 text-[13px] text-text-body">
                    <span className="text-kf-red mt-0.5">·</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-xl border border-kf-border p-5">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-3">
                Recognition
              </p>
              <p className="text-[13px] text-text-body leading-relaxed">
                Featured in Montecristo Magazine &middot; Vancouver Economic Commission &ldquo;23 Black Leaders
                in Vancouver&rdquo;
              </p>
            </div>
            <div className="bg-cream rounded-xl border border-kf-border p-5">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-3">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Entrepreneurship', 'Retail', 'Branding', 'Marketing & Digital Media', 'Advocacy', 'Supplier Diversity & Procurement'].map(t => (
                  <span key={t} className="bg-white border border-kf-border text-text-body font-montserrat text-[10px] px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
            <div className="rounded-xl overflow-hidden shadow-kf-lg">
              <Image
                src="/photos/team.jpg"
                alt="Left to right: Deress Asghedom, Jackee Kasandy, Nadine Umutoni, Raphael Machalani"
                width={2400}
                height={1360}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p className="font-montserrat text-[11px] text-text-muted mt-3 text-center italic">
              Left to right: Deress Asghedom &middot; Jackee Kasandy &middot; Nadine Umutoni &middot; Raphael Machalani
            </p>
          </div>

          {/* Individual cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map(m => (
              <div
                key={m.name}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${m.accent} flex flex-col ${
                  m.featured ? 'ring-2 ring-kf-red' : ''
                }`}
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-1">
                  {m.role}
                </p>
                <h3 className="font-montserrat font-bold text-[18px] text-kf-text mb-3 leading-snug">
                  {m.name}
                </h3>
                <p className="text-[13px] text-text-body leading-relaxed flex-1 mb-4">{m.bio}</p>
                {m.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {m.tags.map(t => (
                      <span key={t} className="bg-cream border border-kf-border text-text-muted font-montserrat text-[9px] font-semibold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
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
            Foundation has embedded academic rigour into the KCEI pilot. ECUAD research leads are integral
            to the material science program beginning July 2026.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchers.map(r => (
              <div
                key={r.name}
                className="bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 border-t-kf-green"
              >
                <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-green mb-1">
                  {r.org}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3">{r.name}</h3>
                <p className="text-[13px] text-text-body leading-relaxed">{r.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY + PRESS */}
      <section className="bg-brown-deep py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
                Advisory Inquiry
              </p>
              <h2 className="font-montserrat font-extrabold text-2xl mb-4">
                Join our advisory network.
              </h2>
              <p className="text-[14px] text-white/75 leading-relaxed mb-6">
                Experts in circular economy, textile science, Indigenous land stewardship, education policy,
                social enterprise, and impact investing are welcome to inquire. The Kasandy Foundation believes
                in building with, not around.
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
              <h2 className="font-montserrat font-extrabold text-2xl mb-4">
                Jackee is available for media.
              </h2>
              <p className="text-[14px] text-white/75 leading-relaxed mb-2">
                Available for print, broadcast, podcast, and online media interviews.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed mb-2">
                Panel discussions, keynotes, workshops, and community events.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed mb-6">
                Expert commentary on circular economy, inclusive employment, supplier diversity, and Black
                entrepreneurship.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/press/KF_Press_Kit_2026.pdf"
                  download
                  className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
                >
                  Press kit &rarr;
                </a>
                <Link
                  href="/media"
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
