"use client";
import { useEffect, useState } from "react";
import StockGreedGauge from "./Greed";

export default function AnalystRatings({ buy, hold, sell, value }: { buy: number; hold: number; sell: number; value: number }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // fake 2s loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="flex md:flex-row flex-col justify-between w-[90%] md:w-[1000px] gap-4">

        <div className="bg-gray-900/40 border h-42 border-gray-700/30 ml-4 md:ml-5 px-2 md:mr-0 py-2 w-[98%] md:w-[1000px] rounded shadow animate-pulse">
          <div className="h-5 w-32 bg-gray-700 rounded mb-4 ml-2"></div>

          <div className="space-y-3">
            <div className="flex items-center px-2 justify-between">
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
              <div className="w-2/3 h-2 bg-gray-700 rounded"></div>
              <div className="h-4 w-8 bg-gray-700 rounded"></div>
            </div>

            <div className="flex items-center px-2 justify-between">
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
              <div className="w-2/3 h-2 bg-gray-700 rounded"></div>
              <div className="h-4 w-8 bg-gray-700 rounded"></div>
            </div>

            <div className="flex items-center px-2 justify-between">
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
              <div className="w-2/3 h-2 bg-gray-700 rounded"></div>
              <div className="h-4 w-8 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 md:ml-0 border md:w-[400px] h-42 md:ml-8 ml-4 border-gray-700/30 px-2 py-2 w-[97%] rounded shadow animate-pulse">
          <div className="h-5 w-28 bg-gray-700 rounded mb-4 ml-2"></div>
          <div className="w-full h-32 bg-gray-700 rounded"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex md:flex-row flex-col justify-between w-[90%] md:w-[1000px] gap-4">

      <div className="bg-gray-900/40 border h-42 border-gray-700/30 ml-4 md:ml-5 px-2 md:mr-0  py-1 w-[98%] md:w-[1000px] rounded shadow">
        <h3 className="font-semibold pt-2 px-2 mb-4">Analyst Ratings</h3>

        <div className="space-y-3">
          <div className="flex items-center px-2 justify-between">
            <span>Buy</span>
            <div className="w-2/3 bg-green-100 rounded">
              <div className="bg-green-500 h-2 rounded" style={{ width: `${buy}%` }}></div>
            </div>
            <span>{buy}%</span>
          </div>

          <div className="flex items-center px-2 justify-between">
            <span>Hold</span>
            <div className="w-2/3 bg-yellow-100 rounded">
              <div className="bg-yellow-500 h-2 rounded" style={{ width: `${hold}%` }}></div>
            </div>
            <span>{hold}%</span>
          </div>

          <div className="flex items-center px-2 justify-between">
            <span>Sell</span>
            <div className="w-2/3 bg-red-100 rounded">
              <div className="bg-red-500 h-2 rounded" style={{ width: `${sell}%` }}></div>
            </div>
            <span>{sell}%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/40 md:ml-0 border md:w-[400px]  h-42 md:ml-8 ml-10 border-gray-700/30 px-2 py-1 w-[280px] rounded shadow">
        <h3 className="font-semibold pt-2 px-2 mb-1">Greed index</h3>
        <StockGreedGauge value={value} />
      </div>
    </section>
  );
}
