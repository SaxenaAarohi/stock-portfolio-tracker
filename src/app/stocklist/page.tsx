import Displaystock from "@/Components/Displaystock";
import Navbar from "@/Components/Navbar";
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
  const des = "Browse and explore currently open stocks ."
  
  return (
    <div className="h-screen flex flex-col">
     
      <div>
        <Navbar title={title} line={des}/>
      </div>

      <div className=" h-screen ml-0 overflow-y-auto scrollbar-hide ">

        <div className="flex flex-wrap  mt-3  gap-2 md:gap-3  ">
          {stocks.map((stock) => (
            <Displaystock key={stock.id} stock={stock} />
          ))}
        </div>

      </div>

    </div>

  );
}

