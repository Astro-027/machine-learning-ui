//import React from 'react';
import React, { useState, useEffect } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import ModelComparison from '../components/ModelComparison';
import StatisticsMetrics from '../components/StatisticsMetrics';

function ResultsVisualizationPage() {
    const [data, setdata] = useState('Training...');

    
    useEffect(() => {
	    const sse = new EventSource('http://localhost:5000/stream');

	    function handleStream(e:any){
	      console.log(e)
	      setdata(e.data)
	    };

	    sse.onmessage = e =>{handleStream(e)};

	    sse.onerror = e => {
	      //GOTCHA - can close stream and 'stall'
	      sse.close()
	    };

	    return () => {
	      sse.close();
	      
	    };
    }, []);
    
    
    return (
        <div className="results-visualization-page">
            <h1>Results Visualization</h1>
            <ResultsDisplay />
            <ModelComparison />
            <StatisticsMetrics />
            <button className="export-btn">Export Results</button>
            <p>Status: {data}</p>
        </div>
    );
};

export default ResultsVisualizationPage;
