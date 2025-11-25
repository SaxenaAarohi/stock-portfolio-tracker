"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type Data = {
  id: string;
  price: number;
  quantity: number;
  total: number;
  stock: {
    id: string;
    name: string;
    price: number | null;
    exchange: string;
    currentPrice: number;
  };
};

export default function Temporary({ data }: { data: Data }) {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse -ml-8 flex py-2 bg-gray-900/40 border border-gray-800 rounded-sm px-2 shadow-lg md:w-60 w-40">
        <div className="flex items-center space-x-2 p-1">
          <div>
            <div className="h-5 w-28 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-16 bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="text-right">
          <div className="h-5 w-14 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-10 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  const buyprice = Number(data.price.toFixed(2));
  const quantity = data?.quantity;
  const total = data.total.toFixed(2);
  const currprice = data?.stock?.price || 0;

  const profit = (
    (((currprice * quantity) - buyprice) / buyprice) *
    100
  ).toFixed(2);
  const profitNum = parseFloat(profit);

  return (
    <Link
      href={`stockdetail/${data.stock.id}`}
      className="flex items-center justify-between p-3 bg-gray-900/40 border border-gray-800 rounded-sm  shadow-lg md:w-[23%] w-40 overflow-hidden"
    >
        
        <div className="overflow-hidden">
         
          <h2 className="text-lg font-semibold truncate max-w-[120px] text-white">
            {data.stock.name}
          </h2>

          <p title="Current Price" className="font-medium text-sm text-gray-500">
            ${currprice}
          </p>

      </div>

      <div className="text-right">
        
        <p title="Invested amount" className="text-xl font-bold text-white">
          {total}
        </p>

        <p
          title="Profit"
          className={`font-medium text-sm ${profitNum > 0 ? "text-green-500" : "text-red-500"
            }`}
        >
          ({profit}%)
        </p>

      </div>

    </Link>
  );
}
