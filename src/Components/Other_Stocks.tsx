import prismaclient from "@/services/prisma";
import Temporary from "./Temporary";

export default async function Other_Stocks() {
 
  const Other_Stocks = await prismaclient.transaction.findMany({
    include : { stock: true },
  })

  return (

      <div className="flex flex-wrap md:justify-start  justify-center md:gap-2 mt-4 gap-4 space-y-2">
          {Other_Stocks.map((stock) => (
            <Temporary key={stock.id} data={stock}/>
          ))}
        </div>

  );
}