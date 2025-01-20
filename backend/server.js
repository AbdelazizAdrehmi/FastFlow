const express = require('express'); // Importing Express
const mongoose = require('mongoose'); // Importing Mongoose
const dotenv = require('dotenv'); // Importing dotenv for environment variables
const cors = require('cors'); // Importing CORS for cross-origin requests

dotenv.config(); // Loading environment variables

const app = express(); // Creating an Express application
const PORT = process.env.PORT || 5000; // Setting the port

// Middleware
app.use(cors()); // Enabling CORS
app.use(express.json()); // Parsing JSON bodies

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Importing routes
const workoutRoutes = require('./routes/workoutRoutes');
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

// Using routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
