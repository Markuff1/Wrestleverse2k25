import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const username = localStorage.getItem('username');
  return username ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
