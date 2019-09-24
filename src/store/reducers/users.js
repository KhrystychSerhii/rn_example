import {
	GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL,
	GET_USER, GET_USER_SUCCESS, GET_USER_FAIL
} from '../actions';

const initialState = {
	users: [],
	user: null,
	loading: false,
	error: null
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS: {
			return {
				...state,
				loading: true
			}
		}

		case GET_USERS_SUCCESS: {
			return {
				...state,
				loading: false,
				users: [
					...state.users,
					...action.payload
				]
			}
		}

		case GET_USERS_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload
			}
		}

		case GET_USER: {
			return {
				...state,
				loading: true
			}
		}

		case GET_USER_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.payload
			}
		}

		case GET_USER_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload
			}
		}

		default: {
			return state;
		}
	}
};


export default usersReducer;
