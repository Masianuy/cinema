import { takeLatest } from 'redux-saga/effects';
import ACTIONS_TYPES from '../store/actions/actionsTypes';
import { getAllActorsSaga } from './actorsSagas';
import { createMovieSaga, getAllMoviesSaga } from "./moviesSagas";
import { getAllStudiosSaga } from './studiosSagas';
import { getAllDirectorsSaga } from './directorsSagas';

function* rootSaga() {
  yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga)
  yield takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga)
  yield takeLatest(ACTIONS_TYPES.GET_STUDIOS_ACTION, getAllStudiosSaga)
  yield takeLatest(ACTIONS_TYPES.GET_ACTORS_ACTION, getAllActorsSaga)
  yield takeLatest(ACTIONS_TYPES.GET_DIRECTORS_ACTION, getAllDirectorsSaga)
}

export default rootSaga;