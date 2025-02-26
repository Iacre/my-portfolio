import { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs`, { withCredentials: true });
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="relative bg-mysec rounded-l-3xl text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-gray-400">Loading blogs...</p>
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
          <h3 className="text-yellow-500 uppercase text-sm pb-4">Blog</h3>
          <h2 className="text-4xl font-bold mt-2">
            Latest <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500">Posts</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-transparent border border-blue-500 rounded-full text-white hover:bg-gra2 hover:text-white transition">
            Explore All Blogs
          </button>
        </div>
        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Blog
              key={blog._id} // Use _id from backend
              image={blog.image}
              date={new Date(blog.date).toLocaleDateString()} // Format date
              heading={blog.title} // Assuming 'title' from backend
              paragraph={blog.content} // Assuming 'content' from backend
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;