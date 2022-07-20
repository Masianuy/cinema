import { Box, Button } from '@mui/material';
import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';

import ActorsList from './ActorsList';
import ActorsItem from './ActorsItem';
import ActorsForm from './ActorsForm';

function Actors() {
  return (
    <Box style={{ textAlign: "center" }}>
      <Button variant="contained" size="large" color="secondary" style={{marginBottom: "20px", padding: "7px 30px", fontSize: "16px"}}>
        <Link to="new" style={{textAlign: "centre"}}>New</Link>
      </Button>
      <Routes>
        <Route path="new" element={<ActorsForm />} />
        <Route path="new/:id" element={<ActorsForm />} />
        <Route path="/" element={<ActorsList />} />
        <Route path="/:id" element={<ActorsItem />} />
        <Route path="new" element={<Navigate to='new/:id' />} />
      </Routes>
    </Box>
  )
}

export default Actors