import React from 'react';
import { useParams } from "react-router-dom";
import { Avatar, Divider, Grid, Stack, Typography } from '@mui/material';
import { emptyMovie } from '../../constants';
import moment from 'moment';

function MovieItem({movies}) {

  const {id} = useParams();
  const getMovieonId = movies.find((movie) => movie.id === parseInt(id));
  const currentMovie = getMovieonId ? getMovieonId : emptyMovie;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentMovie.title}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xl={6} lg={6} md={6} xs={12} mb={6}>
          <Avatar sx={{ width: "100%", height: "auto", borderRadius: "0px" }} src={currentMovie.poster} alt={currentMovie.title}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xl={6} lg={6} md={6} xs={12}>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="p">Release year:</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">{moment(currentMovie.release_year).format('Do MMMM YYYY')}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="h6">Director:</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">{currentMovie.directors}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="h6">Actors:</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">{currentMovie.actors}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="p">Studio:</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">{currentMovie.studio}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="p">Genre:</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">{currentMovie.genre}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default MovieItem