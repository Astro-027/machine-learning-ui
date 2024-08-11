// DataManagement.tsx
import React from 'react';
import DataSetLibrary from './DataSetLibrary';
import DataUpload from './DataUpload';
import DataPreview from './DataPreview';
import './styles/DataManagement.css';

const DataManagement: React.FC = () => {
  return (
    <div className="data-management">
      <h2>Data Management</h2>

      {/* Data Selection */}
      <div className="data-section">
        <DataSetLibrary />
      </div>

      {/* Dataset Upload */}
      <div className="data-section">
        <DataUpload />
      </div>

      {/* Dataset Preview */}
      <div className="data-section">
        <DataPreview /> 
      </div>
    </div>
  );
};

export default DataManagement;