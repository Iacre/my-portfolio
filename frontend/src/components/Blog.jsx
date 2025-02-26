import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Blog = ({ image, date, heading, paragraph, link }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={heading}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Date */}
        <p className="text-gray-500 text-sm">{date}</p>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-800">{heading}</h2>

        {/* Paragraph */}
        <p className="text-gray-600">{paragraph}</p>

        {/* Button */}
        <a
          href={link}
          className="block w-full text-center px-6 py-2 bg-gra2 text-white rounded-full hover:bg-gra1 transition"
        >
          Visit Full Page
        </a>
      </div>
    </motion.div>
  );
};

Blog.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Blog;