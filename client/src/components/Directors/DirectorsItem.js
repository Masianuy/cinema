import { Avatar, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { emptyDirector } from '../../constants';
import moment from 'moment';

function DirectorsItem({directors}) {

  const {id} = useParams();

  const currentDirector = directors.find((director) => director.id === parseInt(id));
  
  const director = currentDirector ? currentDirector : emptyDirector;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{director.full_name}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xs={6}>
          <Avatar sx={{ width: "300px", height: "300px" }} src={director.poster_director} alt={director.full_name}/>
        </Grid>
        <Grid style={{margin: "auto"}} item xs={6}>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="h5">Birth Year:</Typography>
            <Typography variant="h6" >{moment(director.birth_year).format('Do MMMM YYYY')}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="h6">Death Year:</Typography>
            <Typography variant="h6" >{director.death_year === null ? 'Alive' : moment(director.death_year).format('Do MMMM YYYY')}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="h5">Nationality:</Typography>
            <Typography variant="h6">{director.nationalities}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Stack>
              <Typography variant="overline" gutterBottom component="p">Movies:</Typography>
            </Stack>
            <Stack>
              {/* {director.movies.map((item, index) => {
                return (<Typography component="p" key={index}>{item}</Typography>)
              })} */}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default DirectorsItem