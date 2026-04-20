import prismaclient from "@/services/prisma";
import Temporary from "./Temporary";

type Userwithall = {
    id: string,
    name : string,
    email : string,
    password : string
}

export default async function Other_Stocks({user} : {user : Userwithall | null}) {
 
  const Other_Stocks = await prismaclient.transaction.findMany({
    where : { userId : user?.id},
    include : { stock: true },
  })

  return (

      <div className="flex flex-wrap md:justify-start  justify-center gap-5 mt-4  ">
          {Other_Stocks.map((stock) => (
            <Temporary key={stock.id} data={stock}/>
          ))}
        </div>

  );
}