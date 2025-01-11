import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Middleware for `/dashboard`
  if (pathname.startsWith("/admin")) {
    try {
      const token = req.cookies.get("token")?.value;

      if (!token) {
        throw new Error("Token not found");
      }

      const payload = await VerifyToken(token);

      // Set custom headers with user information
      req.headers.set("email", payload.email);
      req.headers.set("id", payload.id);

      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Middleware for `/api/dashboard`
  if (pathname.startsWith("/api/admin")) {
    try {
      const token = req.cookies.get("token")?.value;

      if (!token) {
        throw new Error("Token not found");
      }

      const payload = await VerifyToken(token);

      // Set custom headers with user information
      req.headers.set("email", payload.email);
      req.headers.set("id", payload.id);

      return NextResponse.next();
    } catch (e) {
      return NextResponse.json(
        { status: false, data: "Unauthorized!" },
        { status: 401 }
      );
    }
  }

  // Allow all other requests
  return NextResponse.next();
}

// Configure paths to match middleware
export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
