import React from 'react';
import './styles/QuickStartGuide.css';

const QuickStartGuide: React.FC = () => {
    return (
        <div className="quick-start-guide">
            <h2>Quick Start Guide</h2>
            <div className="steps">
                <div className="step">
                    <span className="step-number">1</span>
                    <p>Select a dataset</p>
                </div>
                <div className="step">
                    <span className="step-number">2</span>
                    <p>Configure your model</p>
                </div>
                <div className="step">
                    <span className="step-number">3</span>
                    <p>View the results</p>
                </div>
            </div>
        </div>
    );
};

export default QuickStartGuide;