import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { emptyStudio } from '../../constants';
import moment from 'moment';

function StudioItem({studios}) {

  const {id} = useParams();
  const getStudioOnId = studios.find((studio => studio.id === parseInt(id)));
  const currentStudio = getStudioOnId ? getStudioOnId : emptyStudio;

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>{currentStudio.title}</Typography>
      <Divider />
      <Grid container style={{padding: "40px 0"}}>
        <Grid item xl={6} lg={6} md={6} xs={12} mb={6}>
          <img src={currentStudio.logo} alt={currentStudio.title} width="100%"/>
        </Grid>
        <Grid style={{margin: "auto", paddingLeft: "20px"}} item xl={6} lg={6} md={6} xs={12}>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="p">Location:</Typography>
            <Typography variant="h5">{currentStudio.city}, {currentStudio.country}</Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <Typography variant="overline" gutterBottom component="p">Foundation Year:</Typography>
            <Typography variant="h6" >{moment(currentStudio.found_year).format('Do MMMM YYYY')}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default StudioItem