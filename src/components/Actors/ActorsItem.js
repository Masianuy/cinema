import { Avatar, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ActorsItem() {

  const {id} = useParams();
  const {actorList: {actors}} = useSelector(store => store);
  const curentActor = actors.find((actor) => actor.id === parseInt(id));

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{curentActor.fullName}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={curentActor.image} alt={curentActor.fullName}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Typography variant="h5" gutterBottom component="p">Nationality: {curentActor.nationality}</Typography>
          <Typography variant="h5" gutterBottom component="p">Birth Year: {curentActor.birthYear}</Typography>
          {curentActor.movies.forEach((movie) => (
            <Typography variant="h5" gutterBottom component="p" key={movie}>Movie: {movie}</Typography>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default ActorsItem