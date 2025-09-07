'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface CandleDataPoint {
    date: string | number | Date;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface CandlechartProps {
    data: CandleDataPoint[];
}

const Candlechart: React.FC<CandlechartProps> = ({ data }) => {
    const [loading, setLoading] = useState(true);

   useEffect(() => {
        const timer = setTimeout(() => {
            if (data && data.length > 0) {
                setLoading(false);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [data]);

    if (loading) {
        return (
            <div className=" animate-pulse  md:w-[1000px] w-[92%] h-[300px] bg-gray-800 ml-4 mt-2 rounded shadow"/>

        );
    }

    const formatted = data.map((d) => ({
        x: new Date(d.date),
        y: [d.open, d.high, d.low, d.close],
    }));

    const options: ApexOptions = {
        chart: {
            type: 'candlestick',
            height: 350,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        xaxis: {
            type: 'datetime',
            labels: { style: { colors: '#ffffff', fontSize: '12px' } },
            axisBorder: { color: '#888888' },
            axisTicks: { color: '#888888' },
        },
        yaxis: {
            labels: { style: { colors: '#ffffff', fontSize: '12px' } },
            axisBorder: { color: '#888888' },
            axisTicks: { color: '#888888' },
        },
        tooltip: { theme: 'dark' },
        legend: { labels: { colors: '#ffffff' } },
    };

    const series = [{ data: formatted }];

    return (
        <div className="md:w-[1085px] w-[92%]">
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={300}
                width="100%"
            />
        </div>
    );
};

export default Candlechart;
