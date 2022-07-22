import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieForm() {

  const {id} = useParams();
  const {movieList: {movies}} = useSelector(state => state);
  const editingMovie = movies.filter((movie) => (movie.id === parseInt(id)));
  // console.log(editingMovie)

  const initialValues = {
    title: '',
    directorId: '',
    actorId: '',
    studioId: '',
    poster: ''
  };

  const onFormikSubmit = (values, formikHelpers) => {
    formikHelpers.resetForm();
  }

  const shemaForm = Yup.object().shape({
    title: Yup.string()
      .required('Field name can`t be empty'),
    directorId: Yup.string()
      .required('Field director can`t be empty'),
    actorId: Yup.string()
      .required('Field actor can`t be empty'),
    studioId: Yup.string()
      .required('Field studio can`t be empty'),
    poster: Yup.string()
      .required('Field poster can`t be empty'),
  })

  const movieForm = (props) => {
    return (
      <Form style={{width: "80%", margin: "auto"}}>
        <Field as={TextField} name="title"
          fullWidth margin="dense" required 
          label="Title" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="title"/>
        <Field as={TextField} name="directorId"
          fullWidth margin="dense" required 
          label="Director" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="directorId"/>
        <Field as={TextField} name="actorId"
          fullWidth margin="dense" required 
          label="Actor" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="actorId"/>
        <Field as={TextField} name="studioId"
          fullWidth margin="dense" required 
          label="Studio" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="studioId"/>
        <Field as={TextField} name="poster"
          fullWidth margin="dense" required 
          label="Poster" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name="poster"/>
        <Button variant='contained' color="primary"
          type="submit" size="large" disabled={props.isValid}>Save</Button>
      </Form>
    )
  }

  return (
    <Formik 
      onSubmit={onFormikSubmit}
      initialValues = {editingMovie ? editingMovie[0] : initialValues}
      validationSchema={shemaForm}
    >
      {movieForm}
    </Formik>
  )
}

export default MovieForm