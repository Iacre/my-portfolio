const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};