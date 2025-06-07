// BarChartWithLegend.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChartWithLegend = () => {
    const data = {
        labels: [''],
        datasets: [
            {
                label: 'You Completed',
                data: [8],
                backgroundColor: '#fdd8b3',
                borderRadius: 8,
                barThickness: 30,
            },
            {
                label: 'Total Course time',
                data: [55],
                backgroundColor: '#f97e3d',
                borderRadius: 8,
                barThickness: 30,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { display: false },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 30,
                    font: { size: 12 },
                    color: '#aaa',
                },
                grid: {
                    color: '#ddd',
                    borderDash: [4, 4],
                },
            },
        },
    };

    return (
        <div
            style={{
                width: 360,
                background: '#fff4ee',
                borderRadius: 12,
                padding: 16,
                fontFamily: 'sans-serif',
            }}
        >
            <Bar data={data} options={options} />
            <div style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#333' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: 10,
                            height: 10,
                            backgroundColor: '#f97e3d',
                            borderRadius: '50%',
                        }}
                    ></span>
                    Total Course time: <strong>55 min</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#333' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: 10,
                            height: 10,
                            backgroundColor: '#fdd8b3',
                            borderRadius: '50%',
                        }}
                    ></span>
                    You Completed: <strong>8 min</strong>
                </div>
            </div>
        </div>
    );
};

export default BarChartWithLegend;
