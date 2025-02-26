require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // Add auth routes

// Test route
app.get('/', (req, res) => {
  res.send('fiacre Portfolio Backend API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});