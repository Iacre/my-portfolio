
import PortfolioCard from "./PortfolioCard"; // Reusable card component

const PortfolioSection = () => {
  const projects = [
    {
      title: "Professional Website",
      description: "Add style and page routes for professional spaces.",
      image: "./assets/p3.png", // Update the image path
    },
    {
      title: "Mobile App/Web App",
      description: "Use cutting-edge frameworks to build responsive and feature-rich apps.",
      image: "./assets/p2.png",
    },
    {
      title: "AI Bot",
      description: "Let bots solve real-time problems by automating repetitive tasks.",
      image: "./assets/p1.png",
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
          <button className="mt-6 px-6 py-3 bg-transparent border border-blue-500 rounded-full text-white-500 hover:bg-gra2 hover:text-white transition">
            Explore All Projects
          </button>
        </div>
        {/* Cards Section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
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