const express = require('express');
const Workout = require('../models/Workout');
const auth = require('../middleware/auth');

const router = express.Router();

// Log a new workout
router.post('/', auth, async (req, res) => {
    const workout = new Workout({ ...req.body, userId: req.user.id });
    await workout.save();
    res.status(201).send('Workout logged');
});

// Get workout history
router.get('/', auth, async (req, res) => {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
});

module.exports = router;
