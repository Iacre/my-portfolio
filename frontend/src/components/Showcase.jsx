
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div 
    className="showcase bg-gra2 rounded-mbr p-6 h-40 flex flex-col md:flex-row justify-around items-center text-white shadow-lg"
    whileHover={{ scale: 1.2, background: "linear-gradient(135deg, #05788D, #012127)" }}
    transition={{ duration: 0.6 }}>
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-4xl font-bold">
          <CountUp end={99} duration={8} /><sup>%</sup>
        </h1>
        <p className="text-lg">Happy Clients</p>
      </div>
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-4xl font-bold">
          <CountUp end={45} duration={8} /><sup>+</sup>
        </h1>
        <p className="text-lg">Projects</p>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold">
          <CountUp end={7} duration={8} /><sup>+</sup>
        </h1>
        <p className="text-lg">Years of Experience</p>
      </div>
    </motion.div>
  );
};

export default Showcase;