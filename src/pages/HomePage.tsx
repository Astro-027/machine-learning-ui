import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import QuickStartGuide from '../components/QuickStartGuide';
import LoginRegistration from '../components/LoginRegistration';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <WelcomeSection />
            <QuickStartGuide />
            <LoginRegistration />
        </div>
    );
};

export default HomePage;
