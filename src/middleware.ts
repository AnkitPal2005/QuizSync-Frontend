import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/signup',
  '/forgot-password',
];

// Routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/assessments',
  '/question-bank',
  '/onboarding',
];

// Assessment routes (for candidates)
const assessmentRoutes = [
  '/assessment',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // DEVELOPMENT MODE: Bypass authentication
  // TODO: Remove this in production and implement proper authentication
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (isDevelopment) {
    // In development, allow all routes
    return NextResponse.next();
  }
  
  // Check if user is authenticated (you'll replace this with actual auth check)
  const isAuthenticated = request.cookies.get('auth-token')?.value;
  const isAdmin = request.cookies.get('user-role')?.value === 'admin';
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    // If authenticated user tries to access login/signup, redirect to dashboard
    if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }
  
  // Protect admin routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      // Redirect to login with return URL
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    if (!isAdmin) {
      // Non-admin users can't access admin routes
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  // Assessment routes (for candidates)
  if (assessmentRoutes.some(route => pathname.startsWith(route))) {
    // Assessment routes are accessible without login
    // But you can add assessment-specific validation here
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
};
