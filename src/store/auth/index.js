import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import authReducer from './authReducer';

import authSaga from './authSaga';

 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(authReducer, applyMiddleware(sagaMiddleware));

 

sagaMiddleware.run(authSaga);

 

export default store;