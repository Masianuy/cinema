import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function StudioItem() {

  const {id} = useParams();
  const {studioList: {studios}} = useSelector(state => state);
  const currentStudio = studios.find((studio => studio.id === parseInt(id)));

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentStudio.title}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <img src={currentStudio.logo} alt={currentStudio.title} width="100%"/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Typography variant="h5" gutterBottom component="p">Location: {currentStudio.location}</Typography>
          <Typography variant="h5" gutterBottom component="p">Foundation Year: {currentStudio.foundationYear}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default StudioItem