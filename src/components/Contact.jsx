import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Link,
  Container,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Get contact information from environment variables
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_PROFILE || 'https://www.linkedin.com/in/ritika-chauhan-1370a9211/';
  const email = import.meta.env.VITE_EMAIL || 'chauhanritika577@gmail.com';

  return (
    <Box 
      component="section" 
      id="contact"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 8,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Get In Touch
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.6
              }}
            >
              Feel free to reach out to me for any questions or opportunities. I'll be happy to connect!
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={3} 
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box 
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <EmailIcon sx={{ fontSize: 32, color: 'primary.contrastText' }} />
                </Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  align="center" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Email Me
                </Typography>
                <Link 
                  href={`mailto:${email}`} 
                  color="inherit"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'color 0.3s ease',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  {email}
                </Link>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={3} 
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box 
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    bgcolor: '#0077B5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 32, color: 'white' }} />
                </Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  align="center" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  LinkedIn
                </Typography>
                <Link 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': {
                      color: '#0077B5',
                    },
                    transition: 'color 0.3s ease',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  Ritika Chauhan
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      
      <Box 
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          py: 2,
          bgcolor: 'background.default',
          borderTop: '1px solid',
          borderColor: 'divider',
          zIndex: 1
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {new Date().getFullYear()} Ritika Chauhan. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
