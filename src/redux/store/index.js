import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../reducers/authReducer.js';
import contest from '../reducers/joinContestReducer.js';
import {watchLogin, watchRegistration} from '../sagas/authSaga.js';
import {watchFetchMatches} from '../sagas/dashboardSaga.js';
import Themereducer  from "../reducers/themeReducer.js";
import dashboard from '../reducers/dashboarderReducer.js';
import { watchJoinContest } from '../sagas/joinContestSaga.js';

// Set up a general reducer.
const rootReducer = combineReducers({
    auth: authReducer,
    theme: Themereducer,
    dashboard: dashboard,
    contest: contest
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegistration);
sagaMiddleware.run(watchFetchMatches);
sagaMiddleware.run(watchJoinContest)

export default store;






