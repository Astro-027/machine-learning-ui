// HomePage.tsx
import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import LoginRegistration from '../components/LoginRegistration';

import DataManagement from '../components/DataManagement';

import ModelConfiguration from '../components/ModelConfiguration';

import ResultsAndAnalysis from '../components/ResultsAndAnalysis';


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
                    <DataManagement />
                </div>

                <div className="grid-item model-config">
                    <ModelConfiguration /> 
                </div>

                <div className="grid-item results-analysis">
                    <ResultsAndAnalysis />
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