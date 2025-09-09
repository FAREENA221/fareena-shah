// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin/* routes except /admin/login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    // Check custom cookie "admin_session"
    const adminSession = req.cookies.get("admin_session")?.value;

    if (!adminSession) {
      // Redirect to login if cookie not present
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware only to /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
