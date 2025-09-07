'use client';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

type data = {
  name  : string,
  value: number
}
type Stock = {
  symbol: string;
  name: string;
  price: number;
};

type Holding = {
  stock: Stock;
  quantity: number;
  price: number;
};


const COLORS = [
  '#3b82f6', 
  '#10b981', 
  '#f59e0b', 
  '#ef4444', 
  '#8b5cf6', 
  '#ec4899', 
  '#14b8a6', 
  '#f43f5e', 
  '#22c55e', 
  '#eab308',
];


const staticHoldings : data[] = [
  { name: "AAPL", value: 700 },
  { name: "MSFT", value: 900 },
  { name: "AMZN", value: 600 },
  { name: "GOOGL", value: 500 },

];

export default function HoldingsBarChart({ isguest } : {isguest : boolean}) {
  const [holdings, setHoldings] = useState<data[]>([]);

  useEffect(() => {
    if (isguest) {
      setHoldings(staticHoldings);
    } else {
      async function getholdingsdata() {
        const res = await fetch("/api/transcation");
        const data = await res.json();
        setHoldings(
         ( data.data as Holding[]).map((stock) => ({
            name: stock?.stock?.symbol,
            value: stock.quantity * stock.stock.price,
          }))
        );
      }
      getholdingsdata();
    }
  }, [isguest]);

  return (
    <div className="w-[380px] md:w-full focus:outline-none max-w-2xl -ml-8 text-white p-4 rounded-lg shadow">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={holdings}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Bar dataKey="value" barSize={60}>
            {holdings.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
