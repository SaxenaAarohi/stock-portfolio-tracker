//@ts-nocheck
"use client"
import React from 'react';
import GaugeComponent from 'react-gauge-component';

function StockGreedGauge({ value, minValue = 0, maxValue = 100 }) {
  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        subArcs: [
          {
            limit: 20,
            color: '#EA4228',  
            showTick: true,
            tooltip: { text: 'Extreme Fear' },
          },
          {
            limit: 40,
            color: '#F5CD19',  
            showTick: true,
            tooltip: { text: 'Fear' }
          },
          {
            limit: 60,
            color: '#9B59B6',  
            showTick: true,
            tooltip: { text: 'Neutral' }
          },
          {
            limit: 80,
            color: '#5BE12C',  
            showTick: true,
            tooltip: { text: 'Greed' }
          },
          {
            color: '#2ECC71',   
            tooltip: { text: 'Extreme Greed' }
          }
        ]
      }}
      pointer={{
        color: '#34495E',
        length: 0.80,
        width: 7,
      }}
      labels={{
        valueLabel: { formatTextValue: val => val + '%' },
        tickLabels: {
          type: 'outer',
          defaultTickValueConfig: {
            formatTextValue: val => val + '%',
            style: { fontSize: 12 }
          },
          ticks: [
            { value: 0 },
            { value: 20 },
            { value: 40 },
            { value: 60 },
            { value: 80 },
            { value: 100 }
          ],
        }
      }}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
    />
  );
}

export default StockGreedGauge;
