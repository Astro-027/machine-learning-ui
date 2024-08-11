import React, { useState } from 'react';
//import './styles/DataUpload.css';

const DataUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      setUploadStatus('File uploaded successfully!');
      console.log('Uploading file:', file.name);
    } else {
      setUploadStatus('Please select a file to upload.');
    }
  };

  return (
    <div className="data-upload">
      <h3>Upload Data</h3>
      <form onSubmit={handleUpload}>
        <div className="file-input-container">
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept=".csv,.xlsx,.json"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="file-input-label">
            Choose File
          </label>
          <span className="file-name">{file ? file.name : 'No file chosen'}</span>
        </div>
        <button type="submit" className="upload-button">Upload</button>
      </form>
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
};

export default DataUpload;