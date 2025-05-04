import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { WALLET_REQUEST } from "../../utils/Constants";
import { walletFailure,walletRequest,walletSuccess } from "../actions/walletsAction";
import { BASE_URL,WALLET_PATH_URL } from "../../utils/endpoints";
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

function* fetchWalletBalance() {

    try {
        const authToken = yield call(getAuthToken);
        const response = yield call(axios.get, BASE_URL + WALLET_PATH_URL ,{
            headers: {
                'Content-Type': 'application/json',
                'channel': 'app-android',// Explicitly set Content-Type
                'Authorization': `Bearer ${authToken}`,
                'session-id':''
            },
        });
        const walletData = response.data;
        console.log(walletData)
        yield put(walletSuccess(walletData));
    } catch (error) {
        yield put(walletFailure(error.message));
    }
}

export function* watchWalletBalance() {
    yield takeLatest(WALLET_REQUEST, fetchWalletBalance);
}