import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../reducers/authReducer.js';
import contest from '../reducers/joinContestReducer.js';
import { watchLogin, watchLogOut, watchRegistration, watchAuthStatus } from '../sagas/authSaga.js';
import { watchFetchMatches } from '../sagas/dashboardSaga.js';
import Themereducer from "../reducers/themeReducer.js";
import dashboard from '../reducers/dashboarderReducer.js';
import { watchJoinContest } from '../sagas/joinContestSaga.js';
import { watchWalletBalance } from '../sagas/walletsSaga.js';
import wallets from '../reducers/walletsReducer.js';

// Set up a general reducer.
const rootReducer = combineReducers({
    auth: authReducer,
    theme: Themereducer,
    dashboard: dashboard,
    contest: contest,
    wallets: wallets
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegistration);
sagaMiddleware.run(watchAuthStatus);
sagaMiddleware.run(watchLogOut);
sagaMiddleware.run(watchFetchMatches);
sagaMiddleware.run(watchJoinContest);
sagaMiddleware.run(watchWalletBalance);

export default store;






