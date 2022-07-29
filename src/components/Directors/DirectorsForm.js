import { Stack, TextField, Button, ButtonGroup, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emptyDirector } from '../../constants';
import {createDirectorAction, updateDirectorAction} from '../../store/actions/directorsActions';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

function DirectorsForm() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goHome = () => navigate('/directors');

  const {directorList: {directors}} = useSelector((state) => state);

  const currentDirector = directors.find((director) => director.id === parseInt(id));

  const onDirectorSubmit = (values, actions) => {
    !values.id
      ? dispatch(createDirectorAction({...values, id: Date.now()}))
      : dispatch(updateDirectorAction(values))
    goHome();
  };

  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required('Field full name is required'),
    birthYear: Yup.number()
  })

  const renderFormik = (props) => {
    return (
      <Form style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <Stack mb={2}>
          <Field name="fullName" as={TextField}
            required fullWidth margin="dense"
            label="Full name" variant="outlined" />
          <ErrorMessage name="fullName">{msg => <div>{msg}</div>}</ErrorMessage>
        </Stack>
        {/* <Stack mb={2}>
          <FormControl>
            <InputLabel>Birth year</InputLabel>
            <Field name="birthYear" as={Select} fullWidth margin="dense"
              label="Birth year" variant="outlined">
                <MenuItem><em>None</em></MenuItem>
            </Field>
          </FormControl>
        </Stack> */}
        <Stack mb={2}>
          <Field name="birthYear" as={TextField} fullWidth margin="dense"
            label="Birth year" variant="outlined" />
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
                  {movies.map((movie, index) =>  (
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
          <ErrorMessage name="image">{msg => <div>{msg}</div>}</ErrorMessage>
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