import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

function HomePage() {
  const posters = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
    },
    {
      id: 2,
      url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/Annihilation-Movie-Poster.jpg"
    },
    {
      id: 3,
      url: "https://images.thedirect.com/media/article_full/doctor-strange-2-poster-mcu.jpg"
    },
    {
      id: 4,
      url: "https://images.indianexpress.com/2018/11/aquaman-759.jpg"
    }
  ]
  
  return (
    <Carousel>
        {posters.map((poster) => {
          return (
            <Box key={poster.id}>
              <Paper>
                <img src={poster.url} alt={poster.id} style={{width: "100%"}}/>
              </Paper>
            </Box>
          )
        })}
    </Carousel>
  )
}

export default HomePage