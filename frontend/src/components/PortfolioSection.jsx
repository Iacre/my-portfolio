import { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`, { withCredentials: true });
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="relative bg-mysec rounded-l-3xl text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative bg-mysec rounded-l-3xl text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-mysec rounded-l-3xl text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-yellow-500 uppercase text-sm pb-4">Portfolio</h3>
          <h2 className="text-4xl font-bold mt-2">
            My <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500">Recent Works</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-transparent border border-blue-500 rounded-full text-white hover:bg-gra2 hover:text-white transition">
            Explore All Projects
          </button>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <PortfolioCard
              key={project._id} // Use _id from backend
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;