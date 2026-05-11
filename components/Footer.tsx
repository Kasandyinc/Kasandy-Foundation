import Link from 'next/link'
import Logo from './Logo'

const programs = [
  { label: 'KCEI',                href: '/kcei' },
  { label: 'Girls & Women',       href: '/girls-women' },
  { label: 'Paths to Home',       href: '/paths-to-home' },
]
const org = [
  { label: 'About',               href: '/about' },
  { label: 'Founder & Team',      href: '/team' },
  { label: 'Impact',              href: '/impact' },
  { label: 'Partners & Funders',  href: '/partners' },
  { label: 'Research',            href: '/research' },
]

export default function Footer() {
  return (
    <footer className="bg-kf-text text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Logo variant="light" size="sm" />
          <p className="mt-4 text-[12px] text-white/60 leading-relaxed max-w-[220px]">
            A BC-registered charitable foundation. BC Incorporation No.: S0075186 · Business No.: 786954701
          </p>
          <p className="mt-3 text-[11px] text-white/40">Established 2020. Vancouver & Kenya.</p>
        </div>

        <div>
          <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-3">Programs</p>
          <ul className="space-y-2">
            {programs.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-[12px] text-white/70 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-3">Organisation</p>
          <ul className="space-y-2">
            {org.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-[12px] text-white/70 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-montserrat text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-3">Get Involved</p>
          <ul className="space-y-2">
            <li><Link href="/donate" className="text-[12px] text-white/70 hover:text-white transition-colors">Donate</Link></li>
            <li><Link href="/kcei#partner" className="text-[12px] text-white/70 hover:text-white transition-colors">Partner with KCEI</Link></li>
            <li><Link href="/girls-women#apply" className="text-[12px] text-white/70 hover:text-white transition-colors">Apply for Bursary</Link></li>
            <li><Link href="/paths-to-home#apply" className="text-[12px] text-white/70 hover:text-white transition-colors">Apply for Adoption Funding</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-8 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} The Kasandy Foundation. All rights reserved.
          </p>
          <p className="text-[11px] text-white/40">
            kasandyfoundation.org
          </p>
        </div>
      </div>
    </footer>
  )
}
