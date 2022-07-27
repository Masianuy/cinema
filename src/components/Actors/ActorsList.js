import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteActorAction } from '../../store/actions/actorsActions';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function ActorsList({actors}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteActorAction(id));
  }

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
                <Link color="theme.edit" className='edit-link' to={`new/${actor.id}`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large"
                onClick={() => onDelete(actor.id)}>Delete</Button>
            </ButtonGroup>
          </ListItem>))}
        </List>
    </Box>
  )
}

export default ActorsList