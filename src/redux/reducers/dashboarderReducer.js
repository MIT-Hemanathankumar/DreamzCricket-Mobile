import { act } from "react";
import { FETCH_MATCHES,FETCH_MATCHES_SUCCESS,FETCH_MATCHES_FAIL } from "../../utils/Constants";

const initialState = {
    matches: null,
    loading: false,
    error: null,
  };

  const dashboard = (state = initialState, action) => {

     switch (action.type) {
        case FETCH_MATCHES:
          return { ...state, loading: true, error: null };
        case FETCH_MATCHES_SUCCESS:
            return {...state,loading: false,matches: action.payload};
        case FETCH_MATCHES_FAIL:
            return {...state,loading: false,error: action.payload};
        default:
          return state;
      }

  }

  export default dashboard;