const express = require('express');
const Workout = require('../models/Workout');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (rq, rs) => {
    const workout = new Workout({ ...rq.body, userId: rq.user.id });
    await workout.save();
    res.status(201).send('Workout logged');
};

router.get('/', auth, async (rq, rs) => {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
};

module.exports = roter;
