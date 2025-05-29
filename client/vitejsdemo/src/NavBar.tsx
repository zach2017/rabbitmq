import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ExitToApp as LogoutIcon,
  Help as HelpIcon
} from '@mui/icons-material';
import { useAuth } from './AuthContext';

interface NavBarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage, setCurrentPage }) => {
  const { authState, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <DashboardIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard App
        </Typography>
        
        {authState.isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" onClick={() => setCurrentPage('dashboard')}>
              Dashboard
            </Button>
            <Typography variant="body2">
              Welcome, {authState.user?.username}
            </Typography>
            <Button color="inherit" onClick={logout} startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              color="inherit" 
              onClick={() => setCurrentPage('faq')}
              startIcon={<HelpIcon />}
            >
              FAQ
            </Button>
            <Button 
              color="inherit" 
              onClick={() => setCurrentPage('login')}
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;