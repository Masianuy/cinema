import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllStudiosAction} from '../../store/actions/studiosActions';

import { Box, Button, styled, ButtonGroup, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function StudioList() {

  const ButtonDelete = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.btnDelete.main,
    "&hover": {
      backgroundColor: theme.palette.btnDelete.dark,
    }
  }));

  const {studioList: {studios}} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudiosAction())
  }, [dispatch])

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
                <Link to={`${studio.id}/edit`}>Edit</Link>
              </Button>
              <ButtonDelete startIcon={<DeleteForeverRoundedIcon />} size="large">
                <Link to={`${studio.id}`}>Delete</Link>
              </ButtonDelete>
            </ButtonGroup>
          </ListItem>))}
      </List>
    </Box>
  )
}

export default StudioList