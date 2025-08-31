import AnalystRatings from "@/Components/Analyst_rating";
import Candlechart from "@/Components/Candlechart";
import Navbar from "@/Components/Navbar";
import prismaclient from "@/services/prisma";
import Link from "next/link";

function generateRandomPercentages() {
    const buy = Math.floor(Math.random() * 70) + 10;
    const hold = Math.floor(Math.random() * (100 - buy));
    const sell = 100 - buy - hold;
    return { buy, hold, sell };
}

type Stock = {
    id : string
    name : string,
    exchange : string,
    symbol:string
    price : number | null,
    currentPrice : number,
} | null;

type StockDetail = (Stock 
) | null;

export default async function Detail({ params }: { params: { id: string } }) {
    const id = params.id;

    const res = await fetch("https://stock-portfolio-tracker-navy.vercel.app/api/stocks/" + id);
    const data = await res.json();
    const stockdetail :  StockDetail | null = await prismaclient.stock.findUnique({
        where: {
            id: id
        },
     
    });
      if(!stockdetail){
       return (
        <p>Loading.....</p>
       )
      }
    const { buy, hold, sell } = generateRandomPercentages();
    const value = Math.floor(Math.random() * 91) + 10;

    const title = "Available Stocks";
    const des = "Browse and explore currently open stocks"

    return (


        <div className="h-screen flex flex-col">

            <div>
                <Navbar title={title} line={des} />
            </div>

            <div className="mt-23 overflow-y-hide">


                <div className=" flex justify-between md:ml-0 ml-6 items-center md:w-[1000px] w-[90%]  ">

                    <div>

                        <h1 className="text-lg font-bold">
                            {stockdetail?.name}<span className="text-gray-500 text-lg">({stockdetail?.symbol})</span>
                        </h1>

                        <span className="text-xl">${stockdetail?.price}</span>
                        <span className="font-semibold text-green-600">▲ 1.50%</span>

                    </div>

                    <div>

                        <Link href={"/addtransaction/" + stockdetail?.id}
                            className=" bg-green-600 hover:bg-green-700 text-white font-semibold md:py-2 py-1 md:px-4 px-1 rounded" >
                            Add Transaction
                        </Link>

                    </div>

                </div>

                <main className="flex-1 md:-ml-4 ml-2  text-white bg-gray-70">

                    <section className="-mt-2 md:w-[1000px]  md-mr-0 md:mr-16 rounded shadow">

                        <Candlechart data={data.data}  />

                    </section>

                  <AnalystRatings buy={buy} sell={sell} hold={hold} value={value}/>
                  
                </main>
            </div>
        </div>

    )
}
