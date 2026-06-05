import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // Protected routes
  const protectedPaths = ['/dashboard']
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path))

  // Auth pages (should redirect if already logged in)
  const authPaths = ['/login', '/register']
  const isAuthPage = authPaths.some((path) => pathname.startsWith(path))

  if (isProtected && !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard/client', request.url))
  }

  // Role-based access control
  if (token && pathname.startsWith('/dashboard')) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      const role = payload.role

      if (pathname.startsWith('/dashboard/advisor') && role !== 'ADVISOR') {
        return NextResponse.redirect(new URL(`/dashboard/${role.toLowerCase()}`, request.url))
      }
      if (pathname.startsWith('/dashboard/assistant') && role !== 'ASSISTANT') {
        return NextResponse.redirect(new URL(`/dashboard/${role.toLowerCase()}`, request.url))
      }
      if (pathname.startsWith('/dashboard/client') && role !== 'CLIENT') {
        return NextResponse.redirect(new URL(`/dashboard/${role.toLowerCase()}`, request.url))
      }
    } catch {
      // Invalid token, redirect to login
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}
