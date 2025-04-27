import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { JOIN_CONTEST_SLOTS } from "../../utils/Constants";
import { joinContestSlotsSuccess,joinContestSlotsFail } from "../actions/joinContestActions";
import { BASE_URL,JOIN_CONTEST_SLOTS_URL } from "../../utils/endpoints";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getAuthToken() {
    try {
       const token = await AsyncStorage.getItem('authToken');
       return token;
    } catch (error) {
        return null;
    }
}

function* joinContest(action) {

    console.log("--------------->API");

    const {matchId,contestId,slotId} = action.payload;
    try {
        const authToken = yield call(getAuthToken);
        const response = yield call(axios.post, BASE_URL + JOIN_CONTEST_SLOTS_URL, { matchId,contestId,slotId } ,{
            headers: {
                'Content-Type': 'application/json',
                'channel': 'app-android',// Explicitly set Content-Type
                'Authorization': `Bearer ${authToken}`,
                'session-id':''
            },
        });
        const contest = response.data;
        console.log(contest)
        yield put(joinContestSlotsSuccess(contest));
    } catch (error) {
        yield put(joinContestSlotsFail(error.message));
    }
}

export function* watchJoinContest() {
    yield takeLatest(JOIN_CONTEST_SLOTS, joinContest);
}