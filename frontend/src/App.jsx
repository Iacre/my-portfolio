import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import SecHeading from "./components/SecHeading";
import SkillCard from "./components/SkillCard";
import Showcase from "./components/Showcase";
import Blog from "./components/Blog";
import MusicPlayer from "./components/MusicPlayer";
import AnimatedButton from "./components/AnimatedButton";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import TestimonialCarousel from "./components/TestimonialCarousel";
import CV from "./components/cv";





const tracks = [
  { title: "Track 1", url: "./src/assets/musics/akon_smack_that_.mp3" },
  { title: "Track 2", url: "./src/assets/musics/ariel_wayz_juno_kizigenza_away.mp3" },
  { title: "Track 3", url: "./src/assets/musics/beyonce_halo_.mp3" },
  { title: "Track 4", url: "./src/assets/musics/coldplay_fix_you.mp3" },
  { title: "Track 5", url: "./src/assets/musics/ed_sheeran_perfect.mp3" },
  { title: "Track 6", url: "./src/assets/musics/eminem_love_the_way_you_lie.mp3" },
  { title: "Track 7", url: "./src/assets/musics/hello.mp3" },
  { title: "Track 8", url: "./src/assets/musics/khalid_young_dumb.mp3" },
  { title: "Track 9", url: "./src/assets/musics/lady_gaga_bad_romance.mp3" },
  { title: "Track 10", url: "./src/assets/musics/lauren_daigle_you_say.mp3" },
  { title: "Track 11", url: "./src/assets/musics/lil_nas_x_old_town_road.mp3" },
  { title: "Track 12", url: "./src/assets/musics/oceans_where_feet_may_fail.mp3" },
  { title: "Track 13", url: "./src/assets/musics/post_malone_swae_lee_sunflower.mp3" },
  { title: "Track 14", url: "./src/assets/musics/praise_feat._brandon_lake_chris_brown_chandler.mp3" },
  { title: "Track 15", url: "./src/assets/musics/rema_calm_down.mp3" },
  { title: "Track 16", url: "./src/assets/musics/rihanna_man_down.mp3" },
  { title: "Track 17", url: "./src/assets/musics/sia_snowman.mp3" },
  { title: "Track 18", url: "./src/assets/musics/sia_unstoppable.mp3" },
  { title: "Track 19", url: "./src/assets/musics/wiz_khalifa_see_you_again.mp3"}
  
];
const testimonials = [
  {
     image: "./src/assets/tes.png",
     name: "John Doe",
     position: "CEO, Example Corp",
     testimonial:"FIacre's work has been transformative for our business. His innovative solutions and creative designs have significantly improved our operations and brand presence.",
  },
  {
     image: "./src/assets/tes.png",
     name: "Jane Smith",
     position: "CTO, Tech Innovators",
     testimonial:"Working with FIacre has been a game-changer. His expertise in AI and machine learning has propelled our projects to new heights.",
  },
  {
     image: "./src/assets/tes.png",
     name: "Michael Johnson",
     position: "Creative Director, Design Studio",
     testimonial:"FIacre's creative vision and attention to detail are unparalleled. His designs have brought our brand to life in ways we never imagined.",
  }
]

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
        <main id="home" className="p-6 w-full max-w-screen-xl mx-auto">
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
           
          />
        </main>
{/* Portfolio div */}
        <div id="portfolio" className="mr-auto ml-10">
 {/* Portfolio Section */}
 <PortfolioSection />
        </div>
{/* about Section */}
<div id="about" className="m-auto">
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
<div id="skills" className=" px-2 md:px-8 py-4 w-full m-auto">
          <div className="mb-8">
            <h3 className="text-myhigh mb-4">Technical Development Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <SkillCard skill="Software Development" image="./src/assets/sod.jpg" />
              <SkillCard skill="AI and Machine Learning" image="./src/assets/ai.jpg" />
              <SkillCard skill="Cybersecurity" image="./src/assets/cyb.jpg" />
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-myhigh mb-4">Creative Design Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <SkillCard skill="UI/UX Design" image="./src/assets/ux.jpg" />
              <SkillCard skill="Graphic Design" image="./src/assets/de.jpg" />
              <SkillCard skill="Web Design" image="./src/assets/wb.jpg" />
            </div>
          </div>
          <div className="mb-4">
          <h3 className="text-myhigh mb-4">Business and Management skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
<div id="blog" className="px-2 md:px-8 py-8">
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
          {/* button div */}
<div className=" py-8 text-center">
<button  className="px-6 py-3 bg-transparent border border-blue-500 text-white rounded-full hover:bg-gra1 transition"
>
 explore More </button>
</div>
        </div>
        
<div className="px-2 md:px-8 py-8">
<SecHeading
title="Fiacre: My Resume"
heading="CV"
/>
</div>
 {/* resume button */}
 <div id="resume"><AnimatedButton text="Download My Resume" onClick={() => {}}  cvUrl="./src/assets/Fiacre ISHUKWE CV.pdf"/></div>

  {/* resume SECTION */}
  {/* title div */}
<div className="flex justify-center ">
  <div className="text-center py-8">
    <SecHeading
      title="Create And Download Your CV/ Resume For Free"
      heading="Resume Template"
    />
  </div>
</div>
  
  <div id="cv"><CV/></div>

 {/* title div */}
 <div className="flex justify-center ">
  <div className="text-center py-8">
    <SecHeading
      title="Loved by industry leaders"
      heading="Testimonial"
    />
  </div>
</div>

         {/* Testimonial Section */}
         <div id="testimonials" >
         <TestimonialCarousel testimonials={testimonials} />
         

        </div>

        
        {/* Subscription Section */}
        <div className="px-2 md:px-8 py-8 p-4 w-full max-w-screen-xl mx-auto mb-8">
          <Subscription heading="Subscribe to MY newsletter for updates and insights." />
        </div>

{/* title div */}
<div className="flex justify-center ">
  <div className="text-center py-8">
    <SecHeading
      title="Reach Out To Me Now"
      heading="CONTACT ME"
    />
  </div>
</div>
{/* contact div */}
 <div id="contact"><Contact /></div>
 {/* Footer Section */}
 <Footer />
  {/* Music Player Section */}
  <div className="px-2 md:px-8 py-8 ">
          <MusicPlayer tracks={tracks} />
        </div>
      </div>
    </div>
  );
}

export default App; 
