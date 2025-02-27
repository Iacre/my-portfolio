import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('https://api.fiacre.tech/api/auth/me', {
          withCredentials: true, // Send the cookie
        });
        console.log('Auth check response:', response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.log('Auth check failed:', error.response?.data || error.message);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;