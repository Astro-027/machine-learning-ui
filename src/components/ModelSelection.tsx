import React, { useState } from 'react';
import vgg16Image from './images/VGG16.jpg';
import vgg19Image from './images/inception.png';
import './styles/ModelSelection.css';

const ModelSelection: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState('model1');

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(event.target.value);
    }

    return (
        <div className="model-selection-container">
            <div className="model-selection">
                <h2>Model Selection</h2>
                <select value={selectedModel} onChange={handleModelChange}>
                    <option value="model1">VGG</option>
                    <option value="model2">Inception</option>
                    {/* // Add more models as options here */}
                </select>
                {selectedModel === 'model1' && <img src={vgg16Image} alt="vgg16" />}
                {selectedModel === 'model2' && <img src={vgg19Image} alt="vgg19" />}
            </div>
        </div>
    );
};

export default ModelSelection;