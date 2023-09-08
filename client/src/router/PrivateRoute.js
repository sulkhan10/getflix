import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const PrivateRoute = ({ element }) => {
    const access_token = localStorage.getItem("access_token");
    console.log("Access Token:", access_token);
  
    if (!access_token) {
      // Redirect to the login page if access_token is not found
      return <Navigate to="/login" />;
    }
  
    // Render the private component if access_token is found
    return (
      <Routes>
        <Route element={element} />
      </Routes>
    );
  };
  export default PrivateRoute;
