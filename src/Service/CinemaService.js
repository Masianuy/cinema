import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DirectorsForm from '../components/Directors/DirectorsForm';
import ActorsForm from '../components/Actors/ActorsForm';
import MovieForm from '../components/Movies/MovieForm';
import StudioForm from '../components/Studio/StudioForm';

function CinemaService() {

  return (
    <Routes>
      <Route path="/movies/new" element={<MovieForm />} />
      <Route path="/movies/new/:id" element={<MovieForm />} />

      <Route path="/directors/new" element={<DirectorsForm />} />
      <Route path="/directors/new/:id" element={<DirectorsForm />} />

      <Route path="/actors/new" element={<ActorsForm />} />
      <Route path="/actors/new/:id" element={<ActorsForm />} />

      <Route path="/studios/new" element={<StudioForm />} />
      <Route path="/studios/new/:id" element={<StudioForm />} />
    </Routes>
  )
}

export default CinemaService