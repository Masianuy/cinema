import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovieAction } from '../../store/actions/moviesActions';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


function MovieList({movies}) {

  const dispatch = useDispatch();
   
  const onDelete = (id) => {
    dispatch(deleteMovieAction(id))
  }

  return (
    <Box style={{padding: "0 20px"}}>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.title} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <ListItemText primaryTypographyProps={{fontSize: 20}}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
            </ListItemText>
            <ButtonGroup variant='contained'>
              <Button startIcon={<EditRoundedIcon />} size="large">
                <Link to={`new/${movie.id}`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large"
                onClick={() => onDelete(movie.id)} sx={{backgroundColor: "btnDelete.main", '&:hover': {backgroundColor: 'btnDelete.dark'}}}>Delete</Button>
            </ButtonGroup>
          </ListItem>
          ))}
      </List>
    </Box>
  )
}

export default MovieList