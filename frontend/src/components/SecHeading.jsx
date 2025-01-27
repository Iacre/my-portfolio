import PropTypes from "prop-types";


const SecHeading = ({ title,heading }) => {
  // this Split title to underline only first word
  const [firstWord, ...restWords] = title.split(" ");
  

  return (
    <>
      {/* my title sec */}
      <div className="hero-text w-full  md:pl-4 text-center md:text-left relative">
      <h3 className="text-yellow-500 uppercase text-center text-sm pb-4 ml-6">{heading}</h3>
        <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-gra3"></div>
        <h1 className="text-4xl font-bold flex items-center leading-normal">
          <span className="ml-4">
            <span className="underline decoration-yellow-700 decoration-8">{firstWord}</span> {restWords.join(" ")}
          </span>
        </h1>
        </div>
    </>
  );
        };
        // Define PropTypes
        SecHeading.propTypes = {
          title: PropTypes.string.isRequired,
          heading: PropTypes.string.isRequired,
        };

        export default SecHeading;