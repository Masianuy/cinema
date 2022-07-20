import { Avatar, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DirectorsItem() {
  const {id} = useParams();

  const {directorList: {directors}} = useSelector(store => store);
  const currentDirector = directors.find((director) => director.id === parseInt(id))

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentDirector.fullName}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={currentDirector.image} alt={currentDirector.fullName}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Typography variant="h5" gutterBottom component="p">Birth Year: {currentDirector.birthYear}</Typography>
          <Typography variant="h5" gutterBottom component="p">Nationality: {currentDirector.nationality}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default DirectorsItem