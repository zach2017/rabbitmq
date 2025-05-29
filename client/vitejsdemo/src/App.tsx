import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider, useAuth } from './AuthContext';
import NavBar from './NavBar';
import Login from './Login';
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import ProtectedRoute from './ProtectedRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { authState } = useAuth();

  const renderContent = () => {
    if (!authState.isAuthenticated) {
      switch (currentPage) {
        case 'faq':
          return <FAQ />;
        default:
          return <Login />;
      }
    }

    // When authenticated, always show dashboard
    return (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    );
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Box sx={{
        display: 'flex',
        flex: 1,
        alignItems: authState.isAuthenticated ? 'flex-start' : 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: authState.isAuthenticated ? 0 : 2
      }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;