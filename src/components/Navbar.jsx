import { useState } from "react";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Home",
    "Portfolio",
    "Resume",
    "Testimonials",
    "Skills",
    "Blog",
    "About",
  ];

  return (
    <nav className="relative w-full text-white px-6 py-4 shadow-md">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-between">
        <div className="text-lg font-bold text-center border p-3 border-gray-500 rounded-full">
          <h1 className="text-xl">
            <span className="text-myhigh">FIACRE</span>
          </h1>
          <p className="text-sm"><span className="text-myhigh">F</span>luent  <span className="text-myhigh"> I</span>T<span className="text-myhigh"> A</span>nd <span className="text-myhigh">CRE</span> ativity</p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden mt-2" onClick={toggleMenu}>
          <MdMenu className="h-8 w-8 cursor-pointer" />
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-center gap-8 mt-6 border-b border-gray-800 pt-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="group relative cursor-pointer text-base hover:text-yellow-400"
          > <a className="text-inherit" href={`#${item.toLowerCase()}`}>
            {item}</a>
            {/* Hover underline */}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
        <li className="group relative cursor-pointer text-base hover:text-mysec mb-2">
        <a href="#cv"><button className="px-4 py-2 bg-gra1 text-black rounded-full hover:bg-gra2 transition">
            Create CV
          </button> </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="lg:hidden bg-gray-800 text-white absolute top-full left-0 right-0 z-50"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-base hover:text-yellow-400"
                onClick={toggleMenu}
              >
                {item}
              </li>
            ))}
            <li onClick={toggleMenu}>
            <a href="#contact"> <button className="px-4 py-0 bg-gra2 text-white rounded-full hover:bg-mysec transition">
                Contact
              </button> </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;