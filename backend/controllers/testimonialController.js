const Testimonial = require('../models/tesmonial');

exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createTestimonial = async (req, res) => {
  const { name, position, testimonial, image } = req.body;
  try {
    const newTestimonial = new Testimonial({ name, position, testimonial, image });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};