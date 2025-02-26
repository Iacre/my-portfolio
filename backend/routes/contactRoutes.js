const express = require('express');
const router = express.Router();
const { createContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', auth, adminOnly, getContacts); // Admin only (view messages)
router.post('/', createContact); // Public (anyone can send a message)
router.put('/:id', auth, adminOnly, updateContact); // Admin only
router.delete('/:id', auth, adminOnly, deleteContact); // Admin only

module.exports = router;