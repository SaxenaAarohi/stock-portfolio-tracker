"use client";

import { useEffect, useState } from "react";

type transcation = {
    total: number;
    quantity: number;
    stock: {
        price: number;
    };
};

export default function Summary() {
    const [investedamount, setInvestedamount] = useState<number | null>(null);
    const [currentamount, setCurrentamount] = useState<number | null>(null);
    const [day1return, setDay1Return] = useState<number>(3.5);
    const [day2return, setDay2Return] = useState<number>(-2.4);
    const [day3return, setDay3Return] = useState<number>(12.54);
    
    const [loading, setLoading] = useState(true);

    function Arrow({ value }: { value: number }) {
        if (value > 0) {
            return <span className="text-green-600 ml-2">▲</span>;
        } else {
            return <span className="text-red-600 ml-1">▼</span>;
        }
    }

    useEffect(() => {
        async function getdata() {
            try {
                const data = await fetch("https://stock-portfolio-tracker-navy.vercel.app/api/transcation");
                const res = await data.json();
                const trans = res.data;

                const totalInvested = trans.reduce((acc: number, tx: transcation) => {
                    return acc + tx.total;
                }, 0);
                setInvestedamount(totalInvested);

                const totalCurrent = trans.reduce(
                    (acc: number, tx: transcation) => acc + tx.quantity * tx.stock.price,
                    0
                );
                setCurrentamount(totalCurrent);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        setDay1Return(parseFloat((Math.random() * 40 - 20).toFixed(2)));
        setDay2Return(parseFloat((Math.random() * 40 - 20).toFixed(2)));
        setDay3Return(parseFloat((Math.random() * 40 - 20).toFixed(2)));

        getdata();
    }, []);

    const profit =
        investedamount !== null && currentamount !== null
            ? Number((currentamount - investedamount).toFixed(2))
            : 0;
    const profitpercent =
        investedamount && investedamount > 0
            ? Number(((profit / investedamount) * 100).toFixed(2))
            : 0;

    if (loading) {
       
        return (
            <div className="bg-gray-900/40 rounded-sm px-4 py-4 border mr-2 border-gray-800 animate-pulse">
                <div className="h-6 w-20 bg-gray-700 rounded mb-4"></div>
                <div className="h-10 w-32 bg-gray-700 rounded mb-6"></div>
                <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-gray-900/40 rounded-sm px-4 py-4 border mr-2 border-gray-800">
                <h4 className="text-xs">PORTFOLIO</h4>
                <p className="text-4xl py-3 ">$ {profit}</p>

                <hr className="text-gray-600" />

                <div className="text-gray-400 flex gap-5 pt-5 pb-3">
                    <div>
                        <h3>Invested</h3>
                        <p className="text-white">${investedamount?.toFixed(2)}</p>
                    </div>

                    <div>
                        <h3>Current</h3>
                        <p className="text-white">${currentamount?.toFixed(2)}</p>
                    </div>

                    <div
                        className={`${profit > 0
                                ? "bg-green-400/30 text-green-200"
                                : "bg-red-400/30 text-red-500"
                            } rounded-full px-2  pr-1 mt-6`}
                    >
                        <p>{profitpercent}%</p>
                    </div>
                </div>

                <hr className="text-gray-600" />

                <h4 className="pb-2 pt-3 text-xs">RETURN</h4>

                <p className="flex justify-between">
                    <span className="w-28 font-medium">2 days ago</span>
                    <span
                        className={`${day1return > 0 ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {day1return.toFixed(2)} <Arrow value={day1return} />
                    </span>
                </p>

                <p className="flex justify-between">
                    <span className="w-28 font-medium">Yesterday</span>
                    <span
                        className={`${day2return > 0 ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {day2return.toFixed(2)} <Arrow value={day2return} />
                    </span>
                </p>

                <p className="flex justify-between">
                    <span className="w-28 font-medium">Today</span>
                    <span
                        className={`${day3return > 0 ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {day3return.toFixed(2)} <Arrow value={day3return} />
                    </span>
                </p>
            </div>
        </div>
    );
}
