export const GET_USERS = 'GET USERS';
export const getUsersAction = (payload) => ({ type: GET_USERS, payload });

export const GET_USERS_SUCCESS = 'GET USERS SUCCESS';
export const getUsersSuccessAction = (payload) => ({ type: GET_USERS_SUCCESS, payload });

export const GET_USERS_FAIL = 'GET USERS FAIL';
export const getUsersFailAction = (payload) => ({ type: GET_USERS_FAIL, payload });


export const GET_USER = 'GET_USER';
export const getUserAction = (login) => ({ type: GET_USER, payload: login });

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccessAction = (payload) => ({ type: GET_USER_SUCCESS, payload });

export const GET_USER_FAIL = 'GET_USER_FAIL';
export const getUserFailAction = (payload) => ({ type: GET_USER_FAIL, payload });
