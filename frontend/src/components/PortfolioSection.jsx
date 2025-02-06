
import PortfolioCard from "./PortfolioCard"; // Reusable card component

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Professional Website",
      description: "Add style and page routes for professional spaces.",
      image: "./assets/p3.png", // Update the image path
    },
    {
      id: 2,
      title: "Web App",
      description: "Use cutting-edge frameworks to build responsive and feature-rich apps.",
      image: "./assets/p2.png",
    },
    {
      id: 3,
      title: "AI model",
      description: "AI Model that do facial recognition and rate the beauty between two images .",
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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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