import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { emptyStudio } from '../../constants';
import { createStudioAction, updateStudioAction } from '../../store/actions/studiosActions';

function StudioForm() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {studioList: {studios}} = useSelector(state => state);
  const currentStudio = studios.find((studio) => studio.id === parseInt(id));

  const goHome = () => navigate('/studios');

  const onFormikSubmit = (values, actions) => {
    !values.id
    ? dispatch(createStudioAction({...values, id: Date.now()}))
    : dispatch(updateStudioAction(values));
    goHome();
  }

  const schemaformStudio = Yup.object().shape({
    title: Yup.string()
      .required('Field Title can`t be empty'),
    foundationYear: Yup.number()
  })

  const studioForm = (props) => {
    return (
      <Form  style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <Stack mb={2}>
          <Field name="title" as={TextField}
            required fullWidth margin="dense"
            label="Title" variant="outlined" />
          <ErrorMessage name="title">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Stack mb={2}>
          <Field name="foundationYear" as={TextField} fullWidth margin="dense"
            label="Foundation Year" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="location" as={TextField} fullWidth margin="dense"
            label="Location" variant="outlined" />
        </Stack>
        <Stack mb={2}>
          <Field name="logo" as={TextField} fullWidth margin="dense"
            label="Logo" variant="outlined" />
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
      initialValues={currentStudio ? currentStudio : emptyStudio}
      validationSchema={schemaformStudio}
      >
      {studioForm}
    </Formik>
  )
}

export default StudioForm