import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";

type Userwithall = {
    id: string,
    name : string,
    email : string,
    password : string
}

export async function getuserfromcookies() {

    const usercookies = await cookies();
    const email = usercookies.get("email")?.value;


    if (!email) {
        return null;
    }

    const user: Userwithall | null = await prismaClient.user.findUnique({
        where: { email },
    })

    if (!user) {
        return null;
    }

    return user;
}