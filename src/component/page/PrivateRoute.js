import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element }) => {
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); 

  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;