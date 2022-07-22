import service from '../cinema-service';
import { put } from 'redux-saga/effects';
import { createMovieError, createMovieRequest, createMovieSuccess, getAllMoviesError, getAllMoviesRequest, getAllMoviesSuccess } from '../store/actions/moviesActions';

export function* getAllMoviesSaga() {
  yield put(getAllMoviesRequest());
  try {
    const movies = yield service.get('movies')
      .then(({data}) => data)
      yield put(getAllMoviesSuccess(movies))
  } catch (error) {
    yield put(getAllMoviesError(error))
  }
}

export function* createMovieSaga({payload}) {
  yield put(createMovieRequest());
  try {
    const newMovie = yield service.post('movies', payload)
    .then(({data}) => data)
    yield put(createMovieSuccess(newMovie))
  } catch (error) {
    yield put(createMovieError(error))
  }
}