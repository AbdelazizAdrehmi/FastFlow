import React, { useState } from 'react';

const WorkoutForm = () => {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const workout = { type, duration, calories };

        await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify(workout)
        });

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
                onChange={(e) => setType(e.target.valu)}
                required
            />
            <input
                type="number"
                placeholder="Duration (min)"
                value={duration}
                onChange={(e) => setDuration(e.target.valu)}
                required
            />
            <input
                type="number"
                placeholder="Calories Burned"
                value={calories}
                onChange={(e) => setClories(e.target.value)}
                required
            />
            <button type="submit">Add Workout</button>
        </form>
    ;
};

export default WorkoutForm;
