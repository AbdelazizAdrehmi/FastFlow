const Goal = require('../models/Goal'); // Importing Goal model

// Set a new goal
const setGoal = async (req, res) => {
    const { userId, steps, calories } = req.body;
    try {
        const newGoal = new Goal({ userId, steps, calories });
        await newGoal.save(); // Saving goal to the database
        res.status(201).json(newGoal); // Returning the created goal
    } catch (error) {
        res.status(500).json({ message: 'Error setting goal', error });
    }
};

// Get goals for a user
const getGoals = async (req, res) => {
    const { userId } = req.params;
    try {
        const goals = await Goal.find({ userId }); // Finding goals by userId
        res.json(goals); // Returning the goals
    } catch (error) {
        res.status(500).json({ message: 'Error fetching goals', error });
    }
};

module.exports = { setGoal, getGoals }; // Exporting goal controller functions
