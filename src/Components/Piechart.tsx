"use client"
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

const staticData = [
  { name: 'AAPL', value: 3000 },
  { name: 'TSLA', value: 2000 },
  { name: 'MSFT', value: 1500 },
  { name: 'GOOGL', value: 1000 },
  { name: 'AMZN', value: 500 },
];

const StaticPieChart = () => {
  const total = staticData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="max-w-sm ml-4  ">
      <PieChart width={280} height={280}>
        <Pie
          data={staticData}
          cx="50%"
          cy="50%"
          outerRadius={90} 
        label={({ name, percent }) =>
  `${name}: ${percent != null ? (percent * 100).toFixed(1) : "0.0"}%`
}
          dataKey="value"
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
