import React from 'react';
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import DirectorsForm from './DirectorsForm';
import DirectorsList from './DirectorsList';
import DirectorsItem from './DirectorsItem';

function Directors() {
  return (
    <Box>
      <Button variant="contained" size="large" color="secondary" style={{marginBottom: "20px", padding: "7px 30px", fontSize: "16px"}}>
        <Link to="new" style={{textAlign: "centre"}}>New</Link>
      </Button>
      <Routes>
        <Route path="new" element={<DirectorsForm />} />
        <Route path="new/:id" element={<DirectorsForm />} />
        <Route path="/" element={<DirectorsList />} />
        <Route path=":id" element={<DirectorsItem />} />
        <Route path="new" element={<Navigate to="new/:id" />} />
      </Routes>
    </Box>
  )
}

export default Directors