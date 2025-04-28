/* This code should be placed in a separate file, like theme.js */

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#df4747',
      light: '#e87373',
      dark: '#c63030',
    },
    secondary: {
      main: '#333333',
      light: '#555555',
      dark: '#111111',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          padding: '8px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#df4747',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#c63030',
          },
        },
        outlined: {
          borderColor: '#df4747',
          color: '#df4747',
          '&:hover': {
            backgroundColor: 'rgba(223, 71, 71, 0.04)',
            borderColor: '#c63030',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0px 16px 40px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-8px)',
          },
        },
      },
    },
  },
});

export default theme;