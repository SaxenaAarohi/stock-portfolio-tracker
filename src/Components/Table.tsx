'use client';

const holdings = [
  {
    ticker: 'AAPL',
    company: 'Apple Inc.',
    shares: 10,
    avgBuyPrice: 150,
    currentPrice: 175,
  },
  {
    ticker: 'GOOGL',
    company: 'Alphabet Inc.',
    shares: 5,
    avgBuyPrice: 2800,
    currentPrice: 2700,
  },
  {
    ticker: 'TSLA',
    company: 'Tesla Inc.',
    shares: 8,
    avgBuyPrice: 600,
    currentPrice: 720,
  },
];

const HoldingsTable = () => {
  return (
    <div className=" mr-4 w-[90%] overflow-x-auto scrollbar-hide md:w-full  mt-1 ">
      <table className=" bg-gray-900/40 border rounded shadow">
        <thead>
          <tr className="bg-gray-800 text-gray-200 text-sm font-semibold text-left">
            <th className="py-3  md:px-8 px-3">Ticker</th>
            <th className="py-3  md:px-8 px-3">Company</th>
            <th className="py-3  md:px-8 px-3">Shares</th>
            <th className="py-3  md:px-8 px-3">Avg Buy Price ($)</th>
            <th className="py-3  md:px-8 px-3">Current Price ($)</th>
            <th className="py-3  md:px-8 px-3">Total Value ($)</th>
            <th className="py-3  md:px-8 px-3">Gain/Loss ($)</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((stock, index) => {
            const totalValue = stock.shares * stock.currentPrice;
            const totalCost = stock.shares * stock.avgBuyPrice;
            const gainLoss = totalValue - totalCost;

            return (
              <tr
                key={index}
                className="border-t text-sm text-gray-200 hover:bg-gray-500"
              >
                <td className="py-3 md:px-8 px-3 font-medium">{stock.ticker}</td>
                <td className="py-3 md:px-8 px-3">{stock.company}</td>
                <td className="py-3 md:px-8 px-3">{stock.shares}</td>
                <td className="py-3 md:px-8 px-3">${stock.avgBuyPrice.toFixed(2)}</td>
                <td className="py-3 md:px-8 px-3">${stock.currentPrice.toFixed(2)}</td>
                <td className="py-3 md:px-8 px-3">${totalValue.toFixed(2)}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    gainLoss >= 0 ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {gainLoss >= 0 ? '+' : ''}
                  ${gainLoss.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;
