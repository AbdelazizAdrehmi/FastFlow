import React from 'react';
import WorkoutForm from './components/WorkoutForm';
import Dashboard from './components/Dashboard';
import fastflowLogo from './fastflow-logo.png';

    return (
        <div className="app">
            <h1>FastFlow Fitness Tracker</h1>
            <WorkoutForm />  
            <Dashboard />     
            <WorkoutForm />  {/* Component for adding workouts */}
            <Dashboard />     {/* Component for displaying workouts */}
        </div>
    );
};
