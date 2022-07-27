import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDirectorAction, getAllDirectorsAction } from '../../store/actions/directorsActions';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function DirectorsList({directors}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDirectorsAction())
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deleteDirectorAction(id))
  }

  return (
    <Box style={{padding: "0 20px"}}>
      <List>
        {directors.map((director) => (
          <ListItem key={director.id} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <ListItemText primaryTypographyProps={{fontSize: 20}}>
                <Link to={`${director.id}`}>{director.fullName}</Link>
            </ListItemText>
            <ButtonGroup variant='contained'>
              <Button startIcon={<EditRoundedIcon />} size="large">
                <Link to={`new/${director.id}`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large"
                onClick={() => onDelete(director.id)}>Delete</Button>
            </ButtonGroup>
          </ListItem>))}
      </List>
    </Box>
  )
}

export default DirectorsList