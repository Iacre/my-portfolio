
import PortfolioCard from "./PortfolioCard"; // Reusable card component

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Professional Website",
      description: "Add style and page routes for professional spaces.",
      image: "./src/assets/p3.png", // Update the image path
    },
    {
      id: 2,
      title: "Mobile App/Web App",
      description: "Use cutting-edge frameworks to build responsive and feature-rich apps.",
      image: "./src/assets/p2.png",
    },
    {
      id: 3,
      title: "AI Bot",
      description: "Let bots solve real-time problems by automating repetitive tasks.",
      image: "./src/assets/p1.png",
    },
  ];

  return (
    <section className=" relative bg-mysec rounded-l-3xl text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-yellow-500 uppercase text-sm pb-4">Portfolio</h3>
          <h2 className="text-4xl font-bold mt-2">
            My <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500">Recent Works</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-transparent border border-gray-500 rounded-full text-white-500 hover:bg-gra2 hover:text-white transition">
            Explore All Projects
          </button>
        </div>
        <div className=" absolute left-0 top-[90%] w-1/4 ">
          <img src=".\src\assets\pc.png" alt="fiacre coding, someone coding, profesional coding, sitting on machine, spmeone coding"  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full"/>
        </div>

        {/* Cards Section */}
        <div className="absolute bottom-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 right-0 top-[90%] gap-3 w-3/4 transform -translate-y-1/2 ">
          
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;