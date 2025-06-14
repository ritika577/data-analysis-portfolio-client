import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  CardMedia, 
  Chip, 
  Container,
  CircularProgress,
  Alert,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { certificationApi } from '../services/api';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      console.log('Fetching certifications...');
      setLoading(true);
      setError(null);
      
      try {
        console.log('Calling certificationApi.getAll()...');
        const response = await certificationApi.getAll();
        console.log('Certifications API Response:', response);
        
        if (response && response.data) {
          console.log('Setting certifications data:', response.data);
          setCertifications(Array.isArray(response.data) ? response.data : []);
        } else {
          console.warn('Unexpected response format:', response);
          setCertifications([]);
        }
      } catch (error) {
        console.error('Error in fetchCertifications:', {
          message: error.message,
          status: error.status,
          url: error.url,
          responseData: error.responseData
        });
        setError(`Failed to load certifications: ${error.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    bgcolor: 'background.default',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    },
    borderRadius: 2,
    overflow: 'hidden',
  };

  const contentStyles = {
    flexGrow: 1,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyles = {
    fontSize: '1.25rem',
    fontWeight: 600,
    mb: 2,
    color: 'text.primary',
  };

  const descriptionStyles = {
    color: 'text.secondary',
    mb: 2,
    minHeight: '60px',
  };

  const chipContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mb: 2,
  };

  const techChipStyles = {
    bgcolor: 'primary.main',
    color: 'white',
    fontSize: '0.75rem',
    py: 0.5,
    px: 1.5,
    borderRadius: 1,
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    return format(new Date(dateString), 'MMM yyyy');
  };

  // Removed the early return for loading/error states to prevent unmounting the main container
  // which was causing the white screen

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
            background: 'linear-gradient(45deg, #9D4EDD 30%, #C58BFF 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}
        >
          My Certifications
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress color="primary" />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
        ) : certifications.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            No certifications to display at the moment.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {certifications.map((cert) => (
              <Grid item key={cert._id} xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={cardStyles}>
                    <CardContent sx={contentStyles}>
                      <Typography sx={titleStyles}>
                        {cert.title}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
                        {cert.issuingOrganization}
                      </Typography>
                      <Typography variant="body2" sx={descriptionStyles}>
                        {formatDate(cert.issueDate)} - {formatDate(cert.expirationDate) || 'No Expiration'}
                      </Typography>
                      {cert.credentialId && (
                        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
                          ID: {cert.credentialId}
                        </Typography>
                      )}
                      {cert.skills && cert.skills.length > 0 && (
                        <Box sx={chipContainerStyles}>
                          {cert.skills.map((skill, index) => (
                            <Chip 
                              key={index}
                              label={skill}
                              size="small"
                              sx={techChipStyles}
                            />
                          ))}
                        </Box>
                      )}
                      {cert.credentialUrl && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            mt: 'auto',
                            alignSelf: 'flex-start',
                            color: 'primary.main',
                            borderColor: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'rgba(157, 78, 221, 0.1)',
                              borderColor: 'primary.main',
                            },
                          }}
                        >
                          View Credential
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Certifications;
