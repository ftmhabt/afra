import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req: NextRequest) {
  const bearerToken = req.headers.get("authorization") as string;
  if (!bearerToken) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 400 }
    );
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 400 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 400 }
    );
  }
}

export const config = {
  matcher: ["/api/auth/me"],
};
