import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-token")?.value;

  console.log("Token:", token);

  if (!token) {
    console.log("No token found");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET!
);

await jwtVerify(token, secret);

return NextResponse.next();
  } catch (error) {
    console.log("JWT Verify Error:", error);

    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};