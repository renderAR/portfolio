import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const WorkExCard = ({job, index}) => {
  return (
    <Card key={index} sx={{ m: 3, }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" color="#00b4d8" fontWeight={"bold"}>{job.title}</Typography>
            <Typography variant="subtitle1" color="#00b4d8">
              {job.company}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography variant="body2" color="text.secondary">
              {job.startDate} - {job.endDate}
            </Typography>
          </Grid>
        </Grid>
        {job.description.map((desc, descIndex) => (
          <Typography key={descIndex}  align= 'justify' variant="body1" sx={{ mt: 2, }}>
            {desc}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkExCard;