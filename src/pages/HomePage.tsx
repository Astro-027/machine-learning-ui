// HomePage.tsx
import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import LoginRegistration from '../components/LoginRegistration';


import DataSetLibrary from '../components/DataSetLibrary';
import DataUpload from '../components/DataUpload';
import DataPreview from '../components/DataPreview';
import '../components/styles/DataManagement.css';

import ModelConfiguration from '../components/ModelConfiguration';

import ResultsDisplay from '../components/ResultsDisplay';
import ModelComparison from '../components/ModelComparison';
import StatisticsMetrics from '../components/StatisticsMetrics';


import FAQSection from '../components/FAQSection';
import TutorialSection from '../components/TutorialSection';
import ContactSupport from '../components/ContactSupport';
import FeedbackForm from '../components/FeedbackForm';
import './styles/HomePage.css';

const HomePage: React.FC = () => {
    return (
      <div className="home-page">
        <header className="header">
          <WelcomeSection />
          <LoginRegistration />
        </header>
  
            <div className="content-grid">
                <div className="grid-item data-management">
                    <h2 className="section-title">Data Management</h2>
                        <DataSetLibrary />
                        <DataUpload />
                        <DataPreview />
            </div>

                <div className="grid-item model-config">
                    <ModelConfiguration /> 
                </div>

                <div className="grid-item results-analysis">
                    <h2>Results and Analysis</h2>
                    <ResultsDisplay />
                    <ModelComparison />
                    <StatisticsMetrics />
                </div>

                <div className="grid-item help-support" style={{ gridColumn: 'span 3' }}>
                    <h3>Help and Support</h3>
                    <div className="help-support-grid">
                        <FAQSection />
                        <TutorialSection />
                        <ContactSupport />
                        <FeedbackForm />
                    </div>
                </div>
            </div>
        </div>
    )
};
    
  
  export default HomePage;