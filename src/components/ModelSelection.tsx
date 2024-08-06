// ModelSelection.tsx
import React, { useState } from 'react';
import vgg16Image from './images/VGG16.jpg';
import inceptionImage from './images/inception.png';
import './styles/ModelSelection.css';

const ModelSelection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('vgg');

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const models = [
    { value: 'vgg', name: 'VGG', image: vgg16Image },
    { value: 'inception', name: 'Inception', image: inceptionImage },
    // Add more models here
  ];

  return (
    <div className="model-selection-container">
      <div className="model-selection">
        <h3>Model Selection</h3>
        <div className="select-wrapper">
          <select value={selectedModel} onChange={handleModelChange}>
            {models.map((model) => (
              <option key={model.value} value={model.value}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div className="model-info">
          <div className="model-image">
            <img
              src={models.find((m) => m.value === selectedModel)?.image}
              alt={`${selectedModel} architecture`}
            />
          </div>
          <div className="model-description">
            <h3>{models.find((m) => m.value === selectedModel)?.name}</h3>
            <p>
              {selectedModel === 'vgg'
                ? 'VGG is a deep convolutional network for object recognition developed and trained by Oxfords renowned Visual Geometry Group (VGG).'
                : 'Inception is a deep convolutional neural network architecture developed by Google, known for its efficient use of computational resources.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSelection;

