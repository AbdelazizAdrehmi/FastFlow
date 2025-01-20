const jwt = require('jsonwebtoken'); // Importing JWT

// Middleware to authenticate requests
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; // Getting token from headers
    if (!token) return res.status(403).json({ message: 'No token provided' }); // No token provided

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // Verifying token
        if (err) return res.status(500).json({ message: 'Failed to authenticate token' }); // Token verification failed
        req.userId = decoded.id; // Storing user ID in request
        next(); // Proceed to the next middleware
    });
};

module.exports = { authMiddleware }; // Exporting authentication middleware
