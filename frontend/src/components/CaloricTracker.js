import React, { useState } from 'react'; // Importing React and useState hook
import './CaloricTracker.css'; // Importing styles for CaloricTracker

// CaloricTracker component
const CaloricTracker = () => {
    const [calories, setCalories] = useState(0); // State for total calories

    // Function to handle calorie input
    const handleCalorieChange = (e) => {
        setCalories(e.target.value); // Updating calories state
    };

    return (
        <div className="caloric-tracker">
            <h2>Track Your Caloric Intake</h2> {/* Section Title */}
            <input 
                type="number" 
                placeholder="Calories Consumed" 
                value={calories} 
                onChange={handleCalorieChange} 
            /> {/* Input for calories consumed */}
            <button>Log Calories</button> {/* Button to log calories */}
        </div>
    );
};

export default CaloricTracker; // Exporting CaloricTracker component
