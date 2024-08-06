// ModelArchitectureSettings.tsx
import React from 'react';
import './styles/ModelArchitectureSettings.css';

const ModelArchitectureSettings: React.FC = () => {
  return (
    <div className="model-architecture-settings">
      <h3>Model Architecture Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label htmlFor="feature-layer">Feature Layer:</label>
          <select id="feature-layer" defaultValue="mid">
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="setting-item">
          <label htmlFor="hidden-layers">Dimension of Hidden Layers:</label>
          <input
            id="hidden-layers"
            type="number"
            defaultValue={500}
            min={100}
            max={1000}
            step={50}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="encoder-layers">Number of Encoder Layers:</label>
          <input
            id="encoder-layers"
            type="number"
            defaultValue={2}
            min={1}
            max={5}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="decoder-layers">Number of Decoder Layers:</label>
          <input
            id="decoder-layers"
            type="number"
            defaultValue={2}
            min={1}
            max={5}
          />
        </div>
      </div>
      <button className="apply-settings">Apply Architecture</button>
    </div>
  );
};

export default ModelArchitectureSettings;