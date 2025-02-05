import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Testimonial = ({ image, name, position, testimonial }) => {
  return (
    <motion.div
      className="relative bg-mysec p-8 rounded-3xl shadow-lg text-center max-w-md mx-4 transform overflow-hidden"
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
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-500"
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

const TestimonialCarousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <Testimonial {...testimonials[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialCarousel;