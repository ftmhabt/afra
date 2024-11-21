import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const bearerToken = req.headers.get("authorization");
  if (!bearerToken) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 400 }
    );
  }
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return NextResponse.json({ message: "email is invalid" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  console.log("user:", user);

  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 401 });
  }

  return NextResponse.json({ user }, { status: 200 });
}
