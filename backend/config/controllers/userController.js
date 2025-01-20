const User = require('../models/User'); // Importing User model
const bcrypt = require('bcryptjs'); // Importing bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Importing JWT for token generation

// Register a new user
const registerUser  = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hashing password
        const newUser  = new User({ username, password: hashedPassword, email });
        await newUser .save(); // Saving user to the database
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// User login
const loginUser  = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username }); // Finding user by username
        if (!user) return res.status(404).json({ message: 'User  not found' });

        const isMatch = await bcrypt.compare(password, user.password); // Comparing passwords
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generating token
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

module.exports = { registerUser , loginUser  }; // Exporting user controller functions
