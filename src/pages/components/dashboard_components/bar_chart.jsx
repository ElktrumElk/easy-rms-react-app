import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar, Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';

import { AuthContext } from '../../../context/auth_context_export';
import fetchData from '../../../scripts/fetchData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * 
 * @param {Object} param0 
 * @param {String} param0.chartType - Type of chart to be render 
 * @returns 
 */
const BarChart = ({ chartType }) => {

    const { userRole } = useContext(AuthContext);
    const data = fetchData({ navigate: false, type: false });

    const chartRef = useRef(null);

    useEffect(() => {

        if (chartRef.current) {

            chartRef.current.destroy();

        }

}, [chartType]);

const chartMap = {
    BC: Bar,
    LC: Line,
    SC: Scatter,
    RC: Radar,
    PC: Pie
};

const ChartComponent = chartMap[chartType];

    /**Comment: Inittialize the target value */
    let targetValues = [];
    let labels = []

    if (userRole === 'Admin') {
        //Comment: Loop through if user is an Admin
        Object.keys(data.data.batchesEnrolled).forEach((v, idx) => {
            //Comment: Assign the the values to the targetValue array
            targetValues.push(data.data.batchesEnrolled[`${v}`]?.students);
            labels.push(data.data.batchesEnrolled[`${v}`]?.name)
        })
    } else if (userRole === 'Student') {
        data.data.modules.forEach((m, idx) => {
            targetValues.push(m.totalFiles);
            labels.push(m.moduleName);
            // console.log(m.totalFiles) //debugging
        })
    };

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

        return () => {};
    }, []);

    const chartData = {

        labels: labels,
        datasets: [
            {
                label: userRole === 'Admin' ? 'Total Students' : 'Total Files',
                data: animatedValues,
                backgroundColor: '#1E319B',
                borderColor: '#1E319B',
                borderWidth: 1
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
                text: userRole === 'Admin' ? 'Batches' : 'Modules',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };



    
    return (
    <ChartComponent
        ref={chartRef}
        data={chartData}
        options={options}
    />
);
};

export default BarChart;