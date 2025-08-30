import Navbar from '@/Components/Navbar';
import { news } from '../../constants/News';
export default function News() {

  
    const title = "Market News";
    const des = "Browse and explore current news of market. "

  return (

   <div className="h-screen flex flex-col">

 
             <div>
                 <Navbar title={title} line={des} />
             </div>
 

     <div className="mt-24  md:mr-5 mr-2 h-screen overflow-y-auto scrollbar-hide">
  <div className="space-y-6 "> {/* Optional: outer padding if needed */}
    {news.map((item, index) => (
      <div
        key={index}
        className="bg-gray-900/40 shadow-md rounded-sm border border-gray-700 flex items-center gap-6 p-4"
      >
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            className="w-28 h-20   object-cover rounded-sm"
          />
        )}

        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-200 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-400 line-clamp-2">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>

  );
}