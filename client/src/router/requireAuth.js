// requireAuth.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const requireAuth = (Component) => (props) => {
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    // Redirect to the login page if the user is not authenticated
    navigate('/login');
    return null; // Return null to prevent rendering the protected component
  }

  // Render the component if the user is authenticated
  return <Component {...props} />;
};

export default requireAuth;
