"use client";
import { useState, useEffect } from "react";
import HoldingsBarChart from "./CaleenderView";
import Navbar from "./Navbar";
import StaticPieChart from "./Piechart";
import HoldingsTable from "./Table";

export default function Holding() {
  const title = "Holding";
  const des = "Track your holdings ";

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

      <div className="flex mt-24 w-[400px] overflow-x-hidden md:w-full">
        <div className="flex flex-col md:ml-0 ml-8 md:mr-0 mr-2 overflow-y-auto scrollbar-hide w-full">
          
          <div className="flex md:flex-row flex-col md:gap-8 mb-4">
            {loadingCharts ? (
              <div className="animate-pulse bg-gray-800  mt-4 h-64 md:w-2/3 w-[320px]" />
            ) : (
              <HoldingsBarChart />
            )}

            {loadingPie ? (
              <div className="animate-pulse bg-gray-800 mt-4  h-64 md:w-1/3 w-[320px]  -ml-4 mr-4" />
            ) : (
              <StaticPieChart />
            )}
          </div>

          {loadingTable ? (
            <div className="animate-pulse bg-gray-800  h-60 md:w-[98%]  w-[320px]" />
          ) : (
            <HoldingsTable />
          )}
        </div>
      </div>
    </div>
  );
}
