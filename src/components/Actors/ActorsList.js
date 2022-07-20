import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllActorsAction } from '../../store/actions/actorsActions';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function ActorsList() {

  const { actorList: {actors}} = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActorsAction())
  }, [dispatch]);

  return (
    <Box style={{padding: "0 20px"}}>
      <List>
        {actors.map((actor) => (
          <ListItem key={actor.id} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <ListItemText primaryTypographyProps={{fontSize: 20}}>
                <Link to={`${actor.id}`}>{actor.fullName}</Link>
            </ListItemText>
            <ButtonGroup variant='contained'>
              <Button startIcon={<EditRoundedIcon />} size="large">
                <Link color="theme.edit" className='edit-link' to={`${actor.id}/edit`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large">
                <Link to={`${actor.id}`}>Delete</Link>
              </Button>
            </ButtonGroup>
          </ListItem>))}
        </List>
    </Box>
  )
}

export default ActorsList