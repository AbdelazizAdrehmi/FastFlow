const express = require('express'); // Importing Express
const router = express.Router(); // Creating a new router
const { setGoal, getGoals } = require('../controllers/goalController'); // Importing goal controller functions
const { authMiddleware } = require('../middleware/authMiddleware'); // Importing authentication middleware

// Route to set a new goal
router.post('/', authMiddleware, setGoal); // POST request to set a goal

// Route to get goals for a user
router.get('/:userId', authMiddleware, getGoals); // GET request to fetch goals by userId

module.exports = router; // Exporting goal routes
