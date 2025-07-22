import { PrismaClient } from "@/app/generated/prisma"
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params}: {params: {id:string}}) {

    const id = parseInt(params.id)
    const issue = await prisma.issue.findUnique({
        where: { id }
    })

    if (!issue) {
        return NextResponse.json({error: 'No issue with such id'}, {status: 404});
    }

    return NextResponse.json(issue, {status: 200});
}