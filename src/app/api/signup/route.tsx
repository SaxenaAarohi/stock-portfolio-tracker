import prismaclient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const body = await req.json();

    const data = {
        name: body.name,
        email: body.email,
        password: body.password
    }

    const res = await prismaclient.user.create({
        data: data,
    });

    if (res) {
        return NextResponse.json({
            success: true,
            message: 'Signed Up successfully',
        })
    }
    return NextResponse.json({
        success: false,
        message: 'Failed to signup'
    })


}