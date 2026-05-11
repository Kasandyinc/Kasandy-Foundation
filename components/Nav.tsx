'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Home', href: '/' },
  {
    label: 'KCEI',
    href: '/kcei',
    children: [
      { label: 'Overview',            href: '/kcei' },
      { label: 'Our Products',        href: '/kcei/products' },
      { label: 'Who We Employ',       href: '/kcei/communities' },
      { label: 'Partners & Ecosystem',href: '/kcei/ecosystem' },
    ],
  },
  { label: 'Girls & Women',  href: '/girls-women' },
  { label: 'Paths to Home',  href: '/paths-to-home' },
  { label: 'About',          href: '/about' },
  { label: 'Impact',         href: '/impact' },
  { label: 'Research',       href: '/research' },
  { label: 'Media',          href: '/media' },
]

export default function Nav() {
  const pathname  = usePathname()
  const [open, setOpen]       = useState(false)
  const [dropdown, setDropdown] = useState(false)

  return (
    <nav className="bg-white border-b border-kf-border sticky top-0 z-50">
      <div className="px-6 md:px-8 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Logo size="sm" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            l.children ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  href={l.href}
                  className={`font-montserrat text-[12px] font-medium tracking-wide transition-colors flex items-center gap-1 ${
                    pathname.startsWith(l.href)
                      ? 'text-kf-red font-bold'
                      : 'text-text-muted hover:text-brown-deep'
                  }`}
                >
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </Link>
                {dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-kf-border rounded-lg shadow-kf-lg py-2 min-w-[200px] z-50">
                    {l.children.map(c => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block px-4 py-2.5 font-montserrat text-[12px] transition-colors ${
                          pathname === c.href
                            ? 'text-kf-red font-bold bg-red-pale'
                            : 'text-text-body hover:bg-brown-pale hover:text-brown-deep'
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`font-montserrat text-[12px] font-medium tracking-wide transition-colors ${
                  pathname.startsWith(l.href)
                    ? 'text-kf-red font-bold'
                    : 'text-text-muted hover:text-brown-deep'
                }`}
              >
                {l.label}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:block font-montserrat text-[11px] text-text-muted">EN</span>
          <Link
            href="/donate"
            className="bg-kf-red text-white font-montserrat text-[11px] font-bold tracking-wide px-5 py-2 rounded-sm hover:bg-[#a82b22] transition-colors"
          >
            Donate
          </Link>
          <button
            className="lg:hidden p-1 text-brown-deep"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M18 6 6 18M6 6l12 12" />
                : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-kf-border bg-white px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block font-montserrat text-[13px] font-medium py-1 ${
                  pathname.startsWith(l.href) ? 'text-kf-red font-bold' : 'text-text-body'
                }`}
              >
                {l.label}
              </Link>
              {l.children && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {l.children.slice(1).map(c => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="font-montserrat text-[12px] text-text-muted py-1"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
