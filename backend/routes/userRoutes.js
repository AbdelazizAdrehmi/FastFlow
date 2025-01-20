const express = require('express'); // Import ```javascript
const router = express.Router(); // Creating a new router
const { registerUser , loginUser  } = require('../controllers/userController'); // Importing user controller functions

// Route for user registration
router.post('/register', registerUser ); // POST request to register a new user

// Route for user login
router.post('/login', loginUser ); // POST request for user login

module.exports = router; // Exporting user routes
