//@ts-nocheck
"use client"
import Papa from "papaparse";
import { useEffect, useState } from "react";

type Stock = {
    symbol: string;
    description: string;
};

export default function AllStocks() {

    const [stocks, setStocks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchStockList() {
            const url = "https://financialmodelingprep.com/api/v3/stock/list?apikey=vaFvUte11U0KoyGwcmFEzoksMfwIWdyY";
            const response = await fetch(url);

            const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
            setStocks(parsed.data);
        }

        fetchStockList();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">All US Stocks</h1>
            <ul className="space-y-2 max-h-96 text-red-600 overflow-y-scroll">
                {stocks.map((stock) => (
                    <li key={stock.symbol} className="p-2 bg-gray-100 rounded-md">
                       
                    </li>
                ))}
            </ul>
        </div>
    );
}
