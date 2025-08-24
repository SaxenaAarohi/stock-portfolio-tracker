//@ts-nocheck
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface CandleDataPoint {
    x: number | string | Date;
    y: [number, number, number, number]; 
}

interface CandlechartProps {
    data: CandleDataPoint[];
}

const Candlechart: React.FC<CandlechartProps> = ({ data }) => {
    const formatted = data.map((d) => ({
        x: new Date(d.date),
        y: [d.open, d.high, d.low, d.close],
    }));

    const options = {
        chart: {
            type: 'candlestick',
            height: 350,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false, 
            },

        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '12px',
                },
            },
            axisBorder: {
                color: '#888888',
            },
            axisTicks: {
                color: '#888888',
            }
        },
        yaxis: {
        
            labels: {
                style: {
                    colors: '#ffffff', 
                    fontSize: '12px',
                },
            },
            axisBorder: {
                color: '#888888',
            },
            axisTicks: {
                color: '#888888',
            },
        }, yaxis: {
            labels: {
                style: {
                    colors: '#ffffff', 
                    fontSize: '12px',
                },
            },
            axisBorder: {
                color: '#888888',
            },
            axisTicks: {
                color: '#888888',
            },
        },
        tooltip: {
            theme: 'dark',
        },
        title: {
            text: 'Candlestick Chart',
            style: {
                color: '#ffffff', // ✅ Title color
                fontSize: '16px',
            },
        },
        legend: {
            labels: {
                colors: '#ffffff', // ✅ Legend label color
            },
        },
    };

    const series = [
        {
            data: formatted,
        },
    ];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="candlestick"
            height={300}
            width={900}
        />
    );
};

export default Candlechart;
