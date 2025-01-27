import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ image, name, position, testimonial }) => {
  return (
    <motion.div
      className="relative bg-mysec p-8 rounded-3xl shadow-lg text-center max-w-md mx-4 transform"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
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

export default Testimonial;