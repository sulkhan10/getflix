import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const AuthChecker = ({ children }) => {
  const location = useLocation();
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    // Redirect to login if access_token is not present
    return <Navigate to="/login" />;
  }

  // Render the children if access_token is present
  return children;
};

export default AuthChecker;
