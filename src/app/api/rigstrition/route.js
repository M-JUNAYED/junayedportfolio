import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
      let prisma = new PrismaClient();
      const reqBody = await req.json();
  
      const hashedPassword = await bcrypt.hash(reqBody.password, 10);
  
      let result = await prisma.user.create({
        data: {
          email: reqBody.email,
          password: hashedPassword,
        }
      });
  
      return NextResponse.json({ status: true, data: result });
    } catch (e) {
      return NextResponse.json({ status: false, data: e.toString() });
    }
  }