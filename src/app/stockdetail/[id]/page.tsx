import Candlechart from "@/Components/Candlechart";
import StockGreedGauge from "@/Components/Greed";
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


                <div className=" flex justify-between md:ml-0 ml-6 items-center md:w-[1000px] w-[380px]  ">

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

                <main className="flex-1 md:-ml-4 ml-4  text-white bg-gray-70">

                    <section className="-mt-2 md:w-[1000px]  md-mr-0 md:mr-16 rounded shadow">

                        <Candlechart data={data.data}  />

                    </section>

                    <section className="flex md:flex-row flex-col justify-between w-[380px] md:w-[1000px] gap-4">

                        <div className="bg-gray-900/40 border h-42 border-gray-700/30 ml-5 px-2 py-1 w-[360px] md:w-[800px] rounded shadow">

                            <h3 className="font-semibold mb-4">Analyst Ratings</h3>

                            <div className="space-y-3">

                                <div className="flex items-center px-2 justify-between">
                                    <span>Buy</span>
                                    <div className="w-2/3 bg-green-100 rounded">
                                        <div className="bg-green-500 h-2 rounded" style={{ width: '70%' }}></div>
                                    </div>
                                    <span>{buy}%</span>
                                </div>

                                <div className="flex items-center px-2 justify-between">
                                    <span>Hold</span>
                                    <div className="w-2/3 bg-yellow-100 rounded">
                                        <div className="bg-yellow-500 h-2 rounded" style={{ width: '20%' }}></div>
                                    </div>
                                    <span>{hold}%</span>
                                </div>

                                <div className="flex items-center px-2 justify-between">
                                    <span>Sell</span>
                                    <div className="w-2/3 bg-red-100 rounded">
                                        <div className="bg-red-500 h-2 rounded" style={{ width: '10%' }}></div>
                                    </div>
                                    <span>{sell}%</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900/40 md:ml-0 border h-42 ml-8 border-gray-700/30 px-2 py-1 w-[300px] rounded shadow">

                            <h3 className="font-semibold mb-1">Greed index</h3>
                            <StockGreedGauge value={value} />

                        </div>

                    </section>
                </main>
            </div>
        </div>

    )
}
