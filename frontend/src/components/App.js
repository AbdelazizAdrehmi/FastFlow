import React, { useEffect, useState } from 'react';

// Dashboard component
const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);

    // Fetch workouts from the backend
    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
            }
        });
        const data = await response.json();
        setWorkouts(data); // Set the fetched workouts to state
    };

    useEffect(() => {
        fetchWorkouts(); // Fetch workouts when the component mounts
    }, []);

    return (
        <div>
            <h2>Your Workouts</h2>
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index}>
                        {workout.type} - {workout.duration} min - {workout.calories} calories
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
