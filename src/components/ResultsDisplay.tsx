import React from 'react';
import ResultGraph from './images/loss-vs-epoch.png';
import './styles/ResultsDisplay.css';

const ResultsDisplay: React.FC = () => {
    return (
        <div className="results-display">
            <h2>Results Display</h2>
            {/* Placeholder for results display */}
            <p>Graphical representation of adversarial examples and model outputs will go here.</p>
            <img src={ResultGraph} alt="ResultGraph" />
        </div>
    );
};

export default ResultsDisplay;
