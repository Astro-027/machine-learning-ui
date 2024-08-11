// ModelConfiguration.tsx
import React from 'react';
import ModelSelection from './ModelSelection';
import ModelArchitectureSettings from './ModelArchitectureSettings';
import ModelTrainingSettings from './ModelTrainingSettings';
import './styles/ModelConfiguration.css';

const ModelConfiguration: React.FC = () => {
  return (
    <div className="model-configuration">
      <h2>Model Configuration</h2>

      {/* Model Selection */}
      <div className="model-section">
        <ModelSelection /> 
      </div>

      {/* Architecture Settings */}
      <div className="model-section">
        <ModelArchitectureSettings />
      </div>

      {/* Training Settings */}
      <div className="model-section">
        <ModelTrainingSettings />
      </div>
      <button className="apply-settings">Apply Settings  and Train</button>
    </div>
  );
};

export default ModelConfiguration;
