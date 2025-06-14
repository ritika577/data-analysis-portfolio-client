import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardMedia, Chip, Container, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectApi } from '../services/api';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log('Fetching projects...');
      setLoading(true);
      setError(null);
      
      try {
        console.log('Calling projectApi.getAll()...');
        const response = await projectApi.getAll();
        console.log('Projects API Response:', response);
        
        if (response && response.data) {
          console.log('Setting projects data:', response.data);
          setProjects(Array.isArray(response.data) ? response.data : []);
        } else {
          console.warn('Unexpected response format:', response);
          setProjects([]);
        }
      } catch (error) {
        console.error('Error in fetchProjects:', {
          message: error.message,
          status: error.status,
          url: error.url,
          responseData: error.responseData
        });
        setError(`Failed to load projects: ${error.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const projectCardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
    borderRadius: 2,
    overflow: 'hidden',
  };

  const projectImageStyles = {
    height: 200,
    width: '100%',
    objectFit: 'cover',
    backgroundColor: '#f5f5f5',
  };

  const projectContentStyles = {
    flexGrow: 1,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const projectTitleStyles = {
    fontSize: '1.25rem',
    fontWeight: 600,
    mb: 2,
  };

  const projectDescriptionStyles = {
    color: 'text.secondary',
    mb: 2,
    height: '100px',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 4,
  };

  const projectTechStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mb: 2,
  };

  const techChipStyles = {
    bgcolor: 'primary.light',
    color: 'white',
    fontSize: '0.875rem',
    py: 0.5,
    px: 1.5,
    borderRadius: 1,
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            color: 'primary.main'
          }}
        >
          Featured Projects
        </Typography>
        
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress color="primary" />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
        ) : projects.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            No projects to display at the moment.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {projects.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="body1" align="center" sx={{ py: 4 }}>
                  No projects available.
                </Typography>
              </Grid>
            ) : (
              projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id || project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card sx={projectCardStyles}>
                      <CardMedia
                        component="img"
                        sx={projectImageStyles}
                        image={project.image || 'https://via.placeholder.com/400x300'}
                        alt={project.title || 'Project'}
                        onError={(e) => {
                          const img = e.target;
                          img.onerror = null;
                          img.src = 'https://via.placeholder.com/400x300';
                        }}
                      />
                      <CardContent sx={projectContentStyles}>
                        <Typography sx={projectTitleStyles}>
                          {project.title || 'Untitled Project'}
                        </Typography>
                        <Typography sx={projectDescriptionStyles}>
                          {project.description || 'Project description not available'}
                        </Typography>
                        <Box sx={projectTechStyles}>
                          {(project.technologies || []).map((tech, index) => (
                            <Chip
                              key={index}
                              label={tech || 'Unknown'}
                              sx={techChipStyles}
                            />
                          ))}
                        </Box>
                        <Button
                          variant="contained"
                          size="medium"
                          fullWidth
                          sx={{
                            mt: 2,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'white',
                            '&:hover': {
                              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            },
                          }}
                          component="a"
                          href={project.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          disabled={!project.link}
                        >
                          {project.link ? 'View Project' : 'Link not available'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
