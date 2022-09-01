import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink, Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CinemaService from './Service/CinemaService';

import './layout.css';
import { List, ListItem } from '@mui/material';

function Layout() {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xl={12} lg={12} md={12} xs={12} >
            <Header />
          </Grid>
          <Grid item xl={3} lg={3} md={3} xs={12}>
            <List className='nav-list'>
              <ListItem>
                <NavLink to='movies'>Movies</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='actors'>Actors</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='directors'>Directors</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='studios'>Studios</NavLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item xl={9} lg={9} md={9} xs={12} mb={8} >
            <main style={{textAlign: 'center', padding: '0 40px'}}>
              <Outlet />
              <CinemaService />
            </main>
          </Grid>
          {/* <Grid item lg={4} md={4} xl={4} xs={4} >
            <CinemaService />
          </Grid> */}
          <Grid item xl={12} lg={12} md={12} xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Layout