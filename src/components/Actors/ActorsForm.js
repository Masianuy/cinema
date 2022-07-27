import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { emptyActor } from '../../constants';
import { createActorAction, updateActorAction } from '../../store/actions/actorsActions';

function ActorsForm() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {actorList: {actors}} = useSelector(state => state);

  const currentActor = actors.find((actor) => actor.id === parseInt(id));

  const goHome = () => {navigate('/actors')};

  const onFormikSubmit = (values, actions) => {
    !values.id
    ? dispatch(createActorAction({...values, id: Date.now()}))
    : dispatch(updateActorAction(values));
    goHome();
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
      <Form style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <Stack mb={2}>
          <Field name="fullName" as={TextField}
            required fullWidth margin="dense"
            label="Full name" variant="outlined" />
          <ErrorMessage name="fullName">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Stack mb={2}>
          <Field name="birthYear" as={TextField}
            required fullWidth margin="dense"
            label="Birth year" variant="outlined" />
          <ErrorMessage name="birthYear">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Stack mb={2}>
          <Field name="nationality" as={TextField}
            required fullWidth margin="dense"
            label="Nationality" variant="outlined" />
          <ErrorMessage name="nationality">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Field as={TextField} name="movies"
          fullWidth margin="dense" required
          label="Movies" variant="outlined" />
          {props.errors.name && props.touched.name && <div>{props.errors.name}</div>}
          <ErrorMessage name='movies' />
          <Stack mb={2}>
            <Field name="image" as={TextField}
              required fullWidth margin="dense"
              label="Image" variant="outlined" />
            <ErrorMessage name="image">{msg => <div>{msg}</div>}</ErrorMessage>
          </Stack>
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
      onSubmit={onFormikSubmit}
      initialValues={currentActor ? currentActor : emptyActor}
      validationSchema={schemaFormActors}
      >
      {actorsForm}
    </Formik>
  )
}

export default ActorsForm