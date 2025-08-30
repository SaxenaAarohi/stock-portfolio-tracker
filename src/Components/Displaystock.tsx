
import Link from "next/link";

type Stock = {
  id : string
  symbol: string;
  name: string;
  price: number;
  exchange: string;
  transactions: { quantity: number }[];
  currentPrice: number;
};

export default function Displaystock({ stock }: { stock: Stock }) {
  
  const quan = stock.transactions[0]?.quantity || 0;
  const price = quan > 0 ? stock.price : stock.currentPrice;



 return (
    <Link
      href={`/stockdetail/${stock.id}`}
  className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-md px-4 py-4 shadow-lg md:w-64 w-50 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide">{stock.symbol}</h2>
          <p className="text-sm text-gray-400 truncate max-w-xs">{stock.name}</p>
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <div className="text-xl  text-white">
          ${price.toFixed(2)}
        </div>

      </div>
    </Link>
  );
}
