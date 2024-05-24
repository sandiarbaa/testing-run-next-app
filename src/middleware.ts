import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLogin = true;
  // if (request.nextUrl.pathname.startsWith("/product")) {
  //   return NextResponse.redirect(new URL("/api", request.url));
  // }
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
    // return NextResponse.rewrite(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: "/about/:path*",
  matcher: "/product",
};
