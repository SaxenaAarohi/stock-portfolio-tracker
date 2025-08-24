import Link from "next/link";

type Stock = {
  id : string
  symbol: string;
  name: string;
  exchange: string;
  currentPrice: number;
};

export default function Displaystock({ stock }: { stock: Stock }) {
 return (
    <Link href={`http://localhost:3000/stockdetail/${stock.id}`} className="w-full sm:w-[300px] bg-g*ray-700/30 border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-300">{stock.symbol}</h2>
          <p className="text-sm text-gray-200">{stock.name}</p>
        </div>
        <span className="text-xs bg-blue-200 text-blue-800 font-medium px-2 py-1 rounded">
          {stock.exchange}
        </span>
      </div>
      <div className="text-2xl font-bold text-green-600">
        ${stock.currentPrice.toFixed(2)}
      </div>
    </Link>
  );
}
