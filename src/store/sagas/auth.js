import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import {
	SIGN_IN, signInActionSuccess, signInActionFail,
	GET_SIGNED_IN_USER, getSignedInUserSuccess, getSignedInUserFail
} from '../actions';
import { signIn, signedInUser } from '../../services/Api';

function* signInAsync(action) {
	try {
		const response = yield signIn(action.payload);
		yield put(signInActionSuccess(response.data));
	} catch (e) {
		yield put(signInActionFail(e));
	}
}

function* getSignedInUserAsync() {
	try {
		const response = yield signedInUser();
		if (!response) yield put(getSignedInUserFail({ message: 'No user header' }));
		if (response) yield put(getSignedInUserSuccess(response.data));
	} catch (e) {
		yield put(getSignedInUserFail(e));
	}
}

export function* watchSignIn() {
	yield takeLatest(SIGN_IN, signInAsync)
}
export function* watchSignedInUser() {
	yield takeLatest(GET_SIGNED_IN_USER, getSignedInUserAsync);
}
