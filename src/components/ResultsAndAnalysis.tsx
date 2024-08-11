// ResultsAndAnalysis.tsx
import React from 'react';
import ResultsDisplay from './ResultsDisplay';
import ModelComparison from './ModelComparison';
import StatisticsMetrics from './StatisticsMetrics';
import './styles/ResultsAndAnalysis.css';


const ResultsAndAnalysis: React.FC = () => {
  return (
    <div className="result-analysis">
      <h2>Results and Analysis</h2>

      {/* Results Display */}
      <div className="result-section">
        <ResultsDisplay />
      </div>

      {/* Dataset Upload */}
      <div className="result-section">
        <ModelComparison />
      </div>

      {/* Dataset Preview */}
      <div className="result-section">
        <StatisticsMetrics /> 
      </div>
    </div>
  );
};

export default ResultsAndAnalysis;