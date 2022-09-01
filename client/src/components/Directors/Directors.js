import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import DirectorsList from './DirectorsList';
import DirectorsItem from './DirectorsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDirectorsAction } from '../../store/actions/directorsActions';

function Directors() {

  const {directorList: {directors}} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDirectorsAction())
  }, [dispatch]);

  return (
    <Box>
      <Button variant="contained" size="large" sx={{backgroundColor: "secondary.dark", p: "7px 30px", mt: 5, mb: 6, fontSize: "16px"}}>
        <Link style={{color: "white"}} to="new">New</Link>
      </Button>
      <Routes>
        <Route path="/" element={<DirectorsList directors={directors} />} />
        <Route path=":id" element={<DirectorsItem directors={directors} />} />
        <Route path="new" element={<Navigate to="/directors/new/:id" />} />
      </Routes>
    </Box>
  )
}
 
export default Directors