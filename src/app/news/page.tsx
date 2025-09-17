"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import { news } from "../../constants/News";
import Image from "next/image";

export default function News() {
  const title = "Market News";
  const des = "Browse and explore current news of market. ";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col">

      <div>
        <Navbar title={title} line={des} />
      </div>

        <div className="space-y-3 mt-3 md:mr-5 mr-2 md:ml-0 ml-2 h-screen overflow-y-auto scrollbar-hide">
          
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-900/40 shadow-md rounded-sm border border-gray-700 flex items-center gap-6 p-4"
                >
                  <div className="w-28 h-20 bg-gray-700 rounded-sm" />
                  <div className="flex flex-col space-y-2">
                    <div className="h-5 w-40 bg-gray-700 rounded" />
                    <div className="h-4 w-60 bg-gray-700 rounded" />
                  </div>
                </div>
              ))
            : news.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/40 shadow-md rounded-sm border border-gray-700 flex items-center gap-6 p-4"
                >
                  {item.imageUrl && (
                    <Image
                      alt={item.title}
                      src={item.imageUrl}
                      width={112}
                      height={80}
                      className="object-cover  rounded-sm"
                    />
                    
                  )}

                  <div className="flex flex-col justify-center">
                   
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 line-clamp-2">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

        </div>
      
    </div>
  );
}
