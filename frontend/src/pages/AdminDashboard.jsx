import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = 'http://localhost:5002/api'; // Adjust if your backend uses a different port

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const editForm = useForm();

  useEffect(() => {
    fetchAllData();
  }, [navigate]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const config = { withCredentials: true }; // Use cookies instead of token header
      const [projRes, testRes, blogRes, contRes, subRes] = await Promise.all([
        axios.get(`${API_URL}/projects`, config).catch(err => { throw new Error('Projects: ' + err.message); }),
        axios.get(`${API_URL}/testimonials`, config).catch(err => { throw new Error('Testimonials: ' + err.message); }),
        axios.get(`${API_URL}/blogs`, config).catch(err => { throw new Error('Blogs: ' + err.message); }),
        axios.get(`${API_URL}/contact`, config).catch(err => { throw new Error('Contacts: ' + err.message); }),
        axios.get(`${API_URL}/newsletter`, config).catch(err => { throw new Error('Newsletter: ' + err.message); }),
      ]);
      setProjects(projRes.data);
      setTestimonials(testRes.data);
      setBlogs(blogRes.data);
      setContacts(contRes.data);
      setSubscribers(subRes.data);
      setError('');
    } catch (err) {
      console.error('Fetch Error:', err.message);
      setError(err.message || 'Failed to fetch data');
      if (err.response?.status === 401 || err.response?.status === 403) {
        navigate('/admin/login'); // Redirect to login if unauthorized
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      navigate('/admin/login');
      toast.success('Logged out successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to logout');
      toast.error(err.response?.data?.message || 'Failed to logout');
    }
  };

  const handleAdd = async (data) => {
    setModalLoading(true);
    try {
      await axios.post(`${API_URL}/${activeTab}`, data, { withCredentials: true });
      setShowAddModal(false);
      reset();
      fetchAllData();
      toast.success(`Added ${activeTab} successfully!`);
    } catch (err) {
      setError(err.response?.data?.message || `Failed to add ${activeTab}`);
      toast.error(err.response?.data?.message || `Failed to add ${activeTab}`);
    } finally {
      setModalLoading(false);
    }
  };

  const handleEdit = async (data) => {
    setModalLoading(true);
    try {
      await axios.put(`${API_URL}/${activeTab}/${editItem._id || editItem.email}`, data, { withCredentials: true });
      setShowEditModal(false);
      setEditItem(null);
      fetchAllData();
      toast.success(`Updated ${activeTab} successfully!`);
    } catch (err) {
      setError(err.response?.data?.message || `Failed to edit ${activeTab}`);
      toast.error(err.response?.data?.message || `Failed to edit ${activeTab}`);
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (resource, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${resource}?`)) return;
    try {
      await axios.delete(`${API_URL}/${resource}/${id}`, { withCredentials: true });
      fetchAllData();
      toast.success(`Deleted ${resource} successfully!`);
    } catch (err) {
      setError(err.response?.data?.message || `Failed to delete ${resource}`);
      toast.error(err.response?.data?.message || `Failed to delete ${resource}`);
    }
  };

  const openAddModal = () => {
    reset();
    setShowAddModal(true);
  };

  const openEditModal = (item) => {
    setEditItem(item);
    editForm.reset(item);
    setShowEditModal(true);
  };

  const renderFields = () => {
    const fields = {
      projects: ['title', 'description', 'image', 'link'],
      testimonials: ['name', 'position', 'testimonial', 'image'],
      blogs: ['title', 'content', 'image', 'link'],
      contacts: ['name', 'email', 'message'],
      subscribers: ['email'],
    };
    return fields[activeTab] || [];
  };

  const renderTabContent = () => {
    const dataMap = {
      projects,
      testimonials,
      blogs,
      contacts,
      subscribers,
    };
    return (
      <ResourceTable
        title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        data={dataMap[activeTab]}
        fields={renderFields()}
        onAdd={openAddModal}
        onEdit={openEditModal}
        onDelete={(id) => handleDelete(activeTab, id)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && <p className="text-gray-400">Loading...</p>}

        <div className="flex space-x-4 mb-6 border-b border-gray-700">
          {['projects', 'testimonials', 'blogs', 'contacts', 'subscribers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-4 ${activeTab === tab ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {!loading && renderTabContent()}

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
              <form onSubmit={handleSubmit(handleAdd)}>
                {renderFields().map((field) => (
                  <div key={field} className="mb-4">
                    <input
                      {...register(field, { required: `${field} is required` })}
                      type={field === 'email' ? 'email' : 'text'}
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
                      placeholder={`Enter ${field}`}
                    />
                    {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field].message}</p>}
                  </div>
                ))}
                <div className="flex justify-end space-x-2">
                  <button
                    type="submit"
                    disabled={modalLoading}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition disabled:bg-green-300 flex items-center"
                  >
                    {modalLoading ? (
                      <span className="animate-spin mr-2">⌀</span>
                    ) : null}
                    Save
                  </button>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {showEditModal && editItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Edit {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
              <form onSubmit={editForm.handleSubmit(handleEdit)}>
                {renderFields().map((field) => (
                  <div key={field} className="mb-4">
                    <input
                      {...editForm.register(field, { required: `${field} is required` })}
                      type={field === 'email' ? 'email' : 'text'}
                      defaultValue={editItem[field]}
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
                      placeholder={`Enter ${field}`}
                    />
                    {editForm.formState.errors[field] && (
                      <p className="text-red-500 text-sm mt-1">{editForm.formState.errors[field].message}</p>
                    )}
                  </div>
                ))}
                <div className="flex justify-end space-x-2">
                  <button
                    type="submit"
                    disabled={modalLoading}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:bg-blue-300 flex items-center"
                  >
                    {modalLoading ? (
                      <span className="animate-spin mr-2">⌀</span>
                    ) : null}
                    Update
                  </button>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  );
};

const ResourceTable = ({ title, data, fields, onAdd, onEdit, onDelete }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <button
        onClick={onAdd}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Add New
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full bg-gray-800 rounded-lg">
        <thead>
          <tr className="bg-gray-700">
            {fields.map((field) => (
              <th key={field} className="p-3 text-left">{field.charAt(0).toUpperCase() + field.slice(1)}</th>
            ))}
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={fields.length + 1} className="p-3 text-center text-gray-400">No {title.toLowerCase()} found</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id || item.email} className="border-t border-gray-700">
                {fields.map((field) => (
                  <td key={field} className="p-3">{item[field]}</td>
                ))}
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item._id || item.email)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

ResourceTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AdminDashboard;