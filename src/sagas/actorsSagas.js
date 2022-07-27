import service from '../cinema-service';
import { put } from 'redux-saga/effects';
import {  getAllActorsRequest, 
          getAllActorsError, 
          getAllActorsSuccess,
          createActorError, 
          createActorRequest, 
          createActorSuccess, 
          updateActorError, 
          updateActorRequest, 
          updateActorSuccess, 
          deleteActorRequest,
          deleteActorSuccess,
          deleteActorError
 } from '../store/actions/actorsActions';

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

export function* createActorSaga({payload}) {
  yield put(createActorRequest());
  try {
    const actors = yield service.post(`/actors`, payload)
      .then(({data}) => data)
    yield put(createActorSuccess(actors))
  } catch (error) {
    yield put(createActorError(error))
  }
}

export function* updateActorSaga({payload}) {
  yield put(updateActorRequest());
  try {
    const actors = yield service.put(`/actors${payload.id}`, payload)
      .then(({data}) => data)
    yield put(updateActorSuccess(actors))
  } catch (error) {
    yield put(updateActorError(error))
  }
}

export function* deleteActorSaga({payload}) {
  yield put(deleteActorRequest());
  try {
    yield service.delete(`/actors${payload}`)
    yield put(deleteActorSuccess(payload))
  } catch (error) {
    yield put(deleteActorError(error))
  }
}