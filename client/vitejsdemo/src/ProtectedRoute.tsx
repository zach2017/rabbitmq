import React, { ReactNode } from 'react';
import { useAuth } from './AuthContext';
import Login from './Login';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authState } = useAuth();
  
  if (!authState.isAuthenticated) {
    return <Login />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;