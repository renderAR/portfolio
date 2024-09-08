import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const EducationCard = ({ edu }) => {
  return (
    <Paper elevation={3} sx={{ maxWidth: "800px" }}>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection={"row"} alignItems={"center"}>
            <Avatar
              src={edu.logo}
              alt={edu.institution}
              sx={{ height: 60, width: 60 }}
            />
            <Box ml={2}>
              <Typography variant="h6">
                <span style={{ color: "#00b4d8", fontWeight: "bold" }}>
                  {edu.institution}
                </span>
              </Typography>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="subtitle1">
                  <span style={{ color: "#00b4d8" }}>{edu.degree}</span>
                </Typography>
               
              </Box>
            </Box>
          </Box>
          <Box ml={2} mt={2}>
            <Box>
            <Typography variant="body2">{edu.year}</Typography>
              {edu.addition_info && (
                <Typography variant="body2">{edu.addition_info}</Typography>
              )}
            </Box>
            {edu.courses && (
              <Box>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {edu.courses.map((course, courseIndex) => (
                    <Chip
                      key={courseIndex}
                      label={course}
                      variant="outlined"
                      sx={{ m: 1, ml: 0, color: "#00b4d8" }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default EducationCard;
