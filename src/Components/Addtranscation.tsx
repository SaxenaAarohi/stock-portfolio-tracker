"use client"
import { useState, useEffect, ChangeEvent, ChangeEventHandler } from 'react';
import Navbar from './Navbar';
import { promises } from 'dns';

type Stock = {
    id : string
    name : string,
    exchange : string,
    currentPrice : number,
} | null

export default function ProductForm({ stock } : {stock : Stock}) {

if(!stock){
    return <p>Loading...</p>
}

    const [name, setName] = useState<string>(stock?.name || '');
    const [exchange, setExchange] = useState<string>(stock?.exchange || '');
    const [quantity, setQuantity] = useState<number>(0);
    const currentPrice = stock?.currentPrice || 0;
    const [total, setTotal] = useState<number>(0);
    const [transactionType, setTransactionType] = useState<'buy' | 'sell'>('buy');

    const title = "Transcation";
    const des = "Record your trades, track your gains.";

    useEffect(() => {
        setTotal(quantity * currentPrice);
    }, [quantity]);

    const handleQuantityChange = (e:any) : void=> {
        setQuantity(e.target.value);
    };
 
    const handleSubmit = async (e:any ) :Promise<void> => {
        e.preventDefault();
        if (quantity > 0) {
            const response = await fetch('/api/transcation', {
                method: 'POST',
                body: JSON.stringify({
                    quantity,
                    price: currentPrice,
                    type: transactionType.toUpperCase(),
                    stockId: stock.id,
                    total: total,
                    createdAt: new Date(),
                }),

            });
            const res = await response.json();
            if (res.success) {
                alert('Transaction added successfully!');
                setName('');
                setExchange('');
                setQuantity(0);
                setTotal(0);
                setTransactionType('buy');
            } else {
                alert('Failed to add transaction.');
            }
        }
        else {
            alert("Quantity should be g*reater than 0")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen ">
            
            <Navbar title={title} line={des}/>

                <form onSubmit={handleSubmit} className="space-y-6 w-full" >

                    <div className='flex gap-80'>

                        <div>
                            <label htmlFor="name" className=" text-sm font-medium  text-gray-200">Name</label>
                            <input
                                type="text"
                                id="name"
                                defaultValue={name}
                                className="w-full  border border-gray-300 mt-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="exchange" className=" text-sm font-medium text-gray-200">Exchange</label>
                            <input
                                type="text"
                                id="exchange"
                                defaultValue={exchange}
                                className="w-full  p-1 border  mt-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                    </div>


                    <div className='flex gap-74'>
                       
                        <div>
                            <label htmlFor="quantity" className="text-sm font-medium text-gray-200">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-full p-1 border  mt-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="currentPrice" className=" text-sm font-medium text-gray-200">Current Price ($)</label>
                            <input
                                type="number"
                                id="currentPrice"
                                defaultValue={currentPrice}
                                className="w-full p-1  border  mt-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                    </div>

                    <div>
                        <label htmlFor="transactionType" className=" text-sm font-medium text-gray-200">Transaction Type</label>
                        <select
                            id="transactionType"
                            value={transactionType}
                            onChange={(e : ChangeEvent<HTMLSelectElement>) => setTransactionType(e.target.value as "buy" | "sell")}
                            className="w-full p-1  mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-200">Total : ${total}</h3>
                    </div>

                    <button
                        type="submit"
                        className="w-[60%] py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
                    >
                        Buy
                    </button>
                </form>
           
        </div>
    );
}
