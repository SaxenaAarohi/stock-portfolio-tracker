import prismaclient from "@/services/prisma";
import Link from "next/link";
import Chart_Section from "./Chart_Section";
import Other_Stocks from "./Other_Stocks";
import Sidebar from "./Sidebar";

export default function Dashboard() {

    return (

        <div className="p-4">
            <div className="flex justify-between ">
                <div>
                    <h1 className="text-2xl">Dashboard</h1>
                    <p>Track your portfolio value,stock and more</p>
                </div>
                <div>
                    <Link href={"/stocklist"} className="bg-gray-700 text-white px-4 py-2 rounded">All Stock</Link>
                    <Link href={"/login"} className="bg-gray-700 text-white px-4 py-2 rounded ml-2">Login</Link>
                </div>
            </div>
            <div className="flex mt-4">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Chart_Section />
                    <Other_Stocks/>
                </div>

            </div>

        </div>
    );
}