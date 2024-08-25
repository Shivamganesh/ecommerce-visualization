import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchSalesGrowthRate } from '../api';

const SalesGrowthChart = ({ interval }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchSalesGrowthRate(interval);
            const labels = result.map(item => item._id);
            const growthRates = result.map(item => item.growthRate);
            setData({
                labels,
                datasets: [{
                    label: 'Sales Growth Rate (%)',
                    data: growthRates,
                    fill: false,
                    borderColor: 'rgb(153, 102, 255)',
                    tension: 0.1
                }]
            });
        };

        fetchData();
    }, [interval]);

    return (
        <div>
            <h2>Sales Growth Rate Over Time</h2>
            <Line data={data} />
        </div>
    );
};

export default SalesGrowthChart;
