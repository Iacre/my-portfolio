import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PortfolioCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="relative max-w-sm shadow-lg overflow-visible bg-mysec rounded-lg mb-16 sm:mb-12" // Added bottom padding
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <motion.div
        className="relative overflow-hidden" // Added overflow-hidden
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </motion.div>

      {/* Text Section - Changed positioning */}
      <motion.div
        className="relative mx-4 -mt-8 p-4 rounded-lg shadow-lg" // Changed to relative positioning
        animate={{ background: "linear-gradient(135deg, #05788D, #012127)" }}
        whileHover={{ background: "linear-gradient(135deg, #FAC17F, #BD6D29)" }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold text-white-800">{title}</h3>
        <p className="text-sm text-gray-900 mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PortfolioCard;