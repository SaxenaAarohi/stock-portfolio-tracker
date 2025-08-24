"use client"
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { date: "Aug 1", price: 80 },
  { date: "Aug 2", price: 125 },
  { date: "Aug 3", price: 100 },
  { date: "Aug 4", price: 130 },
  { date: "Aug 5", price: 122 },
  { date: "Aug 6", price: 135 },
  { date: "Aug 7", price: 70 },
  { date: "Aug 8", price: 140 },
  { date: "Aug 9", price: 199 },
  { date: "Aug 10", price: 145 },
  { date: "Aug 11", price: 18 },
  { date: "Aug 12", price: 150 },
  { date: "Aug 13", price: 190 },
  { date: "Aug 14", price: 155 },
  { date: "Aug 15", price: 47 },
  { date: "Aug 16", price: 160 },
  { date: "Aug 17", price: 152 },
  { date: "Aug 18", price: 65 },
  { date: "Aug 19", price: 158 },
  { date: "Aug 20", price: 170 },
  { date: "Aug 21", price: 162 },
  { date: "Aug 22", price: 197 },
  { date: "Aug 23", price: 168 },
  { date: "Aug 24", price: 80 },
  { date: "Aug 25", price: 172 },
  { date: "Aug 26", price: 185 },
  { date: "Aug 27", price: 178 },
  { date: "Aug 28", price: 190 },
  { date: "Aug 29", price: 83 },
  { date: "Aug 30", price: 195 },
  { date: "Aug 31", price: 30 },
];

export default function Chart_Section() {
    return (

        <div className="h-[290] border border-gray-800  rounded-lg bg-gray-900/40 ml-3 w-full">
            <ResponsiveContainer>
                <LineChart width={500} height={300} data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}