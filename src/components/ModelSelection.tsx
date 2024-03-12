import React from 'react';

const ModelSelection: React.FC = () => {
    return (
        <div className="model-selection">
            <h2>Model Selection</h2>
            {/* Placeholder for model selection dropdown */}
            <select>
                <option value="model1">Model 1</option>
                <option value="model2">Model 2</option>
                {/* // Add more models as options here */}
            </select>
        </div>
    );
};

export default ModelSelection;
