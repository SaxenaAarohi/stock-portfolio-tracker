import { cookies } from "next/headers";
import { getuserfromcookies } from "@/helper";
import { redirect } from "next/navigation";
import Chart_Section from "./Chart_Section";
import Navbar from "./Navbar";
import Other_Stocks from "./Other_Stocks";
import Summary from "./Summary";
import GuestDashboard from "./GuestDashboard"; // <-- you create this

export default async function Dashboard() {
  
  const cookieStore =await cookies();

  const user = await getuserfromcookies();

  if (user) {
    const title = "Dashboard";
    const des = "Track your portfolio value, stock and more";

    return (
      <div className="h-screen flex flex-col">
        <div>
          <Navbar title={title} line={des} />
        </div>

        <div className="flex flex-col mt-6 overflow-y-auto scrollbar-hide w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <Chart_Section />
            <Summary />
          </div>
          <Other_Stocks user={user} />
        </div>
      </div>
    );
  }

  const isGuest = cookieStore.get("guest")?.value === "true";
  if (isGuest) {
    return <GuestDashboard />;
  }

  redirect("/login");
}
