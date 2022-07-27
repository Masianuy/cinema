import service from '../cinema-service';
import { put } from 'redux-saga/effects';
import { createStudioError, 
  createStudioRequest, 
  createStudioSuccess, 
  getAllStudiosError, 
  getAllStudiosRequest, 
  getAllStudiosSuccess,
  updateStudioRequest,
  deleteStudioRequest,
  deleteStudioError,
  updateStudioError,
  deleteStudioSuccess,
  updateStudioSuccess } from '../store/actions/studiosActions';

export function* getAllStudiosSaga() {
  yield put(getAllStudiosRequest());
  try {
    const studios = yield service.get('studios')
    .then(({data}) => data)
    yield put(getAllStudiosSuccess(studios))
  } catch (error) {
    yield put(getAllStudiosError(error))
  }
}

export function *createStudioSaga({payload}) {
  yield put(createStudioRequest());
  try {
    const newStudio = yield service.post('/studios', payload)
      .then(({data}) => data);
    yield put(createStudioSuccess(newStudio));
  } catch (error) {
    yield put(createStudioError(error))
  }
}

export function *updateStudioSaga({payload}) {
  yield put(updateStudioRequest());
  try {
    const updateStudio = yield service.put(`studio/${payload.id}`, payload)
      .then(({data}) => data);
    yield put(updateStudioSuccess(updateStudio));
  } catch (error) {
    yield put(updateStudioError(error));
  }
}

export function *deleteStudioSaga({payload}) {
  yield put(deleteStudioRequest());
  try {
    yield service.delete(`/studio/${payload}`)
    yield put(deleteStudioSuccess(payload))
  } catch (error) {
    yield put(deleteStudioError(error));
  }
}