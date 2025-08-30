//@ts-nocheck
"use client"
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function ProductForm({ stock }) {
    const [name, setName] = useState(stock?.name || '');
    const [exchange, setExchange] = useState(stock?.exchange || '');
    const [quantity, setQuantity] = useState(0);
    const currentPrice = stock?.currentPrice || 0;
    const [total, setTotal] = useState(0);
    const [transactionType, setTransactionType] = useState('buy');
    const title = "Transcation";
    const des = "Record your trades, track your gains.";

    useEffect(() => {
        setTotal(quantity * currentPrice);
    }, [quantity]);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (quantity > 0) {
            const response = await fetch('/api/transcation', {
                method: 'POST',
                body: JSON.stringify({
                    quantity: parseInt(quantity),
                    price: parseFloat(currentPrice),
                    type: transactionType.toUpperCase(),
                    stockId: stock.id,
                    total: parseFloat(total),
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
                            onChange={(e) => setTransactionType(e.target.value)}
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
