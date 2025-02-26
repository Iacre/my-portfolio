const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', getBlogs); // Public
router.post('/', auth, adminOnly, createBlog); // Admin only
router.put('/:id', auth, adminOnly, updateBlog); // Admin only
router.delete('/:id', auth, adminOnly, deleteBlog); // Admin only

module.exports = router;