"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type Stock = {
  id: string;
  symbol: string;
  name: string;
  price: number | null;
  exchange: string;
  transactions: { quantity: number }[];
  currentPrice: number;
};

export default function Displaystock({ stock }: { stock: Stock }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse flex justify-between bg-gray-900 border border-gray-800 rounded-md md:px-4 px-1 py-4 shadow-lg md:w-64 w-46">
        <div>
          <div className="h-5 w-20 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-700 rounded"></div>
        </div>
        <div className="h-6 w-14 bg-gray-700 rounded"></div>
      </div>
    );
  }

  const quan = stock.transactions[0]?.quantity || 0;
  const price = quan > 0 ? stock.price : stock.currentPrice;

  return (
    <Link
      href={`/stockdetail/${stock.id}`}
      className="flex justify-between bg-gray-900 border border-gray-800 rounded-md md:px-4 px-2 py-4 shadow-lg md:w-64 w-46 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-400 tracking-wide">
            {stock.symbol}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-1 max-w-xs">
            {stock.name}
          </p>
        </div>
      </div>

      <div className="text-xl text-white">
        ${price?.toFixed(2)}
      </div>
    </Link>
  );
}
