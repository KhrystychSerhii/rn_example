import {
	SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
	GET_SIGNED_IN_USER, GET_SIGNED_IN_USER_SUCCESS, GET_SIGNED_IN_USER_FAIL
} from '../actions';

const initialState = {
	user: null,
	loading: false,
	error: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SIGNED_IN_USER:
		case SIGN_IN: {
			return {
				...state,
				loading: true
			}
		}

		case GET_SIGNED_IN_USER_SUCCESS:
		case SIGN_IN_SUCCESS: {
			return {
				...state,
				user: action.payload,
				loading: false
			}
		}

		case GET_SIGNED_IN_USER_FAIL:
		case SIGN_IN_FAIL: {
			return {
				...state,
				error: action.payload,
				loading: false
			}
		}

		default: {
			return state;
		}
	}
};


export default authReducer;
