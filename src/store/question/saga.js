import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

function* createQuestion(action) {
    
  console.log('createQuestion action:', action)
  try {
      const url ="http://127.0.0.1:8000/api/question/create";
      const response = yield call(axios.post, url, action.payload.toJS());
      console.log('response ~',response.data)
      yield put({ type: 'CREATE_QUESTION_REQUEST', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  function* fetchQuestionList() {
    try {
      const url = "http://127.0.0.1:8000/api/question/list"; // 질문 목록을 가져오는 API 엔드포인트
      const response = yield call(axios.get, url);
      
      // 서버에서 데이터를 성공적으로 가져오면, GET_QUESTION_LIST_SUCCESS 액션을 디스패치합니다.
      yield put({ type: 'GET_QUESTION_LIST_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Error fetching question list:', error);
      // 실패 시, 에러를 처리할 로직을 여기에 추가할 수 있습니다.
    }
  }

export default function* questionSaga() {

  yield takeEvery('CREATE_QUESTION_REQUEST', createQuestion);
  yield takeEvery('GET_QUESTION_LIST_REQUEST', fetchQuestionList);
   
}