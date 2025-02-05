import { FaPhone, FaEnvelope } from 'react-icons/fa';
import SocialMedia from "./SocialMedia";
import Subscription from "./Subscription";
import ScrollButton from "./ScrollButton";



const Footer = () => {
  return (
    
    <footer className="relative text-white p-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 " style={{ backgroundImage: "url('./assets/fb.jpg')" }}></div>
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-start mb-8 pb-8">
        {/* Left Section - Name/Logo and Buttons */}
        <div className="mb-8 md:mb-0 ">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold">FIACRE</h2>
            <p className="text-lg">The Solution to Your Problems, Bridging Gaps, and Unveiling Mysteries</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4">
            <button className="bg-gra1 text-white px-4 py-2 rounded-lg mb-4 md:mb-0 hover:text-yellow-400 hover:bg-gra2 transition">Get in Touch</button>
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
              <li><a href="#about" className="text-white hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">Portfolio</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">Resume</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">Skills</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">About</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">Contact</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">Blog</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-500">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Skills</h3>
            <ul className="space-y-2">
              <li>Front end</li>
              <li> Cybersecurity</li>
              <li>Back end</li>
              <li>DevOps</li>
              <li>version control Tools</li>
              <li>UI/UX</li>
              <li>AI/ML</li>
              <li>Creative design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Projects</h3>
            <ul className="space-y-2">
              <li>AI Model</li>
              <li>Web app</li>
              <li>Mobile App</li>
              <li>Organisation website</li>
              <li>Personal website</li>
              <li>Dating app</li>
              <li>Food delivery system</li>
              <li>Corporate website</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <ScrollButton/>

      {/* Copyright Section */}
      <div className="relative text-center mt-8 pt-8 border-t border-gray-500">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FIACRE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;