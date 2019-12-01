import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
import answer from './answer/reducer';

export default combineReducers({ auth, student, answer });
