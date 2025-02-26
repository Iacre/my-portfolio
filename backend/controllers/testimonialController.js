const Testimonial = require('../models/Testimonial');

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

exports.updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, position, testimonial, image } = req.body;
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { name, position, testimonial, image },
      { new: true }
    );
    if (!updatedTestimonial) return res.status(404).json({ message: 'Testimonial not found' });
    res.json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};