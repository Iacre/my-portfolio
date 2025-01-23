
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedButton = ({ text, onClick }) => {
  return (
    <div className="relative flex justify-center items-center min-h-screen ">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute w-64 h-64 bg-blue-300 rounded-lg opacity-50"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute w-48 h-48 bg-blue-400 rounded-lg opacity-50"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute w-32 h-32 bg-blue-500 rounded-lg opacity-50"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        ></motion.div>
      </motion.div>

      {/* Button */}
      <motion.button
        className="relative px-8 py-4 bg-gra1 text-white text-2xl font-bold rounded-full shadow-lg"
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.button>
    </div>
  );
};

AnimatedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AnimatedButton;