"use client"
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

type dataofpie = {
  stock : {
    symbol : string
  },
  total : number
}

const COLORS = [
  '#3b82f6',  '#10b981',   '#f59e0b',   '#ef4444', '#8b5cf6', 
  '#ec4899',  '#14b8a6',  '#f43f5e',  '#22c55e',  '#eab308', 
];

const guestHoldings : dataofpie[] = [
  { stock: { symbol: "AAPL" }, total: 5000 },
  { stock: { symbol: "MSFT" }, total: 3000 },
  { stock: { symbol: "AMZN" }, total: 2000 },
  { stock: { symbol: "GOOGL" }, total: 4000 },
];


const StaticPieChart = ({isguest} : {isguest : boolean}) => {


  const [staticData, setData] = useState<dataofpie[]>([]);

   useEffect(() => {

    if (isguest) {
      setData(guestHoldings);
    } else {
      async function getHoldingsData() {
        const res = await fetch("/api/transcation");
        const result = await res.json();
        setData(result.data);
      }
      getHoldingsData();
    }
  }, [isguest]);

  const total = staticData.reduce((sum, item) => sum + item?.total, 0);

  return (
    <div className="max-w-sm  ">
      <PieChart width={420} height={280}>
        <Pie
          data={staticData}
          cx="50%"
          cy="50%"
          nameKey="stock.symbol"
          outerRadius={90}
          label={({ name, percent }) =>
            `${name}: ${percent != null ? (percent * 100).toFixed(1) : "0.0"}%`
          }
          dataKey="total"
        >
          {staticData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(val) => `$${val.toLocaleString()}`} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>

      <p className="mt-5 text-center font-semibold text-gray-300 text-sm">
        Total Value: ${total.toLocaleString()}
      </p>
    </div>
  );
};

export default StaticPieChart;
