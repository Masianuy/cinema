import { Box, Button } from '@mui/material';
import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function Movies() {
  return (
    <Box>
      <Button variant="contained" size="large" color="secondary" style={{marginBottom: "20px", padding: "7px 30px", fontSize: "16px"}}>
          <Link to="new" style={{textAlign: "centre"}}>New</Link>
      </Button>
      <Routes>
        <Route path='new' element={<MovieForm />} />
        <Route path='new/:id' element={<MovieForm />} />
        <Route path=':id' element={<MovieItem />} />
        <Route path='/' element={<MovieList />} />
        <Route path='new' element={<Navigate to='new/:id' />} />
      </Routes>
    </Box>
  )
}

export default Movies