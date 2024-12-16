import React, { useState } from 'react';


const WorkoutForm = () => {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const workout = { type, duration, calories };

        // Send workout data to the backend
        await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify(workout)
        });

        // Clear the form
        setType('');
        setDuration('');
        setCalories('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Workout Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Duration (min)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Calories Burned"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
            />
            <button type="submit">Add Workout</button>
        </form>
    );
};

export default WorkoutForm;
