const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  link: { type: String }, // Optional external link
});

module.exports = mongoose.model('Blog', blogSchema);