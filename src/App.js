
import './App.css';



import React, { useState } from 'react';
import TotalSalesChart from './components/TotalSalesChart';
import SalesGrowthChart from './components/SalesGrowthChart';

function App() {
    const [interval, setInterval] = useState('monthly');

    return (
        <div className="App">
            <h1>E-commerce Data Visualization</h1>
            <button onClick={() => setInterval('daily')}>Daily</button>
            <button onClick={() => setInterval('monthly')}>Monthly</button>
            <button onClick={() => setInterval('quarterly')}>Quarterly</button>
            <button onClick={() => setInterval('yearly')}>Yearly</button>
            
            <TotalSalesChart interval={interval} />
            <SalesGrowthChart interval={interval} />
            {/* Add more charts as needed */}
        </div>
    );
}

export default App;


