import React from "react";
import { Typography, Grid, Box } from "@mui/material";

import ProjectCard from "../components/ProjectCard";
import { useData } from "../context/DataContext";

const Projects = () => {
  const projects = useData().projects;
  return (
    <Box sx={{ my: 4, pt: '60px' }}>
      <Typography variant="h4" gutterBottom>
        PROJECTS
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
