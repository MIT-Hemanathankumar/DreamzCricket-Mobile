import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { LOGIN_REQUEST,CREATE_ACCOUNT,CHECK_AUTH_STATUS,LOGOUT_SUCCESS, LOGOUT } from "../../utils/Constants";
import { loginSuccess, loginFailure, logoutSuccess, authStatusChecked } from "../actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL, LOGIN_PATH_URL, REGISTRATION_PATH_URL } from "../../utils/endpoints";
import { use } from "react";

async function setAuthToken(token) {
    try {
        await AsyncStorage.setItem('authToken', token);

    } catch (error) {
        console.log(error);
    }
}

async function getAuthToken() {
    try {
       const token = await AsyncStorage.getItem('authToken');
       return token;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function removeAuthToken() {
    try {
        await AsyncStorage.removeItem('authToken')
    } catch (error) {
        console.log('Error removing token:',error);
    }
}


function* login(action) {

    try {
        const { username, password } = action.payload;
        const response = yield call(axios.post, BASE_URL + LOGIN_PATH_URL, { email: username, password: password }, {
            headers: {
                'Content-Type': 'application/json',
                'channel': 'app-android'// Explicitly set Content-Type
            },
        });
        if(response.data.status){
          const user = response.data;
          const {accessToken,userName} = response.data.data;
          console.log(response.data.data);
          console.log(accessToken);
          console.log("token------------------>");
          yield call(setAuthToken,accessToken);
          yield put(loginSuccess(user));
        }
        console.log("error------------------>");
        console.log(response.data.message);
        yield put(loginFailure(response.data.message));
    } catch (error) {
      console.log("error------------------>");
      console.log(error);
      yield put(loginFailure(error.message));
    }
}

function* registration(action){
  try {
    const {firstName,lastName, emailId, phoneNo, password } = action.payload;
    console.log(action.payload);
    console.log(BASE_URL + REGISTRATION_PATH_URL);
    const response = yield call(axios.post, BASE_URL + REGISTRATION_PATH_URL, {firstName,lastName,emailId,phoneNo,password,"sessionId": "string","sourceName":"Customer"},{ 
      headers: {
        'Content-Type': 'application/json',
        'channel': 'app-android'// Explicitly set Content-Type
      },
    });
    const {status,message,messageCode} = response.data;
    if (status && message == "Success"){
      yield put(authStatusChecked(status));
    } else {
      yield put(authStatusChecked(false));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logout() {
    try {
      yield call(removeAuthToken);
      console.log("Remove Auth Token ------>");
      yield put(logoutSuccess(false));
      // Navigation will be handled in the component upon logoutSuccess
    } catch (error) {
      console.log('Error during logout:', error);
      yield put(logoutSuccess(false)); // Still dispatch success to clear state
    }
  }
  
  function* checkAuthStatus() {
    try {
      const token = yield call(getAuthToken);
      console.log("check Auth Status token ------>");
      console.log(token);
      if (token) {
        console.log("checkAuthStatus------>");
        yield put(authStatusChecked(true));
      } else {
        console.log("checkAuthStatus------>");
        yield put(authStatusChecked(false));
      }
    } catch (error) {
      console.log('Error checking auth status:', error);
      yield put(authStatusChecked(false));
    }
  }

export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}

export function* watchRegistration() {
  console.log("watchRegistration--------->");
  yield takeLatest(CREATE_ACCOUNT, registration);
}

export function* watchAuthStatus(){
  console.log("watchAuthStatus--------->");
  yield takeLatest(CHECK_AUTH_STATUS,checkAuthStatus)
}

export function* watchLogOut(){
  yield takeLatest(LOGOUT,logout)
}