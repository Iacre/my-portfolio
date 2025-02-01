import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  // Function to check scroll position
  const checkScrollPosition = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true); // User is at the top
    } else {
      setIsAtTop(false); // User has scrolled down
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Function to handle button click
  const handleClick = () => {
    if (isAtTop) {
      // Scroll to the bottom of the page
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 left-8 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300 group"
      title={isAtTop ? "Go Below" : "Back to Top"}
    >
      {isAtTop ? (
        <FaArrowDown className="text-white" />
      ) : (
        <FaArrowUp className="text-white" />
      )}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
        {isAtTop ? "Go Below" : "Back to Top"}
      </span>
    </button>
  );
};

export default ScrollButton;