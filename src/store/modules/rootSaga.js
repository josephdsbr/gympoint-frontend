import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import student from './student/saga';

export default function* rootSaga() {
  return yield all([auth, student]);
}
