import { takeEvery, put, call } from 'redux-saga/effects';

import { loginSuccess, logoutSuccess } from './authAction';

 

function* loginSaga(action) {

  try {

    // 여기에 실제 로그인 API 호출을 추가합니다.
    const user = { username: action.payload.username }; // 예시 사용자 데이터
    yield put(loginSuccess(user));

  } catch (error) {
    console.error('Login failed', error);
  }
}

 

function* logoutSaga() {
  try {
    // 여기에 실제 로그아웃 API 호출을 추가합니다.\
    yield put(logoutSuccess());

  } catch (error) {

    console.error('Logout failed', error);

  }

}

 

export default function* authSaga() {

  yield takeEvery('LOGIN_REQUEST', loginSaga);

  yield takeEvery('LOGOUT_REQUEST', logoutSaga);

}