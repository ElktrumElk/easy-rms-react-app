import React, { useState, useEffect } from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const targetValues = [70, 85, 37, 28, 16, 95];   // Your final values

    const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0, 0, 0]);

    // Animation Logic
    useEffect(() => {
        let start = 0;
        const duration = 1500; // Animation duration in milliseconds

        const animate = () => {
            start += 125; // ~60 frames per second
            const progress = Math.min(start / duration, 1);

            // Smooth easing (easeOutQuad)
            const easedProgress = 1 - Math.pow(1 - progress, 2);

            const newValues = targetValues.map(target =>
                Math.floor(target * easedProgress)
            );

            setAnimatedValues(newValues);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setAnimatedValues(targetValues); // Ensure it ends exactly at target
            }
        };

        requestAnimationFrame(animate);

        return () => {
            
        };
    }, []);

    const chartData = {
        labels: ['Advance Excel', 'N++', 'C++', 'Linux', 'MS office', 'Logic Building'],
        datasets: [
            {
                label: 'Total Files',
                data: animatedValues,
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
                text: 'Total Files in Modules',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (

        <Bar data={chartData} options={options} />

    );
};

export default BarChart;