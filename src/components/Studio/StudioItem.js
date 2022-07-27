import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { emptyStudio } from '../../constants';

function StudioItem({studios}) {

  const {id} = useParams();
  const getStudioOnId = studios.find((studio => studio.id === parseInt(id)));
  const currentStudio = getStudioOnId ? getStudioOnId : emptyStudio;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentStudio.title}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <img src={currentStudio.logo} alt={currentStudio.title} width="100%"/>
        </Grid>
        <Grid style={{margin: "auto", paddingLeft: "20px"}} item xs={6}>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Typography variant="h5" gutterBottom component="p">Location:</Typography>
            <Typography component="p">{currentStudio.location}</Typography>
          </Stack>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Typography variant="h5" gutterBottom component="p">Foundation Year:</Typography>
            <Typography component="p" >{currentStudio.foundationYear}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default StudioItem