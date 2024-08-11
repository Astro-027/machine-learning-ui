import React from 'react';
import './styles/ModelTrainingSettings.css';

const ModelTrainingSettings: React.FC = () => {
  return (
    <div className="model-training-settings">
      <h3>Model Training Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label htmlFor="training-dataset">Training Dataset:</label>
          <select id="training-dataset" defaultValue="cifar-100">
            <option value="cifar-10">CIFAR-10</option>
            <option value="cifar-100">CIFAR-100</option>
          </select>
        </div>
        <div className="setting-item">
          <label htmlFor="training-iterations">Number of Training Iterations:</label>
          <input
            id="training-iterations"
            type="number"
            defaultValue={300}
            min={100}
            max={1000}
            step={50}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="batch-size">Training Batch Size:</label>
          <input
            id="batch-size"
            type="number"
            defaultValue={100}
            min={10}
            max={500}
            step={10}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="learning-rate">Learning Rate:</label>
          <input
            id="learning-rate"
            type="number"
            defaultValue={0.00005}
            step={0.00001}
            min={0.00001}
            max={0.001}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelTrainingSettings;