import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const body = await req.json();

  try {

    const user = await prismaClient.user.findUnique({
      where: {
        email: body.email,
      }
    });

    if (user) {
      if (user?.password === body.password) {
        const res = NextResponse.json({
          success: true,
          user: user,
          message : "Logged in"
        })
        res.cookies.delete("guest");
        res.cookies.set("email", user?.email);
        return res;
      }
      else {

        return NextResponse.json({
          success: false,
          message: "Wrong cerednetials"
        })

      }
    }
    else {

      return NextResponse.json({
        success: false,
        message: "User not exist"
      })

    }

  }
  catch (err: unknown) {
    return NextResponse.json({
      success: false,
      message: err
    })

  }


}