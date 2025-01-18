import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SkillCard = ({ skill, image }) => {
  return (
    <motion.div
      className="relative max-w-md h-48 bg-mysec rounded-lg p-6 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Skill Text */}
      <div className="text-center text-white text-xl font-bold">
        {skill}
      </div>

      {/* Hover Image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-mysec rounded-lg"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={skill}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

// Define PropTypes
SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillCard;