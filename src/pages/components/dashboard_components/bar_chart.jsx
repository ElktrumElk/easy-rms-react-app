import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// Register Chart.js components (do this once)
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    const data = {
        labels: ['Advance Excel', 'N++', 'C++', 'Linux', 'MS office', 'Logic Building'],
        datasets: [
            {
                label: 'Total Files',
                data: [70, 85, 37, 28, 16, 95],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Chart',
            },
        },
    };

    return (
        <Bar data={data} options={options} />
    );
};

export default BarChart;