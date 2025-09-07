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
  <div className="h-screen flex md:w-full w-screen flex-col overflow-hidden">
    <Navbar title={title} line={des} />

    <div className="flex flex-col items-center md:mt-5 mt-3  w-full overflow-y-auto 
    [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar]:w-[9px]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
    overflow-x-hidden px-2">
      
      <div className="flex md:flex-row flex-col md:gap-4 gap-4 mb-4 w-full max-w-screen-xl">
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-800 h-64 md:w-2/3 w-full rounded" />
          }
        >
          <HoldingsBarChart isguest={false} />
        </Suspense>

        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-800 h-64 md:w-1/3 w-full rounded" />
          }
        >
          <StaticPieChart isguest={false} />
        </Suspense>
      </div>

      <div className="w-full max-w-screen-xl">
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-800 h-60 w-full rounded" />
          }
        >
          <HoldingsTable isguest={false} />
        </Suspense>
      </div>
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
