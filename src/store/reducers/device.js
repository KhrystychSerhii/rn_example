import {
	CHECK_PERMISSIONS, CHECK_PERMISSIONS_SUCCESS, CHECK_PERMISSIONS_FAIL
} from '../actions';

const initialState = {
	permissions: null,
	error: null,
	loading: false
};

const deviceReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_PERMISSIONS: {
			return {
				...state,
				loading: true
			}
		}
		case CHECK_PERMISSIONS_SUCCESS: {
			return {
				...state,
				permissions: action.payload,
				loading: false
			}
		}
		case CHECK_PERMISSIONS_FAIL: {
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

export default deviceReducer;
