import React from 'react';
import WorkoutForm from './components/WorkoutForm';
import Dashboard from './components/Dashboard';

// Main App component
const App = () => {
    return (
        <div className="app">
            <h1>FastFlow Fitness Tracker</h1>
            <WorkoutForm />  
            <Dashboard />     
        </div>
    );
};

export default App;
