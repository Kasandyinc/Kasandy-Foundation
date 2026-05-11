import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Research & White Papers',
  description: 'KCEI research publications, policy papers, and applied R&D findings from the Kasandy Foundation and Emily Carr University partnership.',
}

const publications = [
  {
    category: 'MATERIAL RESEARCH',
    status: 'Active R&D',
    title: 'Acoustic Brick Compression Testing Report',
    desc: 'Applied R&D into textile-based acoustic brick manufacturing. Material testing, compression ratings, and acoustic performance benchmarks produced in collaboration with ECUAD.',
    type: 'Research Report',
    accent: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
    badgeClass: 'bg-green-pale text-green-deep',
  },
  {
    category: 'POLICY PAPER',
    status: 'Policy development',
    title: 'Inclusive Green Economy: A Framework for Canadian Cities',
    desc: 'How circular economy initiatives can be designed from the outset to include communities systematically excluded from the green economy — refugees, newcomers, people with disabilities, Black and Indigenous women.',
    type: 'Policy Brief',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    badgeClass: 'bg-brown-pale text-brown-deep',
  },
  {
    category: 'FEASIBILITY STUDY',
    status: 'Feasibility study',
    title: 'Textile-Based Insulation Panels: Feasibility Assessment',
    desc: 'Applied R&D into construction insulation from compressed textile waste. National Building Code compliance analysis. Positioned as a feasibility study — not a committed product stream.',
    type: 'Feasibility Study',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    badgeClass: 'bg-brown-pale text-brown-deep',
  },
  {
    category: 'IMPACT REPORT',
    status: 'SBCCI grant deliverable',
    title: 'KCEI Midline Activity Report: January–April 2026',
    desc: 'Activity report covering KCEI operational milestones, partnership development, grant deliverables, and community engagement outcomes for the SBCCI grant period.',
    type: 'Impact Report',
    accent: 'border-t-kf-red',
    kickerClass: 'text-kf-red',
    badgeClass: 'bg-red-pale text-kf-red',
  },
  {
    category: 'ECOSYSTEM ANALYSIS',
    status: 'Community education',
    title: 'The Canada–Kenya Textile Export Pipeline: What BC Residents Should Know',
    desc: 'White paper documenting the bulk export of Canadian donated textiles to African markets. Evidence base for KCEI\'s community collection model and the case for local circular infrastructure.',
    type: 'White Paper',
    accent: 'border-t-kf-green',
    kickerClass: 'text-kf-green',
    badgeClass: 'bg-green-pale text-green-deep',
  },
  {
    category: 'RESEARCH BRIEF',
    status: 'Ecosystem analysis',
    title: 'Circular Economy Employment: International Models',
    desc: 'Comparative analysis of circular economy employment models in France (FabBrick), the Netherlands, and Kenya. Evidence base for KCEI\'s inclusive employment design.',
    type: 'Research Brief',
    accent: 'border-t-brown',
    kickerClass: 'text-brown',
    badgeClass: 'bg-brown-pale text-brown-deep',
  },
]

const external = [
  {
    org: 'Ellen MacArthur Foundation',
    title: 'A New Textiles Economy: Redesigning Fashion\'s Future',
    desc: 'Foundational analysis of the global textile circular economy opportunity. The primary external research framework underpinning KCEI\'s model.',
  },
  {
    org: 'City of Vancouver',
    title: 'Zero Waste 2040 Strategy',
    desc: 'Vancouver\'s strategic plan for zero waste. KCEI addresses the textile waste stream — one of the largest unresolved categories in the strategy.',
  },
  {
    org: 'Government of Canada',
    title: 'Federal Equity Framework for Employment',
    desc: 'The federal mandate framework that KCEI\'s inclusive employment model directly addresses, opening access to ESDC, WorkBC, and IRCC funding streams.',
  },
]

