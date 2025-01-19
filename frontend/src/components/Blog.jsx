
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Blog = ({ image, date, heading, paragraph, link }) => {
  return (
    <div className="blog  p-6 rounded-lg shadow-lg space-y-4">
      {/* Image Section */}
      <motion.div
        className="rounded-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={image} alt={heading} className="w-full h-auto object-cover" />
      </motion.div>

      {/* Date Section */}
      <motion.div
        className="bg-white p-2 rounded-full text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-600">{date}</p>
      </motion.div>

      {/* Heading Section */}
      <motion.div
        className="bg-white p-4 rounded-mbr"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
      </motion.div>

      {/* Paragraph Section */}
      <motion.div
        className="bg-white p-4 rounded-mbr"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-600">{paragraph}</p>
      </motion.div>

      {/* Button Section */}
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <a
          href={link}
          className="block w-full px-6 py-3 bg-gra2 text-white rounded-full hover:bg-gra1 transition"
        >
          Visit Full Page
        </a>
      </motion.div>
    </div>
  );
};

// Define PropTypes
Blog.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Blog;