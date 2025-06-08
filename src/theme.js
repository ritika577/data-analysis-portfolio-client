import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#212121',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#212121',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#212121',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 12px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});
