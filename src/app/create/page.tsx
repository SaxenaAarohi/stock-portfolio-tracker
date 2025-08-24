import prismaclient from "@/services/prisma";

const stockIds = [
  "68aa02b93c1bf3c4974c681f",
  "68aa02b93c1bf3c4974c6820",
  "68aa02b93c1bf3c4974c6821",
  "68aa02b93c1bf3c4974c6822",
  "68aa02b93c1bf3c4974c6823",
  "68aa02b93c1bf3c4974c6824",
  "68aa02b93c1bf3c4974c6825",
  "68aa02b93c1bf3c4974c6826",
  "68aa02b93c1bf3c4974c6827",
  "68aa02b93c1bf3c4974c6828",
  "68aa02b93c1bf3c4974c6829",
  "68aa02b93c1bf3c4974c682a",
  "68aa02b93c1bf3c4974c682b",
  "68aa02b93c1bf3c4974c682c",
  "68aa02b93c1bf3c4974c682d",
  "68aa02b93c1bf3c4974c682e",
  "68aa02b93c1bf3c4974c682f",
  "68aa02b93c1bf3c4974c6830",
  "68aa02b93c1bf3c4974c6831",
  "68aa02b93c1bf3c4974c6832",
  "68aa02b93c1bf3c4974c6833",
  "68aa02b93c1bf3c4974c6834",
  "68aa02b93c1bf3c4974c6835",
  "68aa02b93c1bf3c4974c6836",
  "68aa02b93c1bf3c4974c6837",
  "68aa02b93c1bf3c4974c6838",
  "68aa02b93c1bf3c4974c6839",
  "68aa02b93c1bf3c4974c683a",
  "68aa02b93c1bf3c4974c683b",
  "68aa02b93c1bf3c4974c683c",
];

export default async function add(){

const startDate = new Date("2025-08-01");
const stockHistoryData = [];

for (const stockId of stockIds) {
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const open = 100 + i + Math.floor(Math.random() * 5);
    const high = open + Math.floor(Math.random() * 5);
    const low = open - Math.floor(Math.random() * 3);
    const close = low + Math.floor(Math.random() * (high - low + 1));
    const volume = 10000 + Math.floor(Math.random() * 5000);

    stockHistoryData.push({ stockId, date, open, high, low, close, volume });
  }
}

await prismaclient.stockHistory.createMany({
  data: stockHistoryData,
});

return (
    <div>addded</div>
)
}
