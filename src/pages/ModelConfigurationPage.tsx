import React from 'react';
import ModelSelection from '../components/ModelSelection';
import ParameterSettings from '../components/ParameterSettings';
import AdversarialExampleSettings from '../components/AdversarialExampleSettings';

const ModelConfigurationPage: React.FC = () => {
    return (
        <div className="model-configuration-page">
            <h1>Model Configuration</h1>
            <ModelSelection />
            <ParameterSettings />
            <AdversarialExampleSettings />
            <button>Save Configuration</button>
        </div>
    );
};

export default ModelConfigurationPage;
