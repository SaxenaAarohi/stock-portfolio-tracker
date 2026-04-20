import { getuserfromcookies } from "@/helper";
import prismaclient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type DATA = {
    userId: string
    quantity: number;
    price: number;
    type: string;
    stockId: string;
    total: number;
    createdAt: Date;
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    const data: DATA = {
        userId: body.userId,
        quantity: body.quantity,
        price: body.price,
        type: body.type,
        stockId: body.stockId,
        total: body.total,
        createdAt: body.createdAt,
    }

    const res = await prismaclient.transaction.upsert({
        where: {
            stockId: body.stockId
        },
        update: {
            quantity: {
                increment: body.quantity,
            },
              total: {
      increment: body.price * body.quantity,
    },
        },
        create: data
    });

    if (res) {
        return NextResponse.json({
            success: true,
            message: 'Transaction added successfully',
        })
    }
    return NextResponse.json({
        success: false,
        message: 'Failed to add transaction'
    })


}



export async function GET() {

    const user = await getuserfromcookies();
    const res = await prismaclient.transaction.findMany({
        where: { userId: user?.id },
        include: { stock: true }
    });

    if (res) {
        return NextResponse.json({
            success: true,
            data: res
        })
    }
    return NextResponse.json({
        success: false,
        message: 'Failed to fetch transaction'
    })

}