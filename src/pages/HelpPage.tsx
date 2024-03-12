import React from 'react';
import FAQSection from '../components/FAQSection';
import TutorialSection from '../components/TutorialSection';
import ContactSupport from '../components/ContactSupport';
import FeedbackForm from '../components/FeedbackForm';

const HelpPage: React.FC = () => {
    return (
        <div className="help-page">
            <h1>Help & FAQ</h1>
            <FAQSection />
            <TutorialSection />
            <ContactSupport />
            <FeedbackForm />
        </div>
    );
};

export default HelpPage;
