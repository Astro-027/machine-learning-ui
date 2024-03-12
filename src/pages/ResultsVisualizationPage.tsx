import React from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import ModelComparison from '../components/ModelComparison';
import StatisticsMetrics from '../components/StatisticsMetrics';

const ResultsVisualizationPage: React.FC = () => {
    return (
        <div className="results-visualization-page">
            <h1>Results Visualization</h1>
            <ResultsDisplay />
            <ModelComparison />
            <StatisticsMetrics />
            <button className="export-btn">Export Results</button>
        </div>
    );
};

export default ResultsVisualizationPage;
