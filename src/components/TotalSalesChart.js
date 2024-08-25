import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchSalesOverTime } from '../api';

const TotalSalesChart = ({ interval }) => {
    const [data, setData] = useState({
        labels: [],
        datasets: []
    });

    // Define the updateChartData function
    const updateChartData = (nextDatasets) => {
        // Check if nextDatasets is an array
        if (Array.isArray(nextDatasets)) {
            return nextDatasets.map(dataset => {
                // Map over the datasets to create the new structure
                return {
                    ...dataset,
                    // You can modify or add properties to each dataset here
                };
            });
        } else {
            console.error("Invalid data format: nextDatasets is not an array");
            return []; // Return an empty array if nextDatasets is not valid
        }
    };

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchSalesOverTime(interval);
                if (result && Array.isArray(result)) {
                    const safeMap = (arr, fn) => (Array.isArray(arr) ? arr.map(fn) : []);

const labels = safeMap(result, item => item._id);
const salesData = safeMap(result, item => item.totalSales);

                    // Prepare nextDatasets
                    const nextDatasets = [{
                        label: 'Total Sales',
                        data: salesData,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }];

                    // Update datasets safely using the updateChartData function
                    const updatedDatasets = updateChartData(nextDatasets);

                    setData({
                        labels,
                        datasets: updatedDatasets,
                    });
                } else {
                    console.error("Invalid data format:", result);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        console.log("result");
    }, [interval]);

    return (
        <div>
            <h2>Total Sales Over Time</h2>
            <Line data={data} />
        </div>
    );
};

export default TotalSalesChart;
