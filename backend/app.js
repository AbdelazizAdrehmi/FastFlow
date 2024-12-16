const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');
const config = require('./config');

const app = express();

app.use(express.json());

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
