import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SocialMedia from "./SocialMedia";
import Subscription from "./Subscription";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <footer className="relative text-white p-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('./assets/fb.jpg')" }}></div>
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-start mb-8 pb-8">
        {/* Left Section - Name/Logo and Buttons */}
        <div className="mb-8 md:mb-0">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold">FIACRE</h2>
            <p className="text-lg">The Solution to Your Problems, Bridging Gaps, and Unveiling Mysteries</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
            <button className="bg-gra1 text-white px-4 py-2 rounded-lg mb-4 md:mb-0 hover:text-yellow-400 hover:bg-gra2 transition">
              Get in Touch
            </button>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-white" />
              <span>+250 788 674 885</span>
              <FaEnvelope className="text-white ml-8" />
              <span>fiacrepcc@gmail.com</span>
            </div>
          </div>
          <hr className="border-t border-gray-500 my-4 w-full" />
          <div><SocialMedia /></div>
          <div className="w-full max-w-screen-md mx-auto mt-8">
            <Subscription heading="Subscribe to MY newsletter for updates and insights." />
          </div>
        </div>

        {/* Right Section - Lists */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">About Me</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#home" className="text-white hover:text-yellow-500">Home</Link>
              </li>
              <li>
                <Link to="/#portfolio" className="text-white hover:text-yellow-500">Portfolio</Link>
              </li>
              <li>
                <Link to="/#resume" className="text-white hover:text-yellow-500">Resume</Link>
              </li>
              <li>
                <Link to="/#skills" className="text-white hover:text-yellow-500">Skills</Link>
              </li>
              <li>
                <Link to="/#about" className="text-white hover:text-yellow-500">About</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-white hover:text-yellow-500">Contact</Link>
              </li>
              <li>
                <Link to="/#blog" className="text-white hover:text-yellow-500">Blog</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-white hover:text-yellow-500">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Skills</h3>
            <ul className="space-y-2">
              <li>Front end</li>
              <li>Cybersecurity</li>
              <li>Back end</li>
              <li>DevOps</li>
              <li>Version Control Tools</li>
              <li>UI/UX</li>
              <li>AI/ML</li>
              <li>Creative Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Projects</h3>
            <ul className="space-y-2">
              <li>AI Model</li>
              <li>Web App</li>
              <li>Mobile App</li>
              <li>Organisation Website</li>
              <li>Personal Website</li>
              <li>Dating App</li>
              <li>Food Delivery System</li>
              <li>Corporate Website</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <ScrollButton />

      {/* Copyright Section */}
      <div className="relative text-center mt-8 pt-8 border-t border-gray-500">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} FIACRE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;