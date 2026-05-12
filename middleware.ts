import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Pass x-pathname to layout so it can hide site nav on /admin routes
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-pathname', pathname)

  // Only protect /admin routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Allow login page through
  if (pathname === '/admin/login') {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Check session cookie
  const session = req.cookies.get('kf-admin-session')
  if (session?.value === process.env.ADMIN_PASSWORD) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Redirect to login
  const loginUrl = new URL('/admin/login', req.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|photos|press|fonts|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)'],
}
