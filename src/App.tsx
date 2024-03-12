import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import './App.css';

// Placeholder imports for pages
import HomePage from './pages/HomePage';
import DataSelectionPage from './pages/DataSelectionPage';
import ModelConfigurationPage from './pages/ModelConfigurationPage';
import ResultsVisualizationPage from './pages/ResultsVisualizationPage';
import HelpPage from './pages/HelpPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data-selection" element={<DataSelectionPage />} />
          <Route path="/model-configuration" element={<ModelConfigurationPage />} />
          <Route path="/results-visualization" element={<ResultsVisualizationPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
