require('dotenv').config({
  path: process.env.NODE_ENV === 'production'
});
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const app = express();

app.use(cors({ origin: 'https://fiacre.tech', credentials: true }));
app.use(express.json());
app.use(cookieParser());

connectDB();

// Base API route
app.get('/api/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err.message, err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});