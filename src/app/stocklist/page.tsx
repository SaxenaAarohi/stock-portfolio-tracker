import Displaystock from "@/Components/Displaystock";
import Temporary from "@/Components/Temporary";
import prismaclient from "@/services/prisma";

//@ts-nocheck
export default async function Stocks() {

    const stocks = await prismaclient.stock.findMany();

   
return (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold text-gray*2800 mb-8 text-center">
      📈 Market Overview
    </h1>

    <div className="flex flex-wrap gap-2 justify-center">
      {stocks.map((stock) => (
        <Displaystock key={stock.id} stock={stock} />
      ))}
    </div>
  </div>
);
}

