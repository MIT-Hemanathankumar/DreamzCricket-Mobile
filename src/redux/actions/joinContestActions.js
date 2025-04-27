import {JOIN_CONTEST_SLOTS, JOIN_CONTEST_SLOTS_FAIL,JOIN_CONTEST_SLOTS_SUCCESS } from "../../utils/Constants";

export const joinContestSlots = (matchId,contestId,slotId) => ({
    type: JOIN_CONTEST_SLOTS,
    payload: {matchId,contestId,slotId}
});

export const joinContestSlotsSuccess = (data) => ({
    type: JOIN_CONTEST_SLOTS_SUCCESS,
    payload: data
});

export const joinContestSlotsFail = (error) => ({
    type: JOIN_CONTEST_SLOTS_FAIL,
    payload: error
});