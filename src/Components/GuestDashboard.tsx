import Chart_Section from "./Chart_Section";
import Navbar from "./Navbar";
import Static_Stockslist from "./Static_Stocklist";
import Summary from "./Summary";

export default function GuestDashboard() {
   const title = "Guest Dashboard";
      const des = "Login to track your portfolio value, stock and more";
  
      return (
        <div className="h-screen flex flex-col">
          <div>
            <Navbar title={title} line={des} />
          </div>
  
          <div className="flex flex-col mt-6 overflow-y-auto scrollbar-hide w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <Chart_Section />
              <Summary/>
            </div>
            <Static_Stockslist  /> 
          </div>
        </div>
      );
}
