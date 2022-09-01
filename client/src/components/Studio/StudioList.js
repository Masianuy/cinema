import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteStudioAction } from '../../store/actions/studiosActions';

import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function StudioList({studios}) {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteStudioAction(id));
  }

  return (
    <Box style={{padding: "0 20px"}}>
      <List>
        {studios.map((studio) => (
          <ListItem key={studio.id} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <ListItemText primaryTypographyProps={{fontSize: 20}}>
                <Link to={`${studio.id}`}>{studio.title}</Link>
            </ListItemText>
            <ButtonGroup variant='contained'>
              <Button startIcon={<EditRoundedIcon />} size="large">
                <Link to={`new/${studio.id}`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large"
                onClick={() => onDelete(studio.id)}>Delete</Button>
            </ButtonGroup>
          </ListItem>))}
      </List>
    </Box>
  )
}

export default StudioList