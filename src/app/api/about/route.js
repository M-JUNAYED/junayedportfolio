import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const result = await prisma.about.findMany();
        return NextResponse.json({ status: true, data: result });
    } catch (e) {
        return NextResponse.json({ status: false, data: e.message });
    }
}
