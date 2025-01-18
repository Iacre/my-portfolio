import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <motion.div 
    className="social-media bg-mysec p-4 rounded-lg shadow-lg text-center"
    whileHover={{ scale: 1.1, background: "linear-gradient(135deg, #FAC17F, #BD6D29)" }}
        transition={{ duration: 0.6 }}>
      <h2 className="text-xl font-bold mb-4">Follow me</h2>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
          <FaInstagram size={30} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <FaTiktok size={30} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
          <FaFacebook size={30} />
        </a>
      </div>
    </motion.div>
  );
};

export default SocialMedia;