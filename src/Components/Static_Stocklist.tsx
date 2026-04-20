
import prismaclient from "@/services/prisma";
import Temporary from "./Temporary";

export default async function Static_Stockslist() {
 
const Stocks = [
  {
    stock: { id: "68aa02b93c1bf3c4974c681f", symbol: "AAPL", name: "Apple Inc.", price: 180 },
    quantity: 20,
    price: 150,
    total: 150 * 20
  },
  {
    stock: { id: "68aa02b93c1bf3c4974c6820", symbol: "MSFT", name: "Microsoft Corporation", price: 250 },
    quantity: 10,
    price: 220,
    total: 220 * 10
  },
  {
    stock: { id: "68aa02b93c1bf3c4974c6822", symbol: "AMZN", name: "Amazon.com Inc.", price: 140 },
    quantity: 15,
    price: 130,
    total: 130 * 15
  },
  {
    stock: { id: "68aa02b93c1bf3c4974c6823", symbol: "TSLA", name: "Tesla Inc.", price: 800 },
    quantity: 8,
    price: 700,
    total: 700 * 8
  },
  {
    stock: { id: "68aa02b93c1bf3c4974c6825", symbol: "NFLX", name: "Netflix Inc.", price: 400 },
    quantity: 12,
    price: 350,
    total: 350 * 12
  },
  {
    stock: { id: "68aa02b93c1bf3c4974c6821", symbol: "GOOGL", name: "Alphabet Inc.", price: 2800 },
    quantity: 5,
    price: 2600,
    total: 2600 * 5
  }
];

  return (

      <div className="flex flex-wrap md:justify-start  justify-center gap-4 mt-4  ">
          {Stocks.map((stock) => (
            <Temporary key={stock.stock.id} data={stock}/>
          ))}
        </div>

  );
}