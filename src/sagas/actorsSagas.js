import service from '../cinema-service';
import { put } from 'redux-saga/effects';
import { getAllActorsRequest, getAllActorsError, getAllActorsSuccess } from '../store/actions/actorsActions';

export function* getAllActorsSaga() {
  yield put(getAllActorsRequest());
  try {
    const actors = yield service.get('actors')
      .then(({data}) => data)
    yield put(getAllActorsSuccess(actors))
  } catch (error) {
    yield put(getAllActorsError(error))
  }
}