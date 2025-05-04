import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGOUT_SUCCESS, AUTH_STATUS_CHECKED, CREATE_ACCOUNT,CHECK_AUTH_STATUS } from "../../utils/Constants";
import { Alert } from "react-native";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  isAuthStatusChecked: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT_SUCCESS:
      return { ...initialState, isAuthenticated: false };
    case LOGOUT:
      return { ...initialState };
    case CHECK_AUTH_STATUS:
      return {...state,isAuthenticated:false }
    case AUTH_STATUS_CHECKED:
      return { ...state, isAuthenticated: action.payload.isAuthenticated};
    case CREATE_ACCOUNT:
      return {...state, loading: true, isAuthenticated: false, user: action.payload};
    default:
      return state;
  }
};

export default authReducer;