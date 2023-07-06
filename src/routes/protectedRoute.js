import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ isAuthenticated,children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const PublicRoute = ({ isAuthenticated,children }) => {
  if (!isAuthenticated) {
    return children;
  }else{
    return <Navigate to="/dashboard" />;
  }
};