import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, THEME_CHANGE, NAVIGATE_TO_DASHBOARD, LOGOUT_SUCCESS, CHECK_AUTH_STATUS, AUTH_STATUS_CHECKED, CREATE_ACCOUNT, FETCH_MATCHES, FETCH_MATCHES_SUCCESS, FETCH_MATCHES_FAIL } from '../../utils/Constants';
// switch mode according to what is specified...
export const switchColors = colors => {
    return {
        type: THEME_CHANGE,
        payload: colors,
    };
};

export const loginRequest = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: { username, password }
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error

});

export const navigateToDashboard = () => ({
    type: NAVIGATE_TO_DASHBOARD
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const checkAuthStatus = () => ({
    type: CHECK_AUTH_STATUS,
});

export const authStatusChecked = (isAuthenticated, user = null) => ({
    type: AUTH_STATUS_CHECKED,
    payload: { isAuthenticated, user },
});

export const createAccount = (firstName,lastName,emailId,phoneNo,password) => ({
    type: CREATE_ACCOUNT,
    payload: {firstName,lastName,emailId,phoneNo,password}
});

export const fetchMatches = () => ({
    type:FETCH_MATCHES
});

export const fetchMatchesSuccess = (match) => ({
    type:FETCH_MATCHES_SUCCESS,
    payload:match
});

export const fetchMatchesFailure = (error) => ({
    type:FETCH_MATCHES_FAIL,
    payload:error
});