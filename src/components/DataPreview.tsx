import React from 'react';
//import './styles/DataPreview.css';

const DataPreview: React.FC = () => {
  const adultIncomeAttributes = [
    'marital-status', 'relationship', 'age', 'hours-per-week', 
    'sex', 'occupation', 'education', 'race'
  ];

  const sampleData = [
    {
      'marital-status': 'Married-civ-spouse',
      'relationship': 'Husband',
      'age': 39,
      'hours-per-week': 40,
      'sex': 'Male',
      'occupation': 'Adm-clerical',
      'education': 'Bachelors',
      'race': 'White'
    },
    {
      'marital-status': 'Never-married',
      'relationship': 'Not-in-family',
      'age': 28,
      'hours-per-week': 45,
      'sex': 'Female',
      'occupation': 'Prof-specialty',
      'education': 'Masters',
      'race': 'Black'
    }
  ];

  return (
    <div className="data-preview">
      <h3>Data Preview: Adult Income Dataset</h3>
      <table>
        <thead>
          <tr>
            {adultIncomeAttributes.map((attr) => (
              <th key={attr}>{attr}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row, index) => (
            <tr key={index}>
              {adultIncomeAttributes.map((attr) => (
                <td key={attr}>{row[attr as keyof typeof row]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPreview;