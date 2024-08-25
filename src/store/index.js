import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import authReducer from './auth/authReducer';

import authSaga from './auth/authSaga';
import { combineReducers } from 'redux';
import questionReducer from './question/reducer';
import questionSaga from './question/saga';


 

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    question: questionReducer,
  });

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

 

sagaMiddleware.run(authSaga);
sagaMiddleware.run(questionSaga);
 

export default store;