import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App bg-mypri min-h-screen w-full relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('./src/assets/tx.png')] bg-repeat bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Sections */}
        <main className="p-6 w-full max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold text-center">
            Welcome to Fiacre&apos;s Portfolio
          </h1>

          {/* Hero Section */}
          <HeroSection
            title="FIacre: Innovating Solutions, Crafting the Future"
            description="CEO, Software Developer, Cybersecurity Expert, AI & ML Specialist, and Creative Designer
Welcome to my world of innovation and creativity. As the CEO of EdgeReach Tech, I specialize in developing cutting-edge software solutions, ensuring cybersecurity, and leveraging AI and  ML to solve complex problems. With a passion for design and a focus on creativity, I transform ideas into impactful, real-world applications. Explore my portfolio to discover how I merge technology and creativity to deliver unique solutions."
            image="./src/assets/herofia1.png"
            primaryButtonText="Contact Me"
            secondaryButtonText="My Resume"
            onPrimaryClick={() => alert("Contact Me clicked!")}
            onSecondaryClick={() => alert("Learn More clicked!")}
          />
        </main>
{/* Portfolio div */}
        <div className="mr-auto ml-10">
 {/* Portfolio Section */}
 <PortfolioSection />
        </div>
{/* about Section */}
<div className="m-auto">
  <AboutSection
  title="FIacre: The Solution to Your Problems, Bridging Gaps, and Unveiling Mysteries"
  description="Transforming Businesses and Enhancing Lives with Innovative Solutions
In the ever-evolving world of technology and design, I am here to be the solution to your problems, filling the gaps and uncovering the secrets that will elevate your business and life. With expertise in software development, cybersecurity, AI, ML, and creative design, I am dedicated to making your vision a reality. Let’s explore how my innovative approach can make a lasting impact on your success."
  image="./src/assets/a.png"
  primaryButtonText="Learn More"
  onPrimaryClick={() => alert("Contact Me clicked!")}
  />
</div>

      </div>
    </div>
  );
}

export default App;
