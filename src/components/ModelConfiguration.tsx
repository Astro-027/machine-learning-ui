// ModelConfiguration.tsx
import React, { useState, useEffect } from 'react';
import ModelSelection from './ModelSelection';
import ModelArchitectureSettings from './ModelArchitectureSettings';
import ModelTrainingSettings from './ModelTrainingSettings';
import './styles/ModelConfiguration.css';

const ModelConfiguration: React.FC = () => {
  const [data, setdata] = useState('Stop');   
  const [clicked, setClicked] = useState(false);
  
  function handleStream(e:any){
	      console.log(e)
	      setdata(e.data)
	    };
  
  useEffect(() => {
  
  if (clicked) {
  	    
  	    setdata('Training')
	    const sse = new EventSource('http://localhost:5000/stream');

	    sse.onmessage = e =>{handleStream(e)};

	    sse.onerror = e => {
	      //GOTCHA - can close stream and 'stall'
	      sse.close()
	    };

	    return () => {
	      sse.close();
	      
	    };
	    };
    }, [clicked]);
  
  
  
  
  return (
    <div className="model-configuration">
      <h2>Model Configuration</h2>

      {/* Model Selection */}
      <div className="model-section">
        <ModelSelection /> 
      </div>

      {/* Architecture Settings */}
      <div className="model-section">
        <ModelArchitectureSettings />
      </div>

      {/* Training Settings */}
      <div className="model-section">
        <ModelTrainingSettings />
      </div>
      <button onClick={() => setClicked(true)}>Apply Settings  and Train</button>
      <p>Status: {data}</p>
    </div>
  );
};

export default ModelConfiguration;
