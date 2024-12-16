const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('User  created');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET);
    res.json({ token });
});

module.exports = router;
