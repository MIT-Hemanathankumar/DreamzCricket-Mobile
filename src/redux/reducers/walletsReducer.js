import { WALLET_FAILURE,WALLET_REQUEST,WALLET_SUCCESS } from "../../utils/Constants";

const initialState = {
    wallet: null,
    loading: false,
    error: null
}

const wallets = (state = initialState, action ) => {

    switch(action.type){
        case WALLET_REQUEST:
            return {...state, loading: true, error: null };
        case WALLET_SUCCESS:
            return {...state, wallet: action.payload, loading: false};
        case WALLET_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
           return state;

    }
}

export default wallets;
