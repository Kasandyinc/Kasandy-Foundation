import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partners & Funders — The Kasandy Foundation',
  description:
    'The Kasandy Foundation and KCEI operate within a rich ecosystem of research partners, municipal governments, industry organizations, and grant funders.',
}

export default function PartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brown-pale py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Partners &amp; Funders</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text leading-[1.1] mb-5">
            Built together.
          </h1>
          <p className="text-[16px] text-text-body leading-relaxed max-w-xl mb-8">
            The Kasandy Foundation and KCEI operate within a rich ecosystem of research partners, municipal governments, industry organizations, and grant funders. Every relationship is documented, credited, and maintained.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#become-a-partner"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Become a partner &rarr;
            </Link>
            <Link
              href="/donate"
              className="border-2 border-brown-deep text-brown-deep font-montserrat text-[12px] font-bold px-6 py-3 rounded-sm hover:bg-brown-pale transition-colors"
            >
              Fund our programs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1 — CURRENT GRANT FUNDERS */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Current Grant Funders</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            The organizations investing in KCEI and the Foundation right now.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            Active government grant funding for the KCEI pilot — publicly reported with full transparency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream rounded-xl border border-kf-border shadow-kf p-7 border-t-4 border-t-kf-red">
              <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-red mb-1">
                Federal Grant &middot; Active
              </p>
              <h3 className="font-montserrat font-bold text-[22px] text-kf-text mb-1">FFBC</h3>
              <p className="font-montserrat text-[11px] text-text-muted mb-4">Future of Forestry, Fisheries and Communities Branch</p>
              <p className="text-[14px] text-text-body leading-relaxed">
                Current grant supporting the KCEI pilot and infrastructure build-out. Amount and period to be confirmed. Reported publicly with full transparency.
              </p>
            </div>
            <div className="bg-cream rounded-xl border border-kf-border shadow-kf p-7 border-t-4 border-t-kf-red">
              <p className="font-montserrat text-[9px] font-bold tracking-[3px] uppercase text-kf-red mb-1">
                Federal Grant &middot; Active
              </p>
              <h3 className="font-montserrat font-bold text-[22px] text-kf-text mb-1">SBCCI</h3>
              <p className="font-montserrat text-[11px] text-text-muted mb-4">Scale-up and Boost Canadian Clean Innovation</p>
              <p className="text-[14px] text-text-body leading-relaxed">
                Current grant supporting KCEI scale-up. Midline activity report completed April 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MUNICIPAL PARTNERS */}
      <section className="bg-brown-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Municipal Partners</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            The cities and regions co-building the solution.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            Municipal engagement is central to the KCEI model. These relationships give KCEI civic legitimacy and position the model for long-term infrastructure investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                badge: 'Municipal / Endorsed',
                name: 'City of Vancouver',
                body: 'Endorsed KCEI. Alignment with Zero Waste 2040, Greenest City Action Plan, and Equity Framework. Invited co-development of the pilot.',
                accent: 'border-t-brown',
                badgeColor: 'text-brown',
              },
              {
                badge: 'Municipal / Active',
                name: 'City of Victoria',
                body: 'Active engagement on textile waste strategy and regional circular economy planning.',
                accent: 'border-t-brown',
                badgeColor: 'text-brown',
              },
              {
                badge: 'Municipal / Funder Target',
                name: 'Capital Regional District',
                body: 'CRD Rethink Waste Grant is a priority funding target. Engagement on textile waste strategy and KCEI alignment.',
                accent: 'border-t-kf-green',
                badgeColor: 'text-kf-green',
              },
              {
                badge: 'Member',
                name: 'CWMA (Coast Waste Management Association)',
                body: 'CWMA member. Access to waste management networks and shared advocacy on textile diversion policy.',
                accent: 'border-t-brown',
                badgeColor: 'text-brown',
              },
            ].map(card => (
              <div
                key={card.name}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${card.accent}`}
              >
                <p className={`font-montserrat text-[9px] font-bold tracking-[3px] uppercase ${card.badgeColor} mb-1`}>
                  {card.badge}
                </p>
                <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3">{card.name}</h3>
                <p className="text-[13px] text-text-body leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — RESEARCH & ACADEMIC PARTNERS */}
      <section className="bg-green-pale py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-3">Research &amp; Academic Partners</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            Academic rigour embedded in the KCEI pilot.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            The Kasandy Foundation has embedded academic and institutional research into KCEI from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                badge: 'Research MOU · Active',
                name: 'Emily Carr University of Art + Design (ECUAD)',
                body: 'Formal MOU covering a ten-milestone collaboration. Ellen (faculty lead), William (facilities), Annika (postgraduate researcher). Industrial design, material testing, product development, and research infrastructure. Milestone-triggered.',
                accent: 'border-t-kf-green',
                badgeColor: 'text-kf-green',
              },
              {
                badge: 'Consortium Member',
                name: 'UBC Slow Fashion Cluster',
                body: 'Research and advocacy network. KCEI participates as consortium member, contributing practical circular economy knowledge.',
                accent: 'border-t-kf-green',
                badgeColor: 'text-kf-green',
              },
              {
                badge: 'Equipment Partner',
                name: 'George Brown College',
                body: 'Site visit scheduled for shredder evaluation — one of two equipment options under assessment.',
                accent: 'border-t-kf-green',
                badgeColor: 'text-kf-green',
              },
            ].map(card => (
              <div
                key={card.name}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${card.accent}`}
              >
                <p className={`font-montserrat text-[9px] font-bold tracking-[3px] uppercase ${card.badgeColor} mb-1`}>
                  {card.badge}
                </p>
                <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug">{card.name}</h3>
                <p className="text-[13px] text-text-body leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ECOSYSTEM PARTNERS */}
      <section className="bg-sand py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-3">Ecosystem Partners</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-4">
            The broader network KCEI operates within.
          </h2>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-10">
            Industry advocates, global pioneers, and peer organizations whose work informs and inspires KCEI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                badge: 'Industry advocacy',
                name: 'Threading Change',
                nameDetail: '(Sara McQuaid)',
                body: "Canada's leading textile sustainability advocacy organization. KCEI ecosystem partner.",
                accent: 'border-t-brown',
                badgeColor: 'text-brown',
              },
              {
                badge: 'Global inspiration',
                name: 'FabBrick (France)',
                nameDetail: '',
                body: "The French circular economy pioneer whose compressed textile brick technology inspired KCEI's primary product line.",
                accent: 'border-t-brown',
                badgeColor: 'text-brown',
              },
            ].map(card => (
              <div
                key={card.name}
                className={`bg-white rounded-xl border border-kf-border shadow-kf p-6 border-t-4 ${card.accent}`}
              >
                <p className={`font-montserrat text-[9px] font-bold tracking-[3px] uppercase ${card.badgeColor} mb-1`}>
                  {card.badge}
                </p>
                <h3 className="font-montserrat font-bold text-[17px] text-kf-text mb-3">
                  {card.name}{card.nameDetail && <span className="font-normal text-text-muted text-[14px]"> {card.nameDetail}</span>}
                </h3>
                <p className="text-[13px] text-text-body leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section id="become-a-partner" className="bg-brown-deep py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="font-montserrat text-[10px] font-bold tracking-[3px] uppercase text-white/60 mb-3">
            Work With Us
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl mb-4">
            Become a partner or funder.
          </h2>
          <p className="text-[14px] text-white/75 leading-relaxed mb-8">
            The Kasandy Foundation is open to institutional funders, corporate partners, municipalities, and civic organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-7 py-3 rounded-sm hover:bg-[#a82b22] transition-colors"
            >
              Get in touch &rarr;
            </Link>
            <Link
              href="/kcei"
              className="border-2 border-white/60 text-white font-montserrat text-[12px] font-bold px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Learn about KCEI &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
