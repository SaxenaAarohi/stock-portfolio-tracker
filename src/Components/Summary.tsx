"use client"
import { useEffect, useState } from "react";

type transcation = {
    total : number,
   quantity : number,
    stock : {
        price : number
    }
}

export default function Summary() {
    const [investedamount, setInvestedamount] = useState(0);
    const [currentamount, setCurrentamount] = useState(0);
    const [day1return, setDay1Return] = useState<number>(3.5);
    const [day2return, setDay2Return] = useState<number>(-2.4);
    const [day3return, setDay3Return] = useState<number>(12.54);

    function Arrow({ value }: {value : number}) {
        if (value > 0) {
            return <span className="text-green-600 ml-2">▲</span>;
        } else {
            return <span className="text-red-600 ml-1">▼</span>;
        }
    }

    useEffect(() => {
        async function getdata() {

            const data  = await fetch('http://localhost:3000/api/transcation');
            const res  = await data.json();
            const trans  = res.data;
            const totalInvested = trans.reduce((acc : number, tx: transcation) => {
                return (acc + tx.total);
            }, 0);
            setInvestedamount(totalInvested.toFixed(2));

            const totalCurrent = trans.reduce((acc : number, tx :transcation )  => {
                return acc + (tx.quantity * tx.stock.price);
            }
                , 0);
            setCurrentamount(totalCurrent.toFixed(2));
        }
        setDay1Return(parseFloat((Math.random() * 40 - 20).toFixed(2)));
        setDay2Return(parseFloat((Math.random() * 40 - 20).toFixed(2)));
        setDay3Return(parseFloat((Math.random() * 40 - 20).toFixed(2)));
        getdata();
    }, []);

    const profit = Number((currentamount - investedamount).toFixed(2));
    const profitpercent  = Number(((profit / investedamount) * 100).toFixed(2));

    return (
        <div >
            <div className="bg-gray-900/40 rounded-sm px-4 py-4 border mr-2 border-gray-800">
                <h4 className="text-xs">PORTFOLIO</h4>
                <p className="text-4xl py-3 ">$ {profit}</p>

                <hr className="text-gray-600"></hr>

                <div className="text-gray-400 flex gap-5 pt-5 pb-3">

                    <div>
                        <h3>Invested</h3>
                        <p className="text-white">${investedamount}</p>
                    </div>

                    <div>
                        <h3>Current</h3>
                        <p  className="text-white">${currentamount}</p>
                    </div>

                    <div className={`${profit > 0 ? 'bg-green-400/30 text-green-200' : 'bg-red-400/30 text-red-500'} rounded-full px-2  pr-1 mt-6`}>
                        <p>{profitpercent}%</p>
                    </div>
                </div>

                <hr className="text-gray-600"></hr>

                <h4 className="pb-2 pt-3 text-xs">RETURN</h4>

                <p className=" flex justify-between">
                    <span className="w-28 font-medium">2 days ago</span>
                    <span className={`${day1return > 0 ? 'text-green-600' : 'text-red-600'}`} >
                        {day1return.toFixed(2)} <Arrow value={day1return} />
                    </span>
                </p>

                <p className=" flex justify-between">
                    <span className="w-28 font-medium">Yesterday</span>
                    <span className={`${day2return > 0 ? 'text-green-600' : 'text-red-600'}`} >
                        {day2return.toFixed(2)} <Arrow value={day2return} />
                    </span>
                </p>

                <p className=" flex justify-between">
                    <span className="w-28 font-medium">Today</span>
                    <span className={`${day3return > 0 ? 'text-green-600' : 'text-red-600'}`} >
                        {day3return.toFixed(2)} <Arrow value={day3return} />
                    </span>
                </p>

            </div>

        </div>

    )
}