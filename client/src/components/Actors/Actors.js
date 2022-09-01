import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';

import ActorsList from './ActorsList';
import ActorsItem from './ActorsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActorsAction } from '../../store/actions/actorsActions';

function Actors() {

  const {actorList: {actors}} = useSelector(store => store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActorsAction())
  }, [dispatch]);

  return (
    <Box>
      <Button variant="contained" size="large" sx={{backgroundColor: "secondary.dark", p: "7px 30px", mt: 5, mb: 6, fontSize: "16px"}}>
        <Link style={{color: "white"}} to="new">New</Link>
      </Button>
      <Routes>
        <Route path="/" element={<ActorsList actors={actors} />} />
        <Route path="/:id" element={<ActorsItem actors={actors} />} />
        <Route path="new" element={<Navigate to='/actors/new/:id' />} />
      </Routes>
    </Box>
  )
}

export default Actors