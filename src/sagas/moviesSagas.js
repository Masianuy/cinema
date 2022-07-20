import service from '../cinema-service';
import { put } from 'redux-saga/effects';
import { getAllMoviesError, getAllMoviesRequest, getAllMoviesSuccess } from '../store/actions/moviesActions';

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