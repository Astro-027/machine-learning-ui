import React from 'react';
import ModelSelection from '../components/ModelSelection';
import ModelArchitectureSettings from '../components/ModelArchitectureSettings';
import ModelTrainingSettings from '../components/ModelTrainingSettings';

const ModelConfigurationPage: React.FC = () => {
    return (
        <div className="model-configuration-page">
            <h1>Model Configuration</h1>
            <ModelSelection />
            <ModelArchitectureSettings />
            <ModelTrainingSettings />
            {/* Option to add entire models */}
            <button>Save Configuration</button>
        </div>
    );
};

export default ModelConfigurationPage;
