import React, { useState } from 'react'; // Importing React and useState hook
import './Goals.css'; // Importing styles for Goals

// Goals component
const Goals = () => {
    const [goal, setGoal] = useState({ steps: '', calories: '' }); // State for goals

    // Function to handle input changes
    const handleChange = (e) => {
        setGoal({ ...goal, [e.target.name]: e.target.value });
    };

    return (
        <div className="goals">
            <h2>Set Your Fitness Goals</h2> {/* Section Title */}
            <input 
                type="number" 
                name="steps" 
                placeholder="Steps per Day" 
                value={goal.steps} 
                onChange={handleChange} 
            /> {/* Input for daily steps goal */}
            <input 
                type="number" 
                name="calories" 
                placeholder="Calories to Burn" 
                value={goal.calories} 
                onChange={handleChange} 
            /> {/* Input for calories goal */}
            <button>Save Goals</button> {/* Button to save goals */}
        </div>
    );
};

export default Goals; // Exporting Goals component
