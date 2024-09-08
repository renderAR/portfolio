import React from 'react';
import { Typography, Box } from '@mui/material';
import { useData } from '../context/DataContext';
import WorkExCard from '../components/WorkExCard';
const WorkExperience = () => {
  const experiences = useData().workex
  return (
    <Box sx={{ pt:"60px", maxWidth:"1000px" }}> 
      <Typography variant="h4" style={{ paddingTop: "20px" }} gutterBottom>
        WORK EXPERIENCE
      </Typography>
      {experiences.map((job, index) => (
        <WorkExCard key={index} index={index} job={job} />
      ))}
    </Box>
  );
};

export default WorkExperience;