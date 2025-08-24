export default function Sidebar() {
    return (
        <div className="w-[20%]" >

            <div className="bg-gray-900/40 rounded-lg px-4 py-2 border border-gray-800">
                <h1>PORTFOLIO</h1>
                <p className="text-4xl py-3 ">$ 428,494</p>

                <hr className="text-gray-600"></hr>

                <div className="text-gray-400 flex gap-5 pt-5">

                    <div>
                        <h3>Invested</h3>
                        <p>$746,728</p>
                    </div>

                    <div>
                        <h3>Invested</h3>
                        <p>$746,728</p>
                    </div>

                    <div className="bg-green-400/30 rounded-full px-2 text-green-500 pr-1 mt-6">
                        <p>76%</p>
                    </div>

                </div>
            </div>

            <div className=" bg-gray-900/40 rounded-lg px-4 py-2 my-2 border border-gray-800">

                <p>Day before yesterday</p>

                <p>Yesterday</p>

                <p>Today</p>

            </div>

            <div className=" bg-gray-900/40 rounded-lg px-4 py-2 border border-gray-800 ">

                <h2>WatchList</h2>

                <div className="flex flex-col mt-3 space-y-2 ">

                    <div className="flex text-gray-500 ">
                        <div className="  text-center flex-1">Company</div>
                        <div className=" text-center flex-1">Share Price</div>
                        <div className="  text-center flex-1">Valuation</div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="  text-center flex-1">Apple</div>
                        <div className="  text-center flex-1">$47</div>
                        <div className="  text-center flex-1">45%</div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="  text-center flex-1">Apple</div>
                        <div className="  text-center flex-1">$47</div>
                        <div className="  text-center flex-1">45%</div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="  text-center flex-1">Apple</div>
                        <div className="  text-center flex-1">$47</div>
                        <div className="  text-center flex-1">45%</div>
                    </div>
                </div>

            </div>

        </div>
    )
}