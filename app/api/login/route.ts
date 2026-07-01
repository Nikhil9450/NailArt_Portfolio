import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET!
);

const token = await new SignJWT({ email })
  .setProtectedHeader({ alg: "HS256" })
  .setIssuedAt()
  .setExpirationTime("7d")
  .sign(secret);

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}