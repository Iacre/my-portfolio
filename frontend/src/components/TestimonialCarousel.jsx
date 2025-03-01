import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonial = ({ image, name, position, testimonial }) => {
  return (
    <motion.div
      className="relative bg-mysec p-8 rounded-3xl shadow-lg text-center max-w-md mx-4 transform"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
      />
      
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-500 object-cover"
      />
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{testimonial}</p>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{position}</p>
    </motion.div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
};

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${API_URL}/testimonials`, { withCredentials: true });
        setTestimonials(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch testimonials');
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (loading) {
    return (
      <div className="relative w-full flex justify-center items-center py-16">
        <p className="text-gray-400">Loading testimonials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full flex justify-center items-center py-16">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="relative w-full flex justify-center items-center py-16">
        <p className="text-gray-400">No testimonials available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center items-center py-16">
      <div className="relative w-full max-w-md"> {/* Wrapper to reserve space */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Testimonial {...testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

TestimonialCarousel.propTypes = {};

export default TestimonialCarousel;