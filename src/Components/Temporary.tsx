import Link from "next/link";
export default function Temporary() {
  return (
    <Link href={"company/IBM"} className="flex items-center justify-between bg-gray-900 border border-gray-800  rounded-lgtext-white rounded-2xl p-4 shadow-lg w-80">

      <div className="flex items-center space-x-3">

        <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-pink-500 via-yellow-400 to-blue-500 flex items-center justify-center">
          <span className="font-bold text-white">A</span>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Airtable</h2>
          <p className="text-sm text-gray-400">157K shares</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold">$42,875.69</p>
        <p className="text-green-500 font-medium text-sm">
          +$4,890.78 (+15.97%)
        </p>
      </div>
    </Link>
  );
}