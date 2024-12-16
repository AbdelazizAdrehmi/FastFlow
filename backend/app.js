// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');
const config = require('./config');

// Initialize the app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
