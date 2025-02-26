const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register); // Register admin (one-time use)
router.post('/login', login); // Login to get token

module.exports = router;