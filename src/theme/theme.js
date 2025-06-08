import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9D4EDD',
      light: '#C58BFF',
      dark: '#8537C4',
      contrastText: '#000'
    },
    secondary: {
      main: '#000',
      light: '#333',
      dark: '#000',
      contrastText: '#fff'
    },
    background: {
      default: '#000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#fff',
      secondary: '#b3b3b3',
    },
    divider: '#4d4d4d',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
      fontWeight: 700,
      color: 'primary.main',
      background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    h2: {
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
      fontWeight: 700,
      color: 'primary.main',
      background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    h3: {
      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
      fontWeight: 600,
      color: 'text.primary',
    },
    h4: {
      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
      fontWeight: 600,
      color: 'text.primary',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: 'text.primary',
    },
    subtitle1: {
      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
      color: 'primary.light',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          color: '#fff'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          backgroundColor: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
          '&:hover': {
            backgroundColor: 'linear-gradient(45deg, #8537C4 30%, #B770FF 90%)',
            boxShadow: '0 4px 12px rgba(157, 78, 221, 0.3)',
          },
        },
        text: {
          color: 'text.primary',
          '&:hover': {
            color: 'primary.main',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'background.paper',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          borderRadius: 12,
          color: 'text.primary'
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            maxWidth: '90%',
          },
          '@media (min-width: 900px)': {
            maxWidth: '80%',
          },
        },
      },
    },
  }
});
