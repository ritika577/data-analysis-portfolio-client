import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DataObjectIcon from '@mui/icons-material/DataObject';
import InsightsIcon from '@mui/icons-material/Insights';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  const features = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Data Analysis',
      description: 'Transforming raw data into meaningful insights'
    },
    {
      icon: <DataObjectIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Data Visualization',
      description: 'Creating intuitive dashboards and reports'
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Statistical Analysis',
      description: 'Applying statistical methods to solve business problems'
    }
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      url: '#',
      label: 'GitHub'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      url: '#',
      label: 'LinkedIn'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      color: 'text.primary',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: 0,
      }
    }}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 8 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8} textAlign="center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                      fontSize: { xs: '2rem', md: '3rem' },
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2,
                      lineHeight: 1.2
                    }}
                  >
                    Ritika Chauhan
                  </Typography>
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontSize: { xs: '1.25rem', md: '1.75rem' },
                      mb: 3,
                      background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Aspiring Data Analyst & Data Science Enthusiast
                  </Typography>
                  <Typography 
                    variant="h5" 
                    paragraph 
                    sx={{ 
                      fontSize: { xs: '1.1rem', md: '1.4rem' },
                      mb: 6,
                      maxWidth: '800px',
                      mx: 'auto',
                      lineHeight: 1.6,
                      background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    I explore data, learn every day, and turn insights into real impact.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ 
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #8537C4 30%, #B770FF 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      },
                      transition: 'all 0.3s ease',
                      mb: 8
                    }}
                    component="a"
                    href="/projects"
                  >
                    View My Projects
                  </Button>
                </motion.div>
              </Grid>
            </Grid>

            <Box sx={{ py: 8 }}>
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  textAlign: 'center',
                  mb: 6,
                  fontWeight: 700,
                  color: '#8a2be2'
                }}
              >
                What I Do
              </Typography>
              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          textAlign: 'center',
                          borderRadius: 2,
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)'
                          }
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          {feature.icon}
                          <Typography 
                            variant="h4" 
                            component="h3" 
                            gutterBottom 
                            sx={{ mt: 2, fontWeight: 600 }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            color="text.secondary" 
                            sx={{ fontSize: '1.1rem' }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
        <Box sx={{ 
          py: 4, 
          bgcolor: '#1a1a1a',
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          borderTop: '1px solid #333',
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}>
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              sx={{
                p: 2,
                bgcolor: '#2d2d2d',
                '&:hover': {
                  bgcolor: '#9c27b0',
                  color: 'white'
                }
              }}
            >
              {link.icon}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
