import prismaclient from "@/services/prisma";
import Temporary from "./Temporary";

export default async function Static_Stockslist() {
 
  const Stocks = await prismaclient.transaction.findMany({
    include : { stock: true },
    take: 8,
  })

  return (

      <div className="flex flex-wrap md:justify-start  justify-center gap-4 mt-4  ">
          {Stocks.map((stock) => (
            <Temporary key={stock.id} data={stock}/>
          ))}
        </div>

  );
}