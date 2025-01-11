import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(req) {
    try{
        const reqBody = await req.json()
        const result = await prisma.education.create({
            data:{
                ...reqBody
            }
        })
        return NextResponse.json({status:true, data:result})
    }catch(e){
        return NextResponse.json({status:false, data:e.message})
    }
}


export async function DELETE(req) {
    try{
        const {id} = await req.json()
        console.log(id);
        
        const result = await prisma.education.delete({
            where:{
                id: id
            }
        })
        return NextResponse.json({status:true, data:result})
    }catch(e){
        return NextResponse.json({status:false, data:e.message})
    }
}