import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

function HomePage() {
  const posters = [
    {
      id: 1,
      url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/Annihilation-Movie-Poster.jpg"
    },
    {
      id: 2,
      url: "https://images.thedirect.com/media/article_full/doctor-strange-2-poster-mcu.jpg"
    },
    {
      id: 3,
      url: "https://images.indianexpress.com/2018/11/aquaman-759.jpg"
    }
  ]
  
  return (
    <Carousel swipe={false}
    navButtonsProps={{
      style: {
          backgroundColor: '#EAD0CA',
      }
    }} 
    indicatorIconButtonProps={{
      style: {
          padding: '5px',
          color: '#82A2B5',
      }
    }}
    activeIndicatorIconButtonProps={{
      style: {
        color: '#96B395',
      }
    }}
    indicatorContainerProps={{
      style: {
          marginTop: '10px',
          textAlign: 'center'
      }
    }}>
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