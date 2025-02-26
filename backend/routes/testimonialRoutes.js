const express = require('express');
const router = express.Router();
const { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', getTestimonials); // Public
router.post('/', auth, adminOnly, createTestimonial); // Admin only
router.put('/:id', auth, adminOnly, updateTestimonial); // Admin only
router.delete('/:id', auth, adminOnly, deleteTestimonial); // Admin only

module.exports = router;