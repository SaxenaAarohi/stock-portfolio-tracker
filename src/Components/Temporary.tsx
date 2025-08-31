"use client"
import Link from "next/link";
type Data = {
  id : string,
  price : number,
  quantity : number,
  total : number,
  stock : {
    id : string,
    name : string,
    price : number | null,
    exchange: string; 
    currentPrice: number
  }

}

export default function Temporary({ data }: {data : Data}) {

  const buyprice = Number(data.price.toFixed(2));
  const quantity = data.quantity;
  const total = data.total.toFixed(2);
  const currprice = data?.stock?.price || 0;

  const profit = ((((currprice * quantity) - buyprice) / buyprice) * 100).toFixed(2);
  const profitNum = parseFloat(profit);

  return (
   <Link
  href={`stockdetail/${data.stock.id}`}
  className="flex items-center justify-between py-2 bg-gray-900/40 border border-gray-800 rounded-sm px-2 shadow-lg md:w-60 w-40 overflow-hidden"
>
  <div className="flex items-center space-x-2 p-1 overflow-hidden">
    <div className="overflow-hidden">
      <h2 className="text-lg font-semibold truncate max-w-[120px] text-white">
        {data.stock.name}
      </h2>
      <p
        title="Current Price"
        className="font-medium text-sm text-gray-500"
      >
        ${currprice}
      </p>
    </div>
  </div>

  <div className="text-right">
    <p title="Invested amount" className="text-xl font-bold text-white">
      ${total}
    </p>
    <p
      title="Profit"
      className={`font-medium text-sm ${
        profitNum > 0 ? 'text-green-500' : 'text-red-500'
      }`}
    >
      ({profit}%)
    </p>
  </div>
</Link>

  );
}