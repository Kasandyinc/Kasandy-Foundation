'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, FileText, Heart, BarChart2,
  Settings, LogOut, ExternalLink, Inbox, Image as ImageIcon,
} from 'lucide-react'

const nav = [
  { href: '/admin',             label: 'Dashboard',   icon: LayoutDashboard, section: null },
  { href: '/admin/submissions', label: 'Submissions', icon: Inbox,           section: 'Inbox' },
  { href: '/admin/donations',   label: 'Donations',   icon: Heart,           section: null },
  { href: '/admin/content',     label: 'Content',     icon: FileText,        section: 'Website' },
  { href: '/admin/media',       label: 'Media',       icon: ImageIcon,       section: null },
  { href: '/admin/analytics',   label: 'Analytics',   icon: BarChart2,       section: 'Insights' },
  { href: '/admin/settings',    label: 'Settings',    icon: Settings,        section: 'Admin' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-56 bg-[#1C1008] text-white flex flex-col shrink-0 min-h-screen">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <p className="font-montserrat font-black text-[13px] text-white tracking-wide">
          KASANDY <span className="text-[#C0392B]">FOUNDATION</span>
        </p>
        <p className="font-montserrat text-[9px] uppercase tracking-[2px] text-white/30 mt-1">Admin</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon, section }, idx) => {
          const active = pathname === href || (href !== '/admin' && pathname.startsWith(href))
          const showSection = section && (idx === 0 || nav[idx - 1].section !== section)
          return (
            <div key={href}>
              {showSection && (
                <p className="text-[9px] uppercase tracking-widest text-white/20 px-3 pt-4 pb-1 font-semibold font-montserrat">
                  {section}
                </p>
              )}
              <Link
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded transition-colors ${
                  active
                    ? 'bg-white/10 text-white font-medium'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} strokeWidth={1.5} />
                {label}
              </Link>
            </div>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/10 space-y-0.5">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/50 hover:text-white transition-colors rounded hover:bg-white/5"
        >
          <ExternalLink size={16} strokeWidth={1.5} />
          View Site
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-white/50 hover:text-white transition-colors rounded hover:bg-white/5"
        >
          <LogOut size={16} strokeWidth={1.5} />
          Logout
        </button>
      </div>
    </aside>
  )
}
