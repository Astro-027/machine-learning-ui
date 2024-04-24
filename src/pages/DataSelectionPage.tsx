import React from 'react';
import DataSetLibrary from '../components/DataSetLibrary';
import DataUpload from '../components/DataUpload';
import DataPreview from '../components/DataPreview';
import DataFilters from '../components/DataFilters';

const DataSelectionPage: React.FC = () => {
    return (
        <div className="data-selection-page">
            {/* Have option to slect data sets from local files */}
            <h1>Data Selection</h1>
            <DataSetLibrary />
            <DataUpload />
            <DataPreview />
            {/* <DataFilters /> */}
        </div>
    );
};

export default DataSelectionPage;
