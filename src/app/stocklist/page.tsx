import Displaystock from "@/Components/Displaystock";
import Navbar from "@/Components/Navbar";
import prismaclient from "@/services/prisma";

export default async function Stocks() {

  // const user = await getuserfromcookies();
  // if (!user) {
  //   redirect("/login")
  // }

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
        <Navbar title={title} line={des} />
      </div>

      <div className=" h-screen ml-0 overflow-y-auto   [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar]:w-[9px]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

        <div className="flex flex-wrap  mt-3  gap-2 md:gap-3  ">
          {stocks.map((stock) => (
            <Displaystock key={stock.id} stock={stock} />
          ))}
        </div>

      </div>

    </div>

  );
}

