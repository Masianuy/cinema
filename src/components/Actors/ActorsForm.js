import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { emptyActor } from '../../constants';
import { createActorAction, updateActorAction } from '../../store/actions/actorsActions';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

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
      .moreThan(1800, `Year can\`t be less then 1800`)
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
          <Field name="birthYear" as={TextField} fullWidth margin="dense"
            label="Birth year" variant="outlined" />
          <ErrorMessage name="birthYear">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        <Stack mb={2}>
          <Field name="nationality" as={TextField} fullWidth margin="dense"
            label="Nationality" variant="outlined" />
        </Stack>
        <fieldset style={{padding: "5px 10px"}}>
          <legend style={{padding: "0 10px", fontSize: "16px", letterSpacing: "0.09em"}}>Movies</legend>
          <FieldArray name="movies">
            {({push, remove, form: {values: {movies}}}) => {
              return (
                <Stack spacing={2}>
                  {movies.map((movie, index) => (
                    <Stack key={index} direction="row" spacing={2}>
                      <Field name={`movies[${index}]`} as={TextField} fullWidth
                        margin="dense" variant="outlined"></Field>
                      {index > 0 && (<Button variant="contained" size="small"
                        type="button" startIcon={<ClearIcon />} onClick={() => remove(index)} />)}
                      <Button variant="contained" size="small" type="button"
                        startIcon={<AddIcon />} onClick={() => push('')} />
                    </Stack>
                    ))}
                </Stack>
              )
            }}
          </FieldArray>
        </fieldset>
        <Stack mb={2}>
          <Field name="image" as={TextField} fullWidth margin="dense"
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