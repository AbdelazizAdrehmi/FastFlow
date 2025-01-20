import React, { useState } from 'react'; // Importing React and useState hook
import './WorkoutLog.css'; // Importing styles for WorkoutLog

// WorkoutLog component
const WorkoutLog = () => {
    const [workouts, setWorkouts] = useState([]); // State to hold workouts
    const [workout, setWorkout] = useState({ type: '', duration: '', calories: '' }); // State for new workout

    // Function to handle input changes
    const handleChange = (e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value });
    };

    // Function to add a new workout
    const addWorkout = () => {
        setWork outs([...workouts, workout]); // Adding new workout to the list
        setWorkout({ type: '', duration: '', calories: '' }); // Resetting input fields
    };

    return (
        <div className="workout-log">
            <h2>Log Your Workouts</h2> {/* Section Title */}
            <input 
                type="text" 
                name="type" 
                placeholder="Workout Type" 
                value={workout.type} 
                onChange={handleChange} 
            /> {/* Input for workout type */}
            <input 
                type="number" 
                name="duration" 
                placeholder="Duration (minutes)" 
                value={workout.duration} 
                onChange={handleChange} 
            /> {/* Input for workout duration */}
            <input 
                type="number" 
                name="calories" 
                placeholder="Calories Burned" 
                value={workout.calories} 
                onChange={handleChange} 
            /> {/* Input for calories burned */}
            <button onClick={addWorkout}>Add Workout</button> {/* Button to add workout */}
            <ul>
                {workouts.map((w, index) => (
                    <li key={index}>{`${w.type} - ${w.duration} min - ${w.calories} cal`}</li> // Displaying logged workouts
                ))}
            </ul>
        </div>
    );
};

export default WorkoutLog; // Exporting WorkoutLog component
