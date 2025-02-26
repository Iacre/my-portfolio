import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/admin/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a React node
};

export default PrivateRoute;