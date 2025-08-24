import prismaclient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
    id: string
}>

export async function GET(req: NextRequest, { params }: { params: Params }) {

    const { id } = await params;

    try {

        const stock = await prismaclient.stockHistory.findMany({
            where:
                { stockId: id },
                 orderBy: { date: 'asc' },
        });


        if (stock) {
            return NextResponse.json({
                success: true,
                data: stock
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Not found"
            })
        }

    }
    catch (err: any) {
        console.log(err.message);
        return NextResponse.json({
            success: false,
            message: "Id Not found"
        })
    }

}
