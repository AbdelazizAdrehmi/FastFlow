const Workout = require('../models/Workout'); // Importing Workout model

// Add a new workout
const addWorkout = async (req, res) => {
    const { userId, type, duration, calories } = req.body;
    try {
        const newWorkout = new Workout({ userId, type, duration, calories });
        await newWorkout.save(); // Saving workout to the database
        res.status(201).json(newWorkout); // Returning the created workout
    } catch (error) {
        res.status(500).json({ message: 'Error adding workout', error });
    }
};

// Get all workouts for a user
const getWorkouts = async (req, res) => {
    const { userId } = req.params;
    try {
        const workouts = await Workout.find({ userId }); // Finding workouts by userId
        res.json(workouts); // Returning the workouts
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error });
    }
};

module.exports = { addWorkout, getWorkouts }; // Exporting workout controller functions
