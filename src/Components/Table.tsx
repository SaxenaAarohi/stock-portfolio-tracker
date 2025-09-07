
'use client';

import { useEffect, useState } from "react";

type typeofHoldings = {
  quantity : number,
  price : number,
  stock : {
    symbol : string,
    name : string,
    price : number
  }
}

const guestHoldings : typeofHoldings[] = [
  { stock: { symbol: "AAPL", name: "Apple Inc.", price: 180 }, quantity: 20, price: 150 },
  { stock: { symbol: "MSFT", name: "Microsoft Coperation", price: 250 }, quantity: 10, price: 220 },
  { stock: { symbol: "AMZN", name: "Amazon.com Inc.", price: 140 }, quantity: 15, price: 130 },
  { stock: { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800 }, quantity: 5, price: 2600 },
  { stock: { symbol: "TSLA", name: "Tesla Inc.", price: 800 }, quantity: 8, price: 700 },
  { stock: { symbol: "NFLX", name: "Netflix Inc.", price: 400 }, quantity: 12, price: 350 },
  
];

const HoldingsTable = ({ isguest } : {isguest : boolean}) => {
  const [holdings, setHoldings] = useState<typeofHoldings[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (isguest) {
      setHoldings(guestHoldings);
    } else {
      async function getholdingsdata() {
        const res = await fetch("/api/transcation");
        const data = await res.json();
        setHoldings(data.data);
      }
      getholdingsdata();
    }
  }, [isguest]);


  const totalPages = Math.ceil(holdings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHoldings = holdings.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mr-4 w-[90%] md:w-full mt-1">
      <table className="bg-gray-900/40 border rounded shadow">
        <thead>
          <tr className="bg-gray-800 text-gray-200 text-sm font-semibold text-left">
            <th className="py-3 md:px-8 px-3">Ticker</th>
            <th className="py-3 md:px-8 px-3">Company</th>
            <th className="py-3 md:px-8 px-3">Shares</th>
            <th className="py-3 md:px-8 px-3">Avg Buy Price ($)</th>
            <th className="py-3 md:px-8 px-3">Current Price ($)</th>
            <th className="py-3 md:px-8 px-3">Total Value ($)</th>
            <th className="py-3 md:px-8 px-3">Gain/Loss ($)</th>
          </tr>
        </thead>
        <tbody>
          {currentHoldings.map((stock, index) => {
            const totalValue = stock.quantity * stock.stock.price;
            const totalCost = stock.quantity * stock.price;
            const gainLoss = totalValue - totalCost;

            return (
              <tr
                key={index}
                className="border-t text-sm text-gray-200 hover:bg-gray-500"
              >
                <td className="py-3 md:px-8 px-3 font-medium">{stock.stock.symbol}</td>
                <td className="py-3 md:px-8 px-3">{stock.stock.name}</td>
                <td className="py-3 md:px-8 px-3">{stock.quantity}</td>
                <td className="py-3 md:px-8 px-3">${stock.price.toFixed(2)}</td>
                <td className="py-3 md:px-8 px-3">${stock.stock.price.toFixed(2)}</td>
                <td className="py-3 md:px-8 px-3">${totalValue.toFixed(2)}</td>
                <td className={`py-3 px-4 font-semibold ${gainLoss >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {gainLoss >= 0 ? '+' : ''}${gainLoss.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HoldingsTable;
