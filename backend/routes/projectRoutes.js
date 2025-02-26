const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', getProjects); // Public
router.post('/', auth, adminOnly, createProject); // Admin only
router.put('/:id', auth, adminOnly, updateProject); // Admin only
router.delete('/:id', auth, adminOnly, deleteProject); // Admin only

module.exports = router;