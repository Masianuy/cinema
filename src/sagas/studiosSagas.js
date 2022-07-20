import service from '../cinema-service';
import { put } from 'redux-saga/effects';
import { getAllStudiosError, getAllStudiosRequest, getAllStudiosSuccess } from '../store/actions/studiosActions';

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