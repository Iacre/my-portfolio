const express = require('express');
const router = express.Router();
const { subscribe, getSubscribers, unsubscribe } = require('../controllers/newsletterController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', auth, adminOnly, getSubscribers); // Admin only (view subscribers)
router.post('/', subscribe); // Public (anyone can subscribe)
router.delete('/:email', unsubscribe); // Public (anyone can unsubscribe)

module.exports = router;