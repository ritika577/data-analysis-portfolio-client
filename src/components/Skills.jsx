import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Chip, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { skillApi } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      console.log('Fetching skills...');
      setLoading(true);
      setError(null);
      
      try {
        console.log('Calling skillApi.getAll()...');
        const response = await skillApi.getAll();
        console.log('Skills API Response:', response);
        
        if (response && response.data) {
          console.log('Setting skills data:', response.data);
          setSkills(Array.isArray(response.data) ? response.data : []);
        } else {
          console.warn('Unexpected response format:', response);
          setSkills([]);
        }
      } catch (error) {
        console.error('Error in fetchSkills:', {
          message: error.message,
          status: error.status,
          url: error.url,
          responseData: error.responseData
        });
        setError(`Failed to load skills: ${error.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      py: 8, 
      bgcolor: 'background.paper',
      position: 'relative',
      zIndex: 1
    }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            color: 'primary.main',
            textAlign: 'center',
            mb: 6
          }}
        >
          My Skills
        </Typography>
        
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress color="primary" />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
        ) : skills.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            No skills to display at the moment.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {skills.map((category) => (
              <Grid item xs={12} md={6} key={category._id || category.category}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      boxShadow: 3
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      {category.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {category.skills.map((skill, index) => (
                        <Chip
                          key={`${category._id || category.category}-${index}`}
                          label={skill}
                          variant="outlined"
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'primary.dark',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Skills;
