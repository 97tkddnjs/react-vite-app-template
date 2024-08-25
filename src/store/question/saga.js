import { takeEvery } from "redux-saga/effects";


function* createQuestion(action) {
    try {
      const question = yield call(createQuestionApi, action.payload);
      yield put({ type: CREATE_QUESTION_SUCCESS, payload: question });
    } catch (error) {
      yield put({ type: CREATE_QUESTION_FAILURE, payload: error.message });
    }
  }


export default function* questionSaga() {

    yield takeEvery('CREATE_QUESTION_REQUEST', createQuestion);
  
   
  
  }