export const CHECK_PERMISSIONS = 'CHECK_PERMISSIONS';
export const checkPermissions = () => ({ type: CHECK_PERMISSIONS });

export const CHECK_PERMISSIONS_SUCCESS = 'CHECK_PERMISSIONS_SUCCESS';
export const checkPermissionsSuccess = (payload) => ({ type: CHECK_PERMISSIONS_SUCCESS, payload });

export const CHECK_PERMISSIONS_FAIL = 'CHECK_PERMISSIONS_FAIL';
export const checkPermissionsFail = (payload) => ({ type: CHECK_PERMISSIONS_FAIL, payload });
