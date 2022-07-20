import { Typography } from '@mui/material';
import React from 'react';

const style = {
  background: "linear-gradient(145deg,#8863A8,#D6C8E1)",
  padding: "20px",
  color: "white",
  textAlign: "center",
}

function Footer() {
  return (
    <footer style={style}>
    <Typography variant="subtitle1" component="p">
      ALL ABOUT CINEMA
    </Typography>
    </footer>
  )
}

export default Footer