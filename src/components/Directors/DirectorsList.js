import { Box, Button, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDirectorsAction } from '../../store/actions/directorsActions';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function DirectorsList() {

  const {directorList: {directors}} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDirectorsAction())
  }, [dispatch]);

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
                <Link to={`${director.id}/edit`}>Edit</Link>
              </Button>
              <Button startIcon={<DeleteForeverRoundedIcon />} size="large">
                <Link to={`${director.id}`}>Delete</Link>
              </Button>
            </ButtonGroup>
          </ListItem>))}
      </List>
    </Box>
  )
}

export default DirectorsList