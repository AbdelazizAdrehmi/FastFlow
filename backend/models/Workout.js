const mongoose = require('mongoose'); // Importing Mongoose

// Workout schema definition
const workoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    calories: { type: Number, required: true }, // Calories burned
    date: { type: Date, default: Date.now }, // Date of workout
});

// Workout model
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; // ```javascript
// Exporting Workout model
module.exports = Workout; 
