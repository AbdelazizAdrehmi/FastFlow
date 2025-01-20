const express = require('express'); // Importing Express
const router = express.Router(); // Creating a new router
const { addWorkout, getWorkouts } = require('../controllers/workoutController'); // Importing workout controller functions
const { authMiddleware } = require('../middleware/authMiddleware'); // Importing authentication middleware

// Route to add a new workout
router.post('/', authMiddleware, addWorkout); // POST request to add a workout

// Route to get all workouts for a user
router.get('/:userId', authMiddleware, getWorkouts); // GET request to fetch workouts by userId

module.exports = router; // Exporting workout routes
