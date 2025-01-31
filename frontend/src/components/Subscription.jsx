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
      className="flex flex-col md:flex-row md:h-40 justify-between items-center bg-gra3 p-8 rounded-mbr shadow-lg w-full max-w-screen-xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    whileHover={{ scale: 1.2, background: "linear-gradient(135deg, #05788D, #012127)" }}
    >
      <h2 className="text-white text-3xl font-bold mb-4 md:mb-0 md:pr-10">{heading}</h2>
      <div className="relative flex items-center w-full md:w-auto md:pl-8">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="p-4 pl-8 pr-20 rounded-full outline-none w-full md:w-96 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        <motion.button
          className="absolute right-0 mr-2 flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={handleSubscribe}
          whileHover={{ scale: 1.1, backgroundColor: '#BD6D29' }}
          transition={{ duration: 0.3 }}
        >
          Subscribe
          <FaLock className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

Subscription.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Subscription;