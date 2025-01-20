const mongoose = require('mongoose'); // Importing Mongoose

// Goal schema definition
const goalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    steps: { type: Number, required: true }, // Daily steps goal
    calories: { type: Number, required: true }, // Calories to burn goal
});

// Goal model
const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal; // Exporting Goal model
