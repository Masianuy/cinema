import React from 'react';
import { useParams } from "react-router-dom";
import { Avatar, Divider, Grid, Stack, Typography } from '@mui/material';
import { emptyMovie } from '../../constants';

function MovieItem({movies}) {

  const {id} = useParams();
  const getMovieonId = movies.find((movie) => movie.id === parseInt(id));
  const currentMovie = getMovieonId ? getMovieonId : emptyMovie;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentMovie.title}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={currentMovie.poster} alt={currentMovie.title}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Stack>
              <Typography variant="h5" gutterBottom component="p">Director:</Typography>
            </Stack>
            <Stack>
              {currentMovie.directors.map(director => <Typography component="p" key={director}>{director}</Typography>)}
            </Stack>
          </Stack>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Stack>
              <Typography variant="h5" gutterBottom component="h5">Actors:</Typography>
            </Stack>
            <Stack>
              {currentMovie.actors.map(actor => <Typography component="p" key={actor}>{actor}</Typography>)}
            </Stack>
          </Stack>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Stack>
              <Typography variant="h5" gutterBottom component="p">Studio:</Typography>
            </Stack>
            <Stack>
              <Typography component="p">{currentMovie.studios}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default MovieItem