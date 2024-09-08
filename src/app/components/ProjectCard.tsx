import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  Button,
  chipClasses,
} from "@mui/material";
import {
  Code as CodeIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        boxShadow: 3,
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
        overflow: "hidden",
      }}
      elevation={3}
    >
      <Box sx={{ position: "relative", height: 140, overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
            transform: "scale(1.1)",
          }}
        />
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
          image={project.image}
          alt={project.title}
        />
      </Box>
      <CardContent sx={{ pb: 0, flexGrow: 1 }}>
        <Typography variant="h6" color="#00b4d8" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {project.technologies.map((tech, techIndex) => (
            <Chip
              key={techIndex}
              label={tech}
              icon={<CodeIcon />}
              size="small"
              variant="outlined"
              sx={{
                mr: 0.5,
                mb: 0.5,
                color: "#00b4d8",
                [`& .${chipClasses.icon}`]: {
                  color: "#00b4d8",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
      <Box sx={{ p: 1, pt: 0 }}>
        {project.github && (
          <Button
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ mr: 0.5 }}
          >
            GitHub
          </Button>
        )}
        {project.liveDemo && (
          <Button
            startIcon={<WebsiteIcon />}
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ mr: 0.5 }}
          >
            Live Demo
          </Button>
        )}
        {project.details && (
          <Button
            startIcon={<OpenInNewIcon />}
            href={project.details}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ mr: 0.5 }}
          >
            Details
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