export default function ResearchPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brown-pale border-b border-kf-border py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="kicker-brown mb-3">Research & White Papers</p>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-kf-text mb-5 leading-[1.08]">
            The evidence base behind the work.
          </h1>
          <p className="text-[15px] text-text-body leading-relaxed max-w-2xl mb-8">
            KCEI is research-driven. Our materials, models, and approaches are documented, tested, and peer-reviewed. We publish our findings and share the evidence that justifies our methods.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border-2 border-brown-deep text-brown-deep font-montserrat text-[12px] font-bold px-5 py-2.5 rounded-sm cursor-pointer">
              View all publications ↓
            </span>
            <span className="font-montserrat text-[12px] font-bold text-brown cursor-pointer">
              Request a research brief →
            </span>
          </div>
        </div>
      </section>

      {/* ECUAD PARTNERSHIP */}
      <section className="bg-green-pale border-b border-kf-border py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker-green mb-2">Research Partner</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-8">Emily Carr University of Art + Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[14px] text-text-body leading-relaxed mb-4">
                The Kasandy Foundation holds a formal research MOU with Emily Carr University (ECUAD) — a ten-milestone agreement covering applied R&D on circular textile products, material science, and circular economy design.
              </p>
              <p className="text-[14px] text-text-body leading-relaxed mb-4">
                ECUAD researchers collaborate directly with KCEI workers on product development, testing acoustic bricks, playground surfaces, park furnishings, and other circular textile outputs.
              </p>
              <p className="text-[14px] text-text-body leading-relaxed">
                Each milestone is documented and reported. The MOU is active. Research findings are published as milestones are completed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-kf-border shadow-kf">
              <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-kf-green mb-4">ECUAD Research Team</p>
              <ul className="space-y-4">
                {[
                  { role: 'Faculty Lead & Grant Applicant', name: 'Ellen [Surname]', detail: 'Lead researcher and primary grant applicant for the ECUAD–Kasandy MOU.' },
                  { role: 'Facilities & Research Office',   name: 'William [Surname]', detail: 'Oversees equipment and lab access for the KCEI pilot.' },
                  { role: 'Postgraduate Researcher',        name: 'Annika [Surname]', detail: 'Material testing and circular product development.' },
                ].map(m => (
                  <li key={m.name} className="border-b border-kf-border pb-4 last:border-0 last:pb-0">
                    <span className="font-montserrat text-[9px] font-bold tracking-wide uppercase text-text-muted block mb-0.5">{m.role}</span>
                    <span className="font-montserrat font-bold text-[15px] text-kf-text block mb-1">{m.name}</span>
                    <span className="text-[12px] text-text-muted">{m.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KCEI PUBLICATIONS */}
      <section className="bg-white py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-2">KCEI Publications</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-2">Research produced with and by the Kasandy Foundation.</h2>
          <p className="text-[14px] text-text-muted mb-10">Publications are released as research milestones are reached. All documents are available upon request.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map(p => (
              <div key={p.title} className={`bg-white rounded-xl border border-kf-border shadow-kf border-t-4 ${p.accent} flex flex-col`}>
                <div className="p-6 flex flex-col flex-1">
                  <div className={`font-montserrat text-[9px] font-bold tracking-[2px] uppercase mb-2 ${p.kickerClass}`}>{p.category}</div>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className={`font-montserrat text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${p.badgeClass}`}>{p.type}</span>
                    <span className="bg-sand text-text-muted font-montserrat text-[9px] font-semibold px-2.5 py-1 rounded-full">{p.status}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-[16px] text-kf-text mb-3 leading-snug flex-1">{p.title}</h3>
                  <p className="text-[12.5px] text-text-body leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex gap-3 mt-auto">
                    <span className="font-montserrat text-[11px] font-bold text-kf-red cursor-pointer">Download PDF →</span>
                    <span className="font-montserrat text-[11px] font-bold text-text-muted cursor-pointer">Abstract →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTERNAL RESEARCH */}
      <section className="bg-sand py-14 px-6 md:px-10 border-t border-kf-border">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-2">External Research</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-10">Foundational research from the global circular economy ecosystem.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {external.map(e => (
              <div key={e.title} className="bg-white rounded-xl p-6 border border-kf-border shadow-kf">
                <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-text-muted mb-2">{e.org}</p>
                <h3 className="font-montserrat font-bold text-[15px] text-kf-text mb-3 leading-snug">{e.title}</h3>
                <p className="text-[12.5px] text-text-body leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY ALIGNMENT */}
      <section className="bg-brown-pale py-14 px-6 md:px-10 border-t border-kf-border">
        <div className="max-w-5xl mx-auto">
          <p className="kicker mb-2">Policy Alignment</p>
          <h2 className="font-montserrat font-extrabold text-3xl text-kf-text mb-8">KCEI is aligned with:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'Vancouver Zero Waste 2040',  desc: "The City of Vancouver's strategic plan to eliminate waste. KCEI addresses the textile waste stream — one of the largest unresolved categories." },
              { name: 'Greenest City Action Plan',   desc: "Vancouver's long-term sustainability framework. KCEI delivers against the green jobs, circular economy, and equity pillars simultaneously." },
              { name: 'Federal Equity Framework',    desc: 'KCEI employs from communities excluded from the green economy — refugees, newcomers, people with disabilities, Black and Indigenous women.' },
            ].map(a => (
              <div key={a.name} className="bg-white rounded-xl p-6 border border-kf-border shadow-kf">
                <h3 className="font-montserrat font-bold text-[15px] text-kf-text mb-2">{a.name}</h3>
                <p className="text-[12.5px] text-text-body leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-deep text-white py-14 px-6 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-montserrat font-extrabold text-2xl mb-3">Research collaboration inquiries.</h2>
            <p className="text-[14px] text-white/75 leading-relaxed max-w-lg">
              Academics, policy researchers, and institutions interested in KCEI research collaboration are welcome to reach out. Jackee is also available for speaking engagements on circular economy and social enterprise.
            </p>
          </div>
          <div className="shrink-0 flex gap-3">
            <Link href="/team" className="bg-kf-red text-white font-montserrat text-[12px] font-bold tracking-wide px-6 py-3 rounded-sm hover:bg-[#a82b22] transition-colors">
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
