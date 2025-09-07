import { getuserfromcookies } from "@/helper";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import HoldingsBarChart from "./CaleenderView";
import Navbar from "./Navbar";
import StaticPieChart from "./Piechart";
import Static_Holding from "./Static_Holding";
import HoldingsTable from "./Table";

export default async function Holding() {

  const cookieStore = await cookies();
  const user = await getuserfromcookies()

  if (user) {
    const title = "Holding";
    const des = "Track your holdings ";

    return (
      <div className="h-screen flex flex-col">
        <Navbar title={title} line={des} />

        <div className="flex flex-col md:mt-5 mt-3 overflow-x-hidden md:w-full md:ml-0 ml-0 md:mr-0 mr-2 overflow-y-auto scrollbar-hide w-[480px]">
          <div className="flex md:flex-row flex-col md:gap-4 mb-4">

            <Suspense fallback={<div className="animate-pulse bg-gray-800 h-64 md:w-2/3 w-[320px]" />}>
              <HoldingsBarChart isguest={false} />
            </Suspense>

            <Suspense fallback={<div className="animate-pulse bg-gray-800 h-64 md:w-1/3 mr-6 w-[320px]" />}>
              <StaticPieChart isguest={false} />
            </Suspense>
          </div>

          <Suspense fallback={<div className="animate-pulse bg-gray-800 h-60 md:w-[98%] w-[320px]" />}>
            <HoldingsTable isguest={false} />
          </Suspense>
        </div>
      </div>
    );
  }

  const isguest = cookieStore.get("guest")?.value === "true";

  if (isguest) {
    return <Static_Holding />;
  }

  redirect("/login");
}
