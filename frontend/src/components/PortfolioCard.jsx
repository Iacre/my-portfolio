import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const PortfolioCard = ({ title, description, image,link }) => {
  return (
    <motion.div
      className="relative max-w-sm bg-mysec rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <motion.div
        className="relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="p-4 bg-gradient-to-r from-[#05788D] to-[#012127] text-white rounded-b-lg"
        whileHover={{ background: 'linear-gradient(135deg, #FAC17F, #BD6D29)' }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm mt-2 text-gray-200">{description}</p> {/* Improved contrast */}
        <a className="text-sm mt-2 " href={link}>Visit it </a> {/* Improved contrast */}
      </motion.div>
    </motion.div>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioCard;