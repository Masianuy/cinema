import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, ButtonGroup, Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMovieAction, updateMovieAction } from '../../store/actions/moviesActions';
import {emptyMovie} from '../../constants';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

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
        {/* <fieldset style={{padding: "5px 10px"}}>
          <legend style={{padding: "0 10px", fontSize: "16px", letterSpacing: "0.09em"}}>Directors</legend>
          <FieldArray name="directors">
            {({push, remove, form: {values: {directors}}}) => {
              return (
                <Stack spacing={2}>
                  {directors.map((actor, index) => (
                    <Stack key={index} direction="row" spacing={2}>
                      <Field name={`directors[${index}]`} as={TextField} fullWidth
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
        </fieldset> */}
        {/* <fieldset style={{padding: "5px 10px"}}>
          <legend style={{padding: "0 10px", fontSize: "16px", letterSpacing: "0.09em"}}>Actors</legend>
          <FieldArray name="actors">
            {({push, remove, form: {values: {actors}}}) => {
              return (
                <Stack spacing={2}>
                  {actors.map((actor, index) => (
                    <Stack key={index} direction="row" spacing={2}>
                      <Field name={`actors[${index}]`} as={TextField} fullWidth
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
        </fieldset> */}
        {/* <fieldset style={{padding: "5px 10px"}}>
          <legend style={{padding: "0 10px", fontSize: "16px", letterSpacing: "0.09em"}}>Studios</legend>
          <FieldArray name="studios">
            {({push, remove, form: {values: {studios}}}) => {
              return (
                <Stack spacing={2}>
                  {studios.map((actor, index) => (
                    <Stack key={index} direction="row" spacing={2}>
                      <Field name={`studios[${index}]`} as={TextField} fullWidth
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
        </fieldset> */}
        <Field as={TextField} name="genre" fullWidth multiline margin="dense"
          label="Genre" variant="outlined" />
          <Field as={TextField} name="release_year" fullWidth multiline margin="dense"
            label="Poster" variant="outlined" />
            <Field as={TextField} name="studio" fullWidth multiline margin="dense"
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