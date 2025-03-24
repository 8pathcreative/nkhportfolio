import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This middleware protects experimental routes in production
export function middleware(request: NextRequest) {
  // Check if we're in production and if the request is for an experimental route
  if (
    process.env.NODE_ENV === 'production' && 
    request.nextUrl.pathname.startsWith('/experimental')
  ) {
    // In production, redirect experimental routes to the home page
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

// Specify which routes this middleware should run on
export const config = {
  matcher: '/experimental/:path*',
} 