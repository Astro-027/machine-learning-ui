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
            <WelcomeSection />
            <QuickStartGuide />
            <LoginRegistration />
            <h1>Data Selection</h1>
            <DataSetLibrary />
            <DataUpload />
            <DataPreview />
            <h1>Model Configuration</h1>
            <ModelSelection />
            <ModelArchitectureSettings />
            <ModelTrainingSettings />
            <h1>Results Visualization</h1>
            <ResultsDisplay />
            <ModelComparison />
            <StatisticsMetrics />
            <h1>Help & FAQ</h1>
            <FAQSection />
            <TutorialSection />
            <ContactSupport />
            <FeedbackForm />
        </div>
    );
};

export default HomePage;
