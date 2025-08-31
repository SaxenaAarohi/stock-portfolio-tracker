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

      <div className=" h-screen md:ml-0 -ml-1 overflow-y-auto scrollbar-hide ">

        <div className="flex flex-wrap md:mt-24 mt-24 gap-2  space-y-1">
          {stocks.map((stock) => (
            <Displaystock key={stock.id} stock={stock} />
          ))}
        </div>

      </div>

    </div>

  );
}

