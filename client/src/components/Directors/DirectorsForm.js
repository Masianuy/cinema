import { Stack, TextField, Button, ButtonGroup } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emptyDirector } from '../../constants';
import {createDirectorAction, updateDirectorAction} from '../../store/actions/directorsActions';
import * as Yup from 'yup';

function DirectorsForm() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goHome = () => navigate('/directors');

  const {directorList: {directors}} = useSelector((state) => state);

  const currentDirector = directors.find((director) => director.id === parseInt(id));

  const onDirectorSubmit = (values) => {
    !values.id
      ? dispatch(createDirectorAction(values))
      : dispatch(updateDirectorAction(values))
    goHome();
  };

  const schema = Yup.object().shape({
    full_name: Yup.string()
      .required('Field full name is required')
  })

  const renderFormik = (props) => {
    return (
      <Form style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <Stack mb={2}>
          <Field name="full_name" as={TextField}
            required fullWidth margin="dense"
            label="Full name" variant="outlined" />
          <ErrorMessage name="full_name">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Stack mb={2}>
          <Field name="birth_year" as={TextField} type="date" fullWidth margin="dense"
            label="Birth year" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="death_year" as={TextField} type="date" fullWidth margin="dense"
            label="Death year" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="national_id" as={TextField} fullWidth margin="dense"
            label="Nationality" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="poster_director" as={TextField} fullWidth margin="dense"
            label="Image" variant="outlined" />
        </Stack>
        <ButtonGroup variant='contained' size="large" color="primary" sx={{mt: 2}}>
          <Button type="submit" disabled={!props.isValid}>Save</Button>
          <Button type="button"onClick={goHome}>Return</Button>
          <Button type="reset">Reset</Button>
        </ButtonGroup>
      </Form>
  )}

  return (
    <Formik
      initialValues={currentDirector ? currentDirector : emptyDirector}
      onSubmit={onDirectorSubmit}
      validationSchema={schema}
      >
        {renderFormik}
    </Formik>
  )
}

export default DirectorsForm