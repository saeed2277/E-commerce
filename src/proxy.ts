import { NextRequest, NextResponse } from "next/server";
const protectedRoutes = [
  "/cart",
  "/checkout",
  "/profile",
  "/orders",
  "/wishlist",
];
const authRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isAuthenticated = !!token;
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const isAuthRoutes = authRoutes.some(
    (route) => route === pathname || pathname.startsWith(`${route}/`),
  );
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoutes && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

const config = {

matcher:[
    '/profile/:path*',
    '/cart/:path*',
    '/checkout/:path*',
    '/orders/:path*',
    '/wishlist/:path*',
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password'
]
}