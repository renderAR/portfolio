import { Box, IconButton, Tooltip, Typography, Card, CardMedia} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useData } from "../context/DataContext";
export default function Home() {
  const {name, degree} = useData();

  return (
    <Box
      sx={{
        display: "flex",
        mb: 10,
        height: '85vh',
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={10} style={{ alignItems: "center" }}>
        <Grid item xs='auto'
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card elevation={4}>
            <CardMedia sx={{ height: 250, width: 200 }} image="/portfolio/images/about.jpg"/>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Hey There! <br />
            I'm <span style={{color: "#00b4d8"}}>{name}</span>
          </Typography>
          <Typography variant="h6" sx={{whiteSpace: "pre-wrap"}}>
            I'm a <span style={{color: "#00b4d8"}}>{degree}</span> graduate who likes <span style={{color: "#00b4d8"}}>full stack development and designing.</span><br />
            If you have a role that I could be a good fit for, let's connect!
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Tooltip title='LinkedIn'>
              <IconButton href='https://www.linkedin.com/in/aldus-mendoza-a29094312'> <LinkedInIcon fontSize="large"/> </IconButton>
            </Tooltip>
            <Tooltip title='Github'>
              <IconButton href='https://www.github.com/renderAR'> <GitHubIcon fontSize="large"/> </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
