import React from 'react';
import WorkoutForm from './components/WorkoutForm';
import Dashboard from './components/Dashboard';
import fastflowLogo from './fastflow-logo.png';

// Main App component
const App = () => {
    return (
        <div className="app">
<img src={fastflowLogo} className="App-logo" alt="FastFlow Logo" />
 <h1>Welcome to FastFlow</h1>
 <p>Your high-level application for seamless flow.</p>

            <WorkoutForm />  {/* Component for adding workouts */}
            <Dashboard />     {/* Component for displaying workouts */}
        </div>
    );
};

export default App;
