import {JOIN_CONTEST_SLOTS, JOIN_CONTEST_SLOTS_FAIL, JOIN_CONTEST_SLOTS_SUCCESS } from "../../utils/Constants";

const initialState = {
   contest: null,
   loading: false,
   error: null 
}

const contest = (state = initialState, action) => {

    switch(action.type){
         case JOIN_CONTEST_SLOTS:
                  return {contest:null,loading: true, error: null };
        case JOIN_CONTEST_SLOTS_SUCCESS:
            return {contest:action.payload, loading: false};
        case JOIN_CONTEST_SLOTS_FAIL:
            return {loading:false, error: action.payload };
        default:
            return state;
    }

}

export default contest;