import PropTypes from "prop-types";

const AboutSection = ({ title, description, image, primaryButtonText, onPrimaryClick, }) => {
  // Split the title to underline only the first word
  const [firstWord, ...restWords] = title.split(" ");

  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between px-2 md:px-8 py-8 space-y-8 md:space-y-0">
      
      {/* left Text Section */}
      <div className="hero-text w-full md:w-1/2 md:pl-4 text-center md:text-left relative">
      <h3 className="text-yellow-500 uppercase text-sm pb-4 ml-6">About me</h3>
        <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-gra3"></div>
        <h1 className="text-4xl font-bold flex items-center leading-normal">
          <span className="ml-4">
            <span className="underline decoration-yellow-700 decoration-8">{firstWord}</span> {restWords.join(" ")}
          </span>
        </h1>
        
        <p className="text-gray-600 leading-relaxed mt-8">
          {description}
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button 
            className="px-6 py-3 bg-transparency text-white rounded-full hover:bg-gra2 transition"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
      {/* right Image Section */}
      <div className="hero-image w-full md:w-1/2 lg:mr-8">
        <img 
          src={image} 
          alt="Hero" 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

// Define PropTypes
AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

export default AboutSection;