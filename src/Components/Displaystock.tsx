
import Link from "next/link";

type Stock = {
  id : string
  symbol: string;
  name: string;
  price: number | null;
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
  className="flex  justify-between bg-gray-900 border border-gray-800 rounded-md md:px-4 px-1 py-4 shadow-lg md:w-64 w-46 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-400 tracking-wide">{stock.symbol}</h2>
          <p className="text-sm text-gray-500 line-clamp-1 max-w-xs">{stock.name}</p>
        </div>
      </div>

        <div className="text-xl  text-white">
          ${price?.toFixed(2)}
      

      </div>
    </Link>
  );
}
