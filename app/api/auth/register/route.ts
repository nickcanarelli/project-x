import { prisma } from "@helpers/prismaClient";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
