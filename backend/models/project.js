const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL or path to image
  link: { type: String }, // Optional project link
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);