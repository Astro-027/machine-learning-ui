import React from 'react';
import './styles/ModelTrainingSettings.css';

const ModelTrainingSettings: React.FC = () => {
    return (
        <div className="model-training-settings">
            <h2>Model Training Settings</h2>
            <div>
                <label>
                    Training Dataset:
                    <select defaultValue="cifar-100">
                        <option value="cifar-10">CIFAR-10</option>
                        <option value="cifar-100">CIFAR-100</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Number of Training Iterations:
                    <input type="number" defaultValue={300} min="100" max="1000" step="50" />
                </label>
            </div>
            <div>
                <label>
                    Training Batch Size:
                    <input type="number" defaultValue={100} min="10" max="500" step="10" />
                </label>
            </div>
            <div>
                <label>
                    Learning Rate:
                    <input type="number" defaultValue={0.00005} step="0.00001" min="0.00001" max="0.001" />
                </label>
            </div>
        </div>
    );
};

export default ModelTrainingSettings;
