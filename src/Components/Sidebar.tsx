"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChartLine, FaNewspaper, FaTachometerAlt, FaBars, FaTimes } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-0 z-50 text-white  p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        className={`fixed md:static top-12 left-0 h-full md:h-[600px] w-56 md:bg-gray-900/40  bg-black border border-gray-800 text-white 
    transform transition-transform duration-300 z-40
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:my-4`}
      >

        <nav className="space-y-6 ">
          <h2 className="text-2xl font-bold mb-6 px-4 py-6 md:py-4">EquiTrack</h2>

          <ul className="flex flex-col mx-3">
            <li
              className={`rounded px-5 cursor-pointer py-3 ${isActive("/") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FaTachometerAlt />
                <p>Dashboard</p>
              </Link>
            </li>

            <li
              className={`rounded px-5 cursor-pointer py-3 ${isActive("/holdings") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/holdings" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FiPieChart />
                <p>Holdings</p>
              </Link>
            </li>

            <li
              className={`rounded px-5 cursor-pointer py-3 ${isActive("/stocklist") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/stocklist" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FaChartLine />
                <p>Available Stock</p>
              </Link>
            </li>

            <li
              className={`rounded px-5 cursor-pointer py-3 ${isActive("/news") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/news" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FaNewspaper />
                <p>News</p>
              </Link>
            </li>

            <li className={`rounded px-5 cursor-pointer py-3 hover:bg-gray-700`}>
              <div className="flex gap-2 items-center">
                <FaChartLine />
                <p>About</p>
              </div>
            </li>
          </ul>
        </nav>

        <Link
          href="/login"
          className="bg-blue-600 mx-2 hover:bg-blue-700 md:mt-50 text-center rounded p-2 font-semibold block"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      </div>
    </>
  );
}
