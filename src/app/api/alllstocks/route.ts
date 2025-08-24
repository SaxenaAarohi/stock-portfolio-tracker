import prismaclient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest ) {

    try {

        


        if (stocks) {
            return NextResponse.json({
                success: true,
                data: stocks
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Not found"
            })
        }

    }
    catch (err : any) {
        console.log(err.message);
        return NextResponse.json({
            success: false,
            message: "Id Not found"
        })
    }

}
