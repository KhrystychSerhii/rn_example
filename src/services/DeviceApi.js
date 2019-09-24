import { PermissionsAndroid } from 'react-native';


export const checkPermissions = () => Promise.all(
		Object.keys(PermissionsAndroid.PERMISSIONS)
			.map((key) => PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS[key]))
	).then(
		(permissions) =>
			Object.keys(PermissionsAndroid.PERMISSIONS)
			.reduce((result, current, i) => {
				result[current] = permissions[i];
				return result;
			}, {})
	);
