import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import QuickStartGuide from '../components/QuickStartGuide';
import LoginRegistration from '../components/LoginRegistration';
import DataSetLibrary from '../components/DataSetLibrary';
import DataUpload from '../components/DataUpload';
import DataPreview from '../components/DataPreview';
import ModelSelection from '../components/ModelSelection';
import ModelArchitectureSettings from '../components/ModelArchitectureSettings';
import ModelTrainingSettings from '../components/ModelTrainingSettings';
import ResultsDisplay from '../components/ResultsDisplay';
import ModelComparison from '../components/ModelComparison';
import StatisticsMetrics from '../components/StatisticsMetrics';
import FAQSection from '../components/FAQSection';
import TutorialSection from '../components/TutorialSection';
import ContactSupport from '../components/ContactSupport';
import FeedbackForm from '../components/FeedbackForm';




const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="grid-container">
                <div className="grid-item">
                    <WelcomeSection />
                    <QuickStartGuide />
                </div>
                <div className="grid-item">
                    <LoginRegistration />
                    <h2>Data Selection</h2>
                    <DataSetLibrary />
                </div>
                <div className="grid-item">
                    <DataUpload />
                    <DataPreview />
                </div>
                <div className="grid-item">
                    <h2>Model Configuration</h2>
                    <ModelSelection />
                    <ModelArchitectureSettings />
                </div>
                <div className="grid-item">
                    <ModelTrainingSettings />
                    <h2>Results Visualization</h2>
                    <ResultsDisplay />
                </div>
                <div className="grid-item">
                    <ModelComparison />
                    <StatisticsMetrics />
                </div>
                <div className="grid-item">
                    <h2>Help & FAQ</h2>
                    <FAQSection />
                </div>
                <div className="grid-item">
                    <TutorialSection />
                </div>
                <div className="grid-item">
                    <ContactSupport />
                    <FeedbackForm />
                </div>
            </div>
        </div>
    );
};



export default HomePage;
