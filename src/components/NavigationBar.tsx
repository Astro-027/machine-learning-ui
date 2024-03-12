import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you've installed react-router-dom

const NavigationBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/data-selection" className="nav-link">Data Selection</Link>
                <Link to="/model-configuration" className="nav-link">Model Configuration</Link>
                <Link to="/results-visualization" className="nav-link">Results Visualization</Link>
                <Link to="/help" className="nav-link">Help/FAQ</Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
