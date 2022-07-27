import { Button, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import StudioList from './StudioList';
import StudioItem from './StudioItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudiosAction } from '../../store/actions/studiosActions';


function Studio() {
  
  const {studioList: {studios}} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudiosAction())
  }, [dispatch]);

  return (
    <Box>
      <Button variant="contained" size="large" sx={{backgroundColor: "secondary.dark", p: "7px 30px", mb: 2, fontSize: "16px"}}>
        <Link style={{color: "white"}} to="new">New</Link>
      </Button>
      <Routes>
        <Route path=':id' element={<StudioItem studios={studios} />} />
        <Route path='/' element={<StudioList studios={studios} />} />
        <Route path='new' element={<Navigate to='/studios/new/:id' />} />
      </Routes>
    </Box>
  )
}

export default Studio