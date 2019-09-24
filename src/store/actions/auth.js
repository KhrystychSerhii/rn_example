export const SIGN_IN = 'SIGN_IN';
export const signInAction = (user) => ({ type: SIGN_IN, payload: user });

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const signInActionSuccess = (payload) => ({ type: SIGN_IN_SUCCESS, payload });

export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const signInActionFail = (payload) => ({ type: SIGN_IN_FAIL, payload });



export const GET_SIGNED_IN_USER = 'GET_SIGNED_IN_USER';
export const getSignedInUser = () => ({ type: GET_SIGNED_IN_USER });

export const GET_SIGNED_IN_USER_SUCCESS = 'GET_SIGNED_IN_USER_SUCCESS';
export const getSignedInUserSuccess = (payload) => ({ type: GET_SIGNED_IN_USER_SUCCESS, payload });

export const GET_SIGNED_IN_USER_FAIL = 'GET_SIGNED_IN_USER_FAIL';
export const getSignedInUserFail = (payload) => ({ type: GET_SIGNED_IN_USER_FAIL, payload });
