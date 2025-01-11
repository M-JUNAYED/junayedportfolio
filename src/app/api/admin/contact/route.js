import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const result = await prisma.contact.findMany();
        return NextResponse.json({ status: true, data: result });
    } catch (e) {
        return NextResponse.json({ status: false, data: e.message });
    }
}

export async function DELETE(req) {
    try{
        const {id} = await req.json()
        console.log(id);
        
        const result = await prisma.contact.delete({
            where:{
                id: id
            }
        })
        return NextResponse.json({status:true, data:result})
    }catch(e){
        return NextResponse.json({status:false, data:e.message})
    }
}