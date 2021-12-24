import { all } from 'redux-saga/effects';
import directionsSaga from './directionsSaga';

export default function* rootSaga() {
  yield all([directionsSaga()]);
}