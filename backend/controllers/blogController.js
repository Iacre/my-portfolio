const Blog = require('../models/blog');

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createBlog = async (req, res) => {
  const { title, image, content, link } = req.body;
  try {
    const blog = new Blog({ title, image, content, link });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};