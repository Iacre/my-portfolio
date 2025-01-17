import PropTypes from "prop-types";

const PortfolioCard = ({ title, description, image }) => {
  return (
    <div className="relative max-w-sm shadow-lg overflow-visible bg-mysec rounded-lg">
      {/* Image Section */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Text Section (Overlapping) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gra1 p-4 w-11/12 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-white-800">{title}</h3>
        <p className="text-sm text-gray-900 mt-2">{description}</p>
      </div>
    </div>
  );
};

// Define PropTypes
PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PortfolioCard;
