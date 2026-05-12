import type { Metadata } from 'next'
import { Montserrat, DM_Sans, Great_Vibes } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MissionBar from '@/components/MissionBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kasandyfoundation.org'),
  title: {
    default: 'The Kasandy Foundation — Nothing and No One Is Wasted',
    template: '%s | The Kasandy Foundation',
  },
  description:
    "A BC-registered nonprofit organization transforming textile waste into purposeful employment, funding girls' education in Canada and Kenya, and removing financial barriers to adoption.",
  keywords: [
    'Kasandy Foundation',
    'circular economy Vancouver',
    'textile recycling jobs',
    'Black girls education bursary Canada',
    'adoption funding Canada',
    'One Girl Can Kenya',
    'KCEI',
    'Jackee Kasandy',
    'nonprofit organization BC',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'The Kasandy Foundation',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = headers().get('x-pathname') || ''
  const isAdmin = pathname.startsWith('/admin')

  return (
    <html lang="en-CA" className={`${montserrat.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <body className="antialiased">
        {!isAdmin && <Nav />}
        {!isAdmin && <MissionBar />}
        {isAdmin ? children : <main>{children}</main>}
        {!isAdmin && <Footer />}
      </body>
    </html>
  )
}
