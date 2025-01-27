import  { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

const Subscription = ({ heading }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center bg-gra3 p-8 rounded-3xl shadow-lg max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-white text-2xl font-bold mb-4 md:mb-0">{heading}</h2>
      <div className="flex items-center w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="p-4 rounded-full outline-none w-full md:w-80"
        />
        <motion.button
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={handleSubscribe}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaLock className="mr-2" />
          Subscribe
        </motion.button>
      </div>
    </motion.div>
  );
};

Subscription.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Subscription;