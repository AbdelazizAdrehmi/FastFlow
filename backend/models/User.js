const mongoose = require('mongoose');

// User schema definition
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Export the User model
module.exports = mongoose.model('User ', UserSchema);
