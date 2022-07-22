import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovieAction, getAllMoviesAction } from '../../store/actions/moviesActions';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


function MovieList() {

  const dispatch = useDispatch();

  const {movieList: {movies}} = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllMoviesAction())
  }, [dispatch])
   
  const onDelete = (id) => {
    dispatch(deleteMovieAction(id))
  }

  return (
    <Box style={{padding: "0 20px"}}>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <ListItemText primaryTypographyProps={{fontSize: 20}}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
            </ListItemText>
            <ButtonGroup variant='contained'>
              <Button startIcon={<EditRoundedIcon />} size="large">
                <Link to={`new/${movie.id}`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large"
                onClick={() => onDelete(movie.id)}>Delete</Button>
            </ButtonGroup>
          </ListItem>))}
      </List>
    </Box>
  )
}

export default MovieList