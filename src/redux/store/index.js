import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../reducers/authReducer.js';
import {watchLogin, watchRegistration} from '../sagas/authSaga.js';
import {watchFetchMatches} from '../sagas/dashboardSaga.js';
import Themereducer  from "../reducers/themeReducer.js";
import dashboard from '../reducers/dashboarderReducer.js';

// Set up a general reducer.
const rootReducer = combineReducers({
    auth: authReducer,
    theme: Themereducer,
    dashboard: dashboard
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegistration);
sagaMiddleware.run(watchFetchMatches);

export default store;






