import prismaclient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
    const body = await req.json();

    const data = {
      name: body.name,
      email: body.email,
      password: body.password,
    };

    const res = await prisma.user.create({
      data: data,
    });

    return NextResponse.json({
      success: true,
      message: "Signed Up successfully",
      user: res,
    });
  } catch (error) {
    console.error("Signup Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to signup",
        error: String(error),
      },
      { status: 500 }
    );
  }

}
