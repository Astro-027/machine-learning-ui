import React from 'react';
import './styles/DataSetLibrary.css';

const DataSetLibrary: React.FC = () => {
    const sampleDatasets = [
        { name: "Adult Income", description: "Responses from recent customer satisfaction surveys." },
        { name: "Sales Transactions", description: "Sales records for the past year." },
        { name: "Product Inventory", description: "Current inventory levels for all products." },
        // Add more sample datasets as needed
    ];

    const handleLoadDataset = (datasetName: string) => {
        // Logic to load/select the chosen dataset
        console.log(`Loading dataset: ${datasetName}`);
        // Need to implement the actual loading mechanism here
    };

    return (
        <div className="dataset-library">
            <h3 className="section-title">Dataset Library</h3>
            <ul>
                {sampleDatasets.map((dataset, index) => (
                    <li key={index}>
                        <h3>{dataset.name}</h3>
                        
                        <button onClick={() => handleLoadDataset(dataset.name)}>Load</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataSetLibrary;