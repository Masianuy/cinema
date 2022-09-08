import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { TextField, Button, ButtonGroup } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMovieAction, updateMovieAction } from '../../store/actions/moviesActions';
import {emptyMovie} from '../../constants';
import moment from 'moment';

function MovieForm() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const goHome = () => {navigate('/movies');}

  const {movieList: {movies}} = useSelector(state => state);

  const editingMovie = movies.find((movie) => (movie.id === parseInt(id)));

  const onMovieSubmit = (values) => {
    !values.id
      ? dispatch(createMovieAction(values))
      : dispatch(updateMovieAction(values));
      goHome();
  }

  const shemaForm = Yup.object().shape({
    title: Yup.string()
      .required('Field name can`t be empty')
  })

  const movieForm = (props) => {
    return (
      <Form style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <Field as={TextField} name="title"
          fullWidth margin="dense" required 
          label="Title" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
        <ErrorMessage name="title"/>
        <Field as={TextField} name="genre_id" fullWidth multiline margin="dense"
          label="Genre" variant="outlined" />
        <Field as={TextField} name="release_year" type="date" fullWidth margin="dense"
          label="Release year" variant="outlined" />
        <Field as={TextField} name="studio_id" fullWidth multiline margin="dense"
          label="Studio" variant="outlined" />
        <Field as={TextField} name="poster" fullWidth multiline margin="dense"
          label="Poster" variant="outlined" />
        <ButtonGroup variant='contained' size="large" color="primary" sx={{mt: 2}}>
          <Button type="submit" disabled={!props.isValid}>Save</Button>
          <Button type="button"onClick={goHome}>Return</Button>
          <Button type="reset">Reset</Button>
        </ButtonGroup>
      </Form>
    )
  }

  return (
    <Formik 
      onSubmit={onMovieSubmit}
      initialValues = {editingMovie ? editingMovie : emptyMovie}
      validationSchema={shemaForm}
    >
      {movieForm}
    </Formik>
  )
}

export default MovieForm