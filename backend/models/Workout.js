const mongoose = require('mongoose');

// Workout schema definition
const WorkoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    calories: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

// Export the Workout model
module.exports = mongoose.model('Workout', WorkoutSchema);
