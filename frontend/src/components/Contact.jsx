import { useState } from 'react';
import SocialMedia from './SocialMedia';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // New state for success message

  const API_URL = import.meta.env.VITE_API_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null); // Reset success message
    try {
      const response = await axios.post(`${API_URL}/contact`, formData, { withCredentials: true });
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
      setSuccess(response.data.message || 'Message sent successfully!'); // Set success message
      toast.success(response.data.message || 'Message sent successfully!');
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(null), 5000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message');
      toast.error(err.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-transparent p-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-8">
      {/* Left Side - Contact Details */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
        <div className="flex items-center mb-4 text-white">
          <FaMapMarkerAlt className="text-blue-500 mr-4" />
          <p>Kigali, Rwanda</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <FaPhone className="text-blue-500 mr-4" />
          <p>+250 788 674 885</p>
        </div>
        <div className="flex items-center mb-4 text-white">
          <FaEnvelope className="text-blue-500 mr-4" />
          <p>fiacrepcc@gmail.com.com</p>
        </div>
        <hr className="border-t border-gray-500 my-8" />
        {/* Follow Me Component */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
          <SocialMedia />
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-white">Send a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-white rounded-lg bg-transparent text-white"
              placeholder="Your Name"
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-white rounded-lg bg-transparent text-white"
              placeholder="Your Email"
              disabled={loading}
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-white rounded-lg bg-transparent text-white"
              placeholder="Your Message"
              rows="5"
              disabled={loading}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </motion.button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && (
          <p className="text-green-500 mt-2 bg-green-100 p-2 rounded-lg text-center">
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;