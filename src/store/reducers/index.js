import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users';
import authReducer from './auth';
import deviceReducer from './device';

const rootReducer = combineReducers({
	users: usersReducer,
	auth: authReducer,
	device: deviceReducer
});

export default rootReducer;
