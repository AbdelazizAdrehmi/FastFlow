const mongoose = require('mongoose'); // Importing Mongoose

// User schema definition
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

// User model
const User = mongoose.model('User ', userSchema);

module.exports = User; // Exporting User model
