const express = require('express');
const router = express.Router();
const { register, login, logout, getCurrentUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout); // Could change to GET if preferred
router.get('/me', getCurrentUser); // New endpoint

module.exports = router;