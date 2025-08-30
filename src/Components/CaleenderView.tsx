'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const holdings = [
  { ticker: 'AAPL', shares: 10, currentPrice: 175 },
  { ticker: 'TSLA', shares: 5, currentPrice: 720 },
  { ticker: 'GOOGL', shares: 3, currentPrice: 2900 },
  { ticker: 'MSFT', shares: 8, currentPrice: 330 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']; // Tailwind blue/green/yellow/red

const data = holdings.map((stock) => ({
  name: stock.ticker,
  value: stock.shares * stock.currentPrice,
}));

export default function HoldingsBarChart() {
  return (
    <div className="w-[380px] md:w-full focus:outline-none max-w-2xl -ml-8  text-white p-4 rounded-lg shadow">

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Bar dataKey="value" barSize={60}  >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
