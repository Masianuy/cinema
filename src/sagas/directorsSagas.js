import { put } from "redux-saga/effects";
import {  createDirectorError, 
          createDirectorRequest, 
          createDirectorSuccess, 
          deleteDirectorError, 
          deleteDirectorRequest, 
          deleteDirectorSuccess, 
          getAllDirectorsError, 
          getAllDirectorsRequest, 
          getAllDirectorsSuccess, 
          updateDirectorError, 
          updateDirectorRequest, 
          updateDirectorSuccess } from "../store/actions/directorsActions";
import service from '../cinema-service';

export function* getAllDirectorsSaga() {
  yield put(getAllDirectorsRequest())
  try {
    const directors = yield service.get('directors')
    .then(({data}) => data)
    yield put(getAllDirectorsSuccess(directors));
  } catch (error) {
    yield put(getAllDirectorsError(error))
  }
}

export function* createDirectorSaga({payload}) {
  yield put(createDirectorRequest());
  try {
    const newDirector = yield service.post('/directors', payload)
      .then(({data}) => data);
    yield put(createDirectorSuccess(newDirector));
  } catch (error) {
    yield put(createDirectorError(error))
  }
}

export function* updateDirectorSaga({payload}) {
  yield put(updateDirectorRequest());
  try {
    const updateDirector = yield service.put(`directors/${payload.id}`, payload)
      .then(({data}) => data);
    yield put(updateDirectorSuccess(updateDirector));
  } catch (error) {
    yield put(updateDirectorError(error))
  }
}

export function* deleteDirectorSaga({payload}) {
  yield put(deleteDirectorRequest());
  try {
    yield service.delete(`directors/${payload}`)
    yield put(deleteDirectorSuccess(payload));
  } catch (error) {
    yield put(deleteDirectorError(error));
  }
}