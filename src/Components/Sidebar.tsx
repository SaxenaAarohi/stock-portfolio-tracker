"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChartLine, FaNewspaper, FaTachometerAlt, FaBars, FaTimes } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Sidebar() {

  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    toast("Logges Out Successfully");
    router.replace("/login");
    router.refresh();
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-0 z-50 text-white  p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        className={`flex flex-col justify-between fixed md:static top-12 left-0 h-screen w-56 md:bg-gray-900/40  bg-black border border-gray-800 text-white 
    transform transition-transform duration-300 z-40
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}
      >

        <nav className="space-y-6 ">
          <h2 className="text-2xl font-bold mb-6 px-4 py-6 md:py-4">EquiTrack</h2>

          <ul className="flex flex-col ">
            <li
              className={`rounded px-5 cursor-pointer py-2 ${isActive("/") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FaTachometerAlt />
                <p>Dashboard</p>
              </Link>
            </li>

            <li
              className={`rounded px-5 cursor-pointer py-2 ${isActive("/holdings") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/holdings" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FiPieChart />
                <p>Holdings</p>
              </Link>
            </li>

            <li
              className={`rounded px-5 cursor-pointer py-2 ${pathname.startsWith("/stocklist") || pathname.startsWith("/stockdetail")
                ? "bg-gray-700 font-semibold"
                : "hover:bg-gray-700"
                }`}
            >
              <Link href="/stocklist" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FaChartLine />
                <p>Available Stock</p>
              </Link>
            </li>

            <li
              className={`rounded px-5 cursor-pointer py-2 ${isActive("/news") ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                }`}
            >
              <Link href="/news" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
                <FaNewspaper />
                <p>News</p>
              </Link>
            </li>

          </ul>
        </nav>

        <div className="flex flex-col  ">
          <Link
            href="/login"
            className="bg-blue-600 mx-2 mt-120 md:mt-70 hover:bg-blue-700  text-center rounded p-2 font-semibold block"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>

          <button
            className="bg-red-600 mx-2 mt-4 hover:bg-red-700  text-center rounded p-2 font-semibold block"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
}
