import React from 'react';

const ModelArchitectureSettings: React.FC = () => {
    return (
        <div className="model-architecture-settings">
            <h2>Model Architecture Settings</h2>
            <div>
                <label>
                    Feature Layer:
                    <select defaultValue="mid">
                        <option value="low">Low</option>
                        <option value="mid">Mid</option>
                        <option value="high">High</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Dimension of Hidden Layers:
                    <input type="number" defaultValue={500} min="100" max="1000" step="50" />
                </label>
            </div>
            <div>
                <label>
                    Number of Encoder Layers:
                    <input type="number" defaultValue={2} min="1" max="5" />
                </label>
            </div>
            <div>
                <label>
                    Number of Decoder Layers:
                    <input type="number" defaultValue={2} min="1" max="5" />
                </label>
            </div>
        </div>
    );
};

export default ModelArchitectureSettings;
