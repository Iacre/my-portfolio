import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import SecHeading from "./components/SecHeading";
import SkillCard from "./components/SkillCard";
import Showcase from "./components/Showcase";
import Blog from "./components/Blog";
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
{/* title div */}
<div className="px-2 md:px-8 py-8">
<SecHeading
title="Fiacre A Wide Variety Of Skills"
heading="Skills And Experiences"
/>
</div>
{/* skills div */}
<div className="px-2 md:px-8 py-8">
          <div className="mb-8">
            <h3 className="text-myhigh mb-4">Technical Development Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillCard skill="Software Development" image="./src/assets/sod.jpg" />
              <SkillCard skill="AI and Machine Learning" image="./src/assets/ai.jpg" />
              <SkillCard skill="Cybersecurity" image="./src/assets/cyb.jpg" />
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-myhigh mb-4">Creative Design Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillCard skill="UI/UX Design" image="./src/assets/ux.jpg" />
              <SkillCard skill="Graphic Design" image="./src/assets/de.jpg" />
              <SkillCard skill="Web Design" image="./src/assets/wb.jpg" />
            </div>
          </div>
          <div className="mb-8">
          <h3 className="text-myhigh mb-4">Business and Management skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard skill="Leadership " image="./src/assets/led.jpg" />
          <SkillCard skill="Inovation & problem solving" image="./src/assets/cre.jpg" />
          <SkillCard skill="project Management" image="./src/assets/pr.jpg" />
          </div>
        </div>
</div>

{/* button div */}
<div className=" py-8 text-center">
<button  className="px-6 py-3 bg-transparent border border-blue-500 text-white rounded-full hover:bg-gra1 transition"
>
 explore More </button>
</div>
{/* showcase div */}
<div className="p-4 w-full max-w-screen-xl mx-auto mb-8">
  <Showcase/>
</div>

{/* title div */}
<div className="px-2 md:px-8 py-8">
<SecHeading
title="Fiacre: Latest from Blog"
heading="Blogs"
/>
</div>
{/* blog div */}
<div className="px-2 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Blog
              image="./src/assets/b3.png"
              date="May 25, 2021"
              heading="The Future of AI and Machine Learning"
              paragraph="Discover the latest trends in AI and machine learning and how they are shaping the future."
              link="https://google.com"
            />
            <Blog
              image="./src/assets/b1.png"
              date="June 15, 2021"
              heading="The Impact of Cybersecurity"
              paragraph="Learn how cybersecurity is essential for businesses and how it can protect your data and assets."
              link="https://google.com"
            />
            <Blog
              image="./src/assets/b2.png"
              date="July 5, 2021"
              heading="The Art of Creative Design"
              paragraph="Explore the world of creative design and how it can transform your business and brand."
              link="https://google.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
