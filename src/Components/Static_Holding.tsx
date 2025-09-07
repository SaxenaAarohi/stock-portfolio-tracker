"use client"

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HoldingsBarChart from "./CaleenderView";
import HoldingsTable from "./Table";
import StaticPieChart from "./Piechart";

export default function Static_Holding(){

const title = "Guest Holding";
  const des = "Login to track your holdings ";
  const [loadingCharts, setLoadingCharts] = useState(true);
  const [loadingPie, setLoadingPie] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    const chartTimer = setTimeout(() => setLoadingCharts(false), 1000);
    const pieTimer = setTimeout(() => setLoadingPie(false), 1200);
    const tableTimer = setTimeout(() => setLoadingTable(false), 1500);

    return () => {
      clearTimeout(chartTimer);
      clearTimeout(pieTimer);
      clearTimeout(tableTimer);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">

      <div>
        <Navbar title={title} line={des} />
      </div>

      <div className="flex flex-col md:mt-5 mt-3 overflow-x-hidden md:w-full md:ml-0 ml-0  md:mr-0 mr-2 overflow-y-auto scrollbar-hide w-[480px]">

        <div className="flex md:flex-row flex-col md:gap-4  mb-4">

          {loadingCharts ? (
            <div className="animate-pulse bg-gray-800  h-64 md:w-2/3 w-[320px]" />
          ) : (
            <HoldingsBarChart isguest={true} />
          )}

          {loadingPie ? (
            <div className="animate-pulse bg-gray-800   h-64 md:w-1/3 mr-6 w-[320px]  " />
          ) : (
            <StaticPieChart isguest={true} />
          )}

        </div>

        {loadingTable ? (
          <div className="animate-pulse bg-gray-800  h-60 md:w-[98%]  w-[320px]" />
        ) : (
          <HoldingsTable isguest={true}/>
        )}
      </div>

    </div>
  );
}