import SocialMedia from "./SocialMedia";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-transparent p-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-8">
      {/* Left Side - Contact Details */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
        <div className="flex items-center mb-4 text-white">
          <FaMapMarkerAlt className="text-blue-500 mr-4" />
          <p> Kigali, Rwanda</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <FaPhone className="text-blue-500 mr-4" />
          <p>+250 788 674 885</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <FaEnvelope className="text-blue-500 mr-4" />
          <p>fiacrepcc@gmail.com.com</p>
        </div>
        <hr className="border-t border-gray-500 my-8" />
        {/* Follow Me Component */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
            <SocialMedia />
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-white">Send a Message</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full p-2 border border-white rounded-lg bg-transparent text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full p-2 border border-white rounded-lg bg-transparent text-white"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="w-full p-2 border border-white rounded-lg bg-transparent text-white"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;