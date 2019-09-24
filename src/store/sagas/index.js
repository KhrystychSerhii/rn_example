import { all, fork } from 'redux-saga/effects';

import { watchUsers, watchUser } from './users';
import { watchSignIn, watchSignedInUser } from './auth';
import { watchPermissions } from './device';

export function* rootSaga () {
	yield all([
		// users
		fork(watchUsers),
		fork(watchUser),
		// auth
		fork(watchSignIn),
		fork(watchSignedInUser),
		// device
		fork(watchPermissions)
	])
}
