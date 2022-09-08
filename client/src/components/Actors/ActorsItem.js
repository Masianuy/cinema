import { Avatar, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { emptyActor } from '../../constants';
import moment from 'moment';

function ActorsItem({actors}) {

  const {id} = useParams();
  const getActoronId = actors.find((actor) => actor.id === parseInt(id));
  const currentActor = getActoronId ? getActoronId : emptyActor;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentActor.full_name}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xl={6} lg={6} md={6} xs={12} mb={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={currentActor.poster_actor} alt={currentActor.full_name}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xl={6} lg={6} md={6} xs={12}>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="p">Birth Year:</Typography>
            <Typography variant="h6" >{moment(currentActor.birth_year).format('Do MMMM YYYY')}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="p">Death Year:</Typography>
            <Typography variant="h6" >{currentActor.death_year === null ? 'Alive' : moment(currentActor.death_year).format('Do MMMM YYYY')}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="h5">Nationality:</Typography>
            <Typography variant="h6">{currentActor.nationalities}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="p">Movies:</Typography>
            </Stack>
            <Stack>
              {/* {currentActor.movies.map((item, index) => {
                return (<Typography component="p" key={index}>{item}</Typography>)
              })} */}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default ActorsItem