import prismaclient from "@/services/prisma";
import Temporary from "./Temporary";

export default async function Other_Stocks() {
 
  const Other_Stocks = await prismaclient.transaction.findMany({
    include : { stock: true },
  })

  return (
    <div className="   flex flex-wrap gap-4 py-4 mt-4">
    
      <div className="flex flex-wrap md:gap-2 gap-4 space-y-4">
          {Other_Stocks.map((stock) => (
            <Temporary key={stock.id} data={stock}/>
          ))}
        </div>

    </div>

  );
}