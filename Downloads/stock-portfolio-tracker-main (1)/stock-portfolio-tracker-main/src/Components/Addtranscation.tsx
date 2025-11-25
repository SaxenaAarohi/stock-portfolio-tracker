"use client"
import { useUser } from '@/Context/Usercontext';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

type Stock = {
    id: string
    name: string,
    exchange: string,
    symbol: string,
    price: number | null,
    currentPrice: number,
}

export default function ProductForm({ stock }: { stock: Stock | null }) {

    const { user } = useUser();

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
    }, [quantity, currentPrice]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuantity(Number(e.target.value));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (quantity > 0) {
            const response = await fetch('/api/transcation', {
                method: 'POST',
                body: JSON.stringify({
                    userId: user?.id,
                    quantity,
                    price: currentPrice,
                    type: transactionType.toUpperCase(),
                    stockId: stock?.id,
                    total: total,
                    createdAt: new Date(),
                }),

            });
            const res = await response.json();
            if (res.success) {
                toast(
                    <div className="text-white font-bold">
                        Transaction added successfully!
                    </div>,
                    {
                        icon: false,
                        closeButton: true,
                        className: "bg-gray-800/40 text-white shadow-lg rounded p-4",
                        progressClassName: "bg-white",
                    }
                );

                setName('');
                setExchange('');
                setQuantity(0);
                setTotal(0);
                setTransactionType('buy');
                redirect("/");
            } else {
                toast('Failed to add transaction.');
            }
        }
        else {
            toast("Quantity should be g*reater than 0")
        }
    }

    if (!stock) return <p>Loading...</p>;
    return (
        <div className=" justify-center items-center min-h-screen ">

            <Navbar title={title} line={des} />

            <form onSubmit={handleSubmit} className="space-y-10 w-full max-w-5xl">

                <div className="flex flex-wrap mt-4 gap-10">
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            defaultValue={name}
                            className="mt-2 w-full p-2 border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex-1 min-w-[40%]">
                        <label htmlFor="exchange" className="block text-sm font-medium text-gray-300">Exchange</label>
                        <input
                            type="text"
                            id="exchange"
                            defaultValue={exchange}
                            className="mt-2 w-full p-2 border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                </div>


                <div className="flex flex-wrap gap-10">
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="mt-2 w-full p-2 border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="currentPrice" className="block text-sm font-medium text-gray-300">Current Price ($)</label>
                        <input
                            type="number"
                            id="currentPrice"
                            defaultValue={currentPrice}
                            className="mt-2 w-full p-2 border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="transactionType" className="text-sm font-medium text-gray-300">Transaction Type</label>
                    <select
                        id="transactionType"
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value as "buy" | "sell")}
                        className="mt-2 w-full p-2 border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-300">Total: ${total}</h3>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-[15%] py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition duration-300"
                    >
                        Buy
                    </button>
                </div>
            </form>

        </div>
    );
}
