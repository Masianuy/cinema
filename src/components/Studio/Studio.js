import { Button, Box } from '@mui/material';
import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import StudioList from './StudioList';
import StudioItem from './StudioItem';
import StudioForm from './StudioForm';


function Studio() {
  return (
    <Box>
    <Button variant="contained" size="large" color="secondary" style={{marginBottom: "20px", padding: "7px 30px", fontSize: "16px"}}>
        <Link to="new" style={{textAlign: "centre"}}>New</Link>
      </Button>
      <Routes>
        <Route path='new' element={<StudioForm />} />
        <Route path='new/:id' element={<StudioForm />} />
        <Route path=':id' element={<StudioItem />} />
        <Route path='/' element={<StudioList />} />
        <Route path='new' element={<Navigate to='new/:id' />} />
      </Routes>
    </Box>
  )
}

export default Studio