import { WALLET_SUCCESS,WALLET_REQUEST,WALLET_FAILURE } from "../../utils/Constants";

export const walletRequest = () => ({
    type:WALLET_REQUEST
});

export const walletSuccess = (data) => ({
    type: WALLET_SUCCESS,
    payload: data
});

export const walletFailure = (error) => ({
    type: WALLET_FAILURE,
    payload: error
}); 