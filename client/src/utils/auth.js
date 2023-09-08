// utils/auth.js
export const hasAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken; // Returns true if access token exists, false otherwise
  };
  