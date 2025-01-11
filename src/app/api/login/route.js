import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { CreateToken } from '@/utility/JWTTokenHelper';

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
      where: { email: reqBody.email },
    });

    if (!user) {
      return NextResponse.json({ status: false, data: "User not found!" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(reqBody.password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ status: false, data: "Invalid password!" }, { status: 401 });
    }

    const token = await CreateToken(user.email, user.id);

    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;

    return NextResponse.json(
      { status: true, data: token },
      { status: 200, headers: { 'set-cookie': cookieString } }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: false, data: e.toString() }, { status: 500 });
  }
}
