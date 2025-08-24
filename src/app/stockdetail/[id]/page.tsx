//@ts-nocheck
import Candlechart from "@/Components/Candlechart";
import prismaclient from "@/services/prisma";

export default async function Detail({ params }) {
    const id = params.id;

    const res = await fetch("http://localhost:3000/api/stocks/" + id);
    const data = await res.json();
    const stockdetail = await prismaclient.stock.findUnique({
        where: {
            id: id
        }
    });

    return (
        <div className="min-h-[80%] text-gray-200 font-sans flex flex-col items-center py-8 px-6">
            <div className="w-full max-w-5xl bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl p-8">

                <header className="mb-10 border-b border-gray-700 pb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-wide">{stockdetail?.name}</h1>
                        <p className="text-gray-400 text-sm uppercase mt-1 font-mono">{stockdetail.exchange}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                        <p className="text-5xl font-black text-green-400 tracking-tight">${stockdetail.currentPrice}</p>
                        <p className="text-gray-500 text-xs mt-1 uppercase">Current Price</p>
                    </div>
                </header>

                <section className="bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-inner p-4" >
                    <Candlechart data={data.data} />
                </section>
                <div className="flex justify-end mt-6">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                       
                    >
                        Add Transaction
                    </button>
                </div>
            </div>


        </div>
    )
}
