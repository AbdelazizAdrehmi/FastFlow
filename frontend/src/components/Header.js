import React from 'react'; // Importing React
import './Header.css'; // Importing styles for Header

// Header component
const Header = () => {
    return (
        <header className="header">
            <h1>FitnessFlow</h1> {/* Application Title */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Workouts</li>
                    <li>Goals</li>
                    <li>Progress</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; // Exporting Header component
