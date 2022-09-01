import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { getAllMoviesAction } from '../../store/actions/moviesActions';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function Movies() {

  const {movieList: {movies}} = useSelector(state => state);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesAction())
  }, [dispatch]);

  return (
    <Box>
      <Button variant="contained" size="large" sx={{backgroundColor: "secondary.dark", p: "7px 30px", mt: 5, mb: 6, fontSize: "16px"}}>
        <Link style={{color: "white"}} to="new">New</Link>
      </Button>
      <Routes>
        <Route path=':id' element={<MovieItem movies={movies}/>} />
        <Route path='/' element={<MovieList movies={movies} />} />
        <Route path='new' element={<Navigate to='/movies/new/:id' />} />
      </Routes>
    </Box>
  )
}

export default Movies