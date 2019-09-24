import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import {
	GET_USERS, getUsersSuccessAction, getUsersFailAction,
	GET_USER, getUserSuccessAction, getUserFailAction,
} from '../actions';
import {getUsers, getUser} from "../../services/Api";



function* getUsersAsync({ payload }) {
	try {
		const response = yield getUsers(payload);
		yield put(getUsersSuccessAction(response.data || []));
	} catch (e) {
		yield put(getUsersFailAction(e))
	}
}

function* getUserAsync({ payload }) {
	try {
		const response = yield getUser(payload);
		yield put(getUserSuccessAction(response.data))
	} catch (e) {
		yield put(getUserFailAction(e))
	}
}

export function* watchUsers() {
	yield takeLatest(GET_USERS, getUsersAsync)
}
export function* watchUser() {
	yield takeLatest(GET_USER, getUserAsync)
}
