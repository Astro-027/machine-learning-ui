//import React from 'react';
import React, { useState, useEffect } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import ModelComparison from '../components/ModelComparison';
import StatisticsMetrics from '../components/StatisticsMetrics';

const ResultsVisualizationPage: React.FC = () => {
    const [placeholder, setPlaceholder] = useState('Nothing');

    useEffect(() => {
    	fetch('http://localhost:5000/hello').then(res => res.json()).then(data => {
      		setPlaceholder(data.result);
    	});
    }, []);
    
    
    return (
        <div className="results-visualization-page">
            <h1>Results Visualization</h1>
            <ResultsDisplay />
            <ModelComparison />
            <StatisticsMetrics />
            <button className="export-btn">Export Results</button>
            <p>Backend says {placeholder}</p>
        </div>
    );
};

export default ResultsVisualizationPage;
