import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/skills`);
        setSkills(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills:', error);
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
          <Typography textAlign="center">Loading skills...</Typography>
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
