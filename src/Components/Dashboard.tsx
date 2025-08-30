import Chart_Section from "./Chart_Section";
import Navbar from "./Navbar";
import Other_Stocks from "./Other_Stocks";
import Summary from "./Summary";

export default function Dashboard() {

    const title = "Dashboard";
    const des = "Track your portfolio value,stock and more "

    return (

        <div className="h-screen flex flex-col">

            <div>
                <Navbar title={title} line={des} />
            </div>


            <div className="flex mt-24 overflow-y-auto md:ml-0 ml-5 md:mr-0 mr-5  scrollbar-hide">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                        <Chart_Section />
                        <Summary />
                    </div>

                    <Other_Stocks />
                </div>
            </div>


        </div>
    );
}