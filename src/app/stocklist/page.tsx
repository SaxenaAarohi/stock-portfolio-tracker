import Displaystock from "@/Components/Displaystock";
import Navbar from "@/Components/Navbar";
import Temporary from "@/Components/Temporary";
import prismaclient from "@/services/prisma";

export default async function Stocks() {

  const stocks = await prismaclient.stock.findMany(
    {
      include: {
        transactions: {
          select: {
            quantity: true,
          }
        }
      },

    });

  const title = "Available Stocks";
  const des = "Browse and explore stocks currently open for investment."
  
  return (
    <div className="h-screen flex flex-col">
     
      <div>
        <Navbar title={title} line={des}/>
      </div>

      <div className=" h-screen mt-24 overflow-y-auto scrollbar-hide ">

        <div className="flex flex-wrap md:gap-2 md:ml-0 gap-1 ml-1 space-y-4 ">
          {stocks.map((stock) => (
            <Displaystock key={stock.id} stock={stock} />
          ))}
        </div>

      </div>

    </div>

  );
}

