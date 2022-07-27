import { Avatar, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { emptyActor } from '../../constants';

function ActorsItem({actors}) {

  const {id} = useParams();
  const getActoronId = actors.find((actor) => actor.id === parseInt(id));
  const currentActor = getActoronId ? getActoronId : emptyActor;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentActor.fullName}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={currentActor.image} alt={currentActor.fullName}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Typography variant="h5" gutterBottom component="p">Birth Year:</Typography>
            <Typography component="p" >{currentActor.birthYear}</Typography>
          </Stack>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Typography variant="h5" gutterBottom component="h5">Nationality:</Typography>
            <Typography component="p">{currentActor.nationality}</Typography>
          </Stack>
          <Stack direction="row" mb={2} justifyContent="space-between">
            <Stack>
              <Typography variant="h5" gutterBottom component="p">Movies:</Typography>
            </Stack>
            <Stack>
              {currentActor.movies.map((item, index) => {
                return (<Typography component="p" key={index}>{item}</Typography>)
              })}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default ActorsItem