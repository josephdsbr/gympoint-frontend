import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFail } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload.data;

    const profile = { id, name, email, age, weight, height };

    const response = yield call(api.put, 'students', profile);

    toast.success("Student's Perfil updated successfully");

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error to update profile. Please, check your informations');
    yield put(updateProfileFail());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
