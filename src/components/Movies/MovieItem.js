import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Avatar, Divider, Grid, Typography } from '@mui/material';

function MovieItem() {

  const {id} = useParams();
  const {movieList: {movies}} = useSelector(state => state);
  const currentMovie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentMovie.title}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={currentMovie.poster} alt={currentMovie.title}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Typography variant="h5" gutterBottom component="p">Director: {currentMovie.directorId}</Typography>
          <Typography variant="h5" gutterBottom component="p">Actors: {currentMovie.actorId}</Typography>
          <Typography variant="h5" gutterBottom component="p">Studio: {currentMovie.studioId}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default MovieItem