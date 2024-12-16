import React, { useEffect, useState } from 'react';


const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);


    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
            }
        });
        const data = await response.json();
        setWorkouts(data); 
    };

    useEffect(() => {
        fetchWorkouts(); 
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
