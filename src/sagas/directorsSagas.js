import { put } from "redux-saga/effects";
import { getAllDirectorsError, getAllDirectorsRequest, getAllDirectorsSuccess } from "../store/actions/directorsActions";
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