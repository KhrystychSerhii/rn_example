import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import {
	CHECK_PERMISSIONS, checkPermissionsSuccess, checkPermissionsFail
} from '../actions';
import { checkPermissions } from '../../services/DeviceApi'

function* checkPermissionsAsync() {
	try {
		const response = yield checkPermissions();
		yield put(checkPermissionsSuccess(response));
	} catch (e) {
		yield put(checkPermissionsFail(e));
	}
}

export function* watchPermissions() {
	yield takeLatest(CHECK_PERMISSIONS, checkPermissionsAsync);
}
