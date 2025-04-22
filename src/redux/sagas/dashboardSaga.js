import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_MATCHES } from "../../utils/Constants";
import { fetchMatchesSuccess,fetchMatchesFailure } from "../actions";
import { BASE_URL,MATCHES_PATH_URL } from "../../utils/endpoints";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { use } from "react";

async function getAuthToken() {
    try {
       const token = await AsyncStorage.getItem('authToken');
       console.log("TOKEN----->");
       console.log(token);
       console.log("TOKEN----->");
       return token;
    } catch (error) {
        console.log(error);
        return null;
    }
}

function* fetchDashboard() {

    try {
        const authToken = yield call(getAuthToken);
        const response = yield call(axios.get, BASE_URL + MATCHES_PATH_URL ,{
            headers: {
                'Content-Type': 'application/json',
                'channel': 'app-android',// Explicitly set Content-Type
                'Authorization': `Bearer ${authToken}`,
                'session-id':''
            },
        });
        const matches = response.data;
        console.log(matches)
        yield put(fetchMatchesSuccess(matches));
    } catch (error) {
        yield put(fetchMatchesFailure(error.message));
    }
}

export function* watchFetchMatches() {
    yield takeLatest(FETCH_MATCHES, fetchDashboard);
}