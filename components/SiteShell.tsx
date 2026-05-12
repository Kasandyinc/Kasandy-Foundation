'use client'

import { usePathname } from 'next/navigation'
import Nav from './Nav'
import MissionBar from './MissionBar'
import Footer from './Footer'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) return <>{children}</>

  return (
    <>
      <Nav />
      <MissionBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
