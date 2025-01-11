import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
    try{
        const reqBody = await req.json()
        const result = await prisma.contact.create({
            data:{
                ...reqBody
            }
        })
        return NextResponse.json({status:true, data:result})
    }catch(e){
        return NextResponse.json({status:false, data:e.message})
    }
}