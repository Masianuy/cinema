import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, ButtonGroup } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMovieAction, updateMovieAction } from '../../store/actions/moviesActions';
import {emptyMovie} from '../../constants';

function MovieForm() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const goHome = () => {navigate('/movies');}

  const {movieList: {movies}} = useSelector(state => state);

  const editingMovie = movies.find((movie) => (movie.id === parseInt(id)));

  const onMovieSubmit = (values, actions) => {
    !values.id
      ? dispatch(createMovieAction({...values, id: Date.now()}))
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
        <Field as={TextField} name="directors"
          fullWidth margin="dense" required 
          label="Director" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="directors"/>
        {/* <FieldArray name="actors"> */}
        <Field as={TextField} name="actors"
          fullWidth margin="dense" required 
          label="Actor" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="actors"/>
        {/* </FieldArray> */}
        <Field as={TextField} name="studios"
          fullWidth margin="dense" required
          label="Studio" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="studios"/>
        <Field as={TextField} name="poster"
          fullWidth multiline margin="dense" required 
          label="Poster" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="poster"/>
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