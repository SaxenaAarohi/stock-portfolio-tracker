"use client"
import HoldingsBarChart from "./CaleenderView"
import Navbar from "./Navbar"
import StaticPieChart from "./Piechart"
import HoldingsTable from "./Table"

export default function Holding() {
  const title = "Holding";
  const des = "Track your holdings "

  return (

    <div className="h-screen flex flex-col">

      <div>
        <Navbar title={title} line={des} />
      </div>

      <div className="flex mt-24 w-[400px]  overflow-x-hidden  md:w-full">

        <div className="flex flex-col md:ml-0 ml-8 md:mr-0 mr-2 overflow-y-auto scrollbar-hide w-full">
          
          <div className="flex md:flex-row flex-col md:gap-8 mb-4">
            <HoldingsBarChart />
            <StaticPieChart />
          </div>

          <div>
            <HoldingsTable />
          </div>

        </div>

      </div>

    </div>




  )
}