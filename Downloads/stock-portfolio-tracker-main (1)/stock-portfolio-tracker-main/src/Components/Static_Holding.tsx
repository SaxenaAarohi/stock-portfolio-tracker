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
   <div className="h-screen flex md:w-full w-screen flex-col overflow-hidden">

    
        <Navbar title={title} line={des} />
      
       <div className="flex flex-col items-center md:mt-5 mt-3 h-screen w-full overflow-y-auto 
    [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar]:w-[9px]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
    overflow-x-hidden px-2">

        <div className="flex md:flex-row flex-col md:gap-4 gap-4 mb-4 w-full  max-w-screen-xl">

          {loadingCharts ? (
            <div className="animate-pulse bg-gray-800 md:ml-0 ml-9 h-full md:w-2/3 w-[320px]" />
          ) : (
            <HoldingsBarChart isguest={true} />
          )}

          {loadingPie ? (
            <div className="animate-pulse bg-gray-800 md:ml-0 ml-9  h-full md:w-1/3 mr-6 w-[320px]  " />
          ) : (
            <StaticPieChart isguest={true} />
          )}

        </div>

<div className="w-full h-[60%] max-w-screen-xl">
        {loadingTable ? (
          <div className="animate-pulse bg-gray-800 md:ml-0 ml-9 h-full md:w-[98%]  w-[320px]" />
        ) : (
          <HoldingsTable isguest={true}/>
        )}
        </div>
      </div>

    </div>
  );
}