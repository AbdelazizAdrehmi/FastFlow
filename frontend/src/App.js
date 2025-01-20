import React from 'react'; // Importing React
import Header from './components/Header'; // Importing Header component
import WorkoutLog from './components/WorkoutLog'; // Importing WorkoutLog component
import Goals from './components/Goals'; // Importing Goals component
import ProgressChart from './components/ProgressChart'; // Importing ProgressChart component
import CaloricTracker from './components/CaloricTracker'; // Importing CaloricTracker component
import SyncServices from './components/SyncServices'; // Importing SyncServices component

// Main App component
const App = () => {
    return (
        <div className="app-container">
            <Header /> {/* Rendering Header */}
            <WorkoutLog /> {/* Rendering Workout Log */}
            <Goals /> {/* Rendering Goals */}
            <ProgressChart /> {/* Rendering Progress Chart */}
            <CaloricTracker /> {/* Rendering Caloric Tracker */}
            <SyncServices /> {/* Rendering Sync Services */}
        </div>
    );
};

export default App; // Exporting App component
