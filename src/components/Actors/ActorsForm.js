import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function ActorsForm() {

  const onFormikSubmit = (values, formikHelpers) => {
    formikHelpers.resetForm();
  }

  const initialValuesActors = {
    id: Date.now(),
    fullName: '',
    birthYear: '',
    nationality: '',
    image: '',
    movies: []
  }

  const schemaFormActors = Yup.object().shape({
    fullName: Yup.string()
      .required('Field Full name can`t be empty'),
    birthYear: Yup.number()
      .required('Field Birth year can`t be empty')
      .negative('Field Birth year can`t be negative')
      .moreThan(1800, `Year can\`t be less then 1800`),
    nationality: Yup.string()
      .required('Field nationality can`t be empty'),
    image: Yup.string()
      .required('Field image can`t be empty'),
    movies: Yup.string()
      .required('Field movies can`t be empty'),
  })

  const actorsForm = (props) => {
    return (
      <Form style={{width: "80%", margin: "auto"}}>
        <Field as={TextField} name="fullName"
          fullWidth margin="dense" required
          label="Full name" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name='fullName' />
        <Field as={TextField} name="birthYear"
          fullWidth margin="dense" required
          label="Birth year" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name='birthYear' />
        <Field as={TextField} name="nationality"
          fullWidth margin="dense" required
          label="Nationality" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name='nationality' />
        <Field as={TextField} name="image"
          fullWidth margin="dense" required
          label="Image" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name='image' />
        <Field as={TextField} name="movies"
          fullWidth margin="dense" required
          label="Movies" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name='movies' />
        <Button variant="contained" color="primary"
          type="submit" size="large" disabled={props.isValid}>Save</Button>
      </Form>
    )
  }

  return (
    <Formik 
      onSubmit={onFormikSubmit}
      initialValues={initialValuesActors}
      validationSchema={schemaFormActors}
      >
      {actorsForm}
    </Formik>
  )
}

export default ActorsForm