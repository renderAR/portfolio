import React from "react";
import { Box, Typography } from "@mui/material";
import EducationComponent from "../components/EducationCard";
import { useData } from "../context/DataContext";

export default function Education() {
  const {education} = useData();

  return (
    <div style={{ paddingTop: '60px', maxWidth: "1000px" }}>
      <Typography
        variant="h4"
        style={{
          display: "flex",
        }}
      >
        EDUCATION
      </Typography>
      <Box sx={{ margin: "20px" }}>
        <EducationComponent edu={education} />
      </Box>
    </div>
  );
}
