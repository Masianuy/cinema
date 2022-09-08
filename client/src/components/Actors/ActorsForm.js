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

  const onFormikSubmit = (values) => {
    !values.id
    ? dispatch(createActorAction(values))
    : dispatch(updateActorAction(values));
    goHome();
  }

  const schemaFormActors = Yup.object().shape({
    full_name: Yup.string()
      .required('Field Full name can`t be empty')
  })

  const actorsForm = (props) => {
    return (
      <Form style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <Stack mb={2}>
          <Field name="full_name" as={TextField}
            required fullWidth margin="dense"
            label="Full name" variant="outlined" />
          <ErrorMessage name="full_name">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Stack mb={2}>
          <Field name="birth_year" as={TextField} fullWidth margin="dense"
            label="Birth year" type="date" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="national_id" as={TextField} fullWidth margin="dense"
            label="Nationality" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="poster_actor" as={TextField} fullWidth margin="dense"
            label="Image" variant="outlined" />
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