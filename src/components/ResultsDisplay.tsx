// ResultsDisplay.tsx
import React, { useState } from 'react';
import ResultGraph from './images/loss-vs-epoch.png';
import './styles/ResultsDisplay.css';

const ResultsDisplay: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('loss');

  const handleMetricChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMetric(event.target.value);
  };

  return (
    <div className="results-display">
      <h2>Results Display</h2>
      <div className="results-controls">
        <div className="select-wrapper">
          <select value={selectedMetric} onChange={handleMetricChange}>
            <option value="loss">Loss</option>
            <option value="accuracy">Accuracy</option>
            <option value="f1_score">F1 Score</option>
          </select>
        </div>
        <button className="export-btn">Export Results</button>
      </div>
      <div className="graph-container">
        <img src={ResultGraph} alt={`${selectedMetric} vs Epoch`} />
      </div>
      <div className="results-summary">
        <h3>Summary Statistics</h3>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Training</th>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Final {selectedMetric}</td>
              <td>0.0123</td>
              <td>0.0145</td>
            </tr>
            <tr>
              <td>Best {selectedMetric}</td>
              <td>0.0120</td>
              <td>0.0140</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsDisplay;