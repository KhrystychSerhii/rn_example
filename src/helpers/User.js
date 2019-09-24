import {capitalize} from 'lodash';
import { MONTHS } from './Constants';

export const USER_PUBLIC_FIELDS = [
	'created_at',
	'name',
	'login',
	'email',
	'bio',
	'company',
	'hireable',
	'public_gists',
	'public_repos',
	'followers',
	'following',
	'site_admin',
	'type',
	'updated_at'
];

export const UPDATED_USER_FIELDS = [
	'login',
	'name',
	'bio',
	'company'
];

export const userViewParser = (user, userFields = USER_PUBLIC_FIELDS) => userFields
		.filter(key => !!user[key] || typeof user[key] === 'boolean' || user[key] === 0)
		.map(key => ({
			key,
			property: capitalize(key.split('_').join(' ')),
			value: userFieldParser(user[key])
		}));

export const isDate = (value) => !isNaN(new Date(value).getTime());

////////////
const userFieldParser = (value) => {
	if (typeof value === 'boolean') return value ? 'Yes' : 'No';
	if (typeof value === 'number') return value;
	if (isDate(value)) {
		const date = new Date(value);
		return `${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
	}

	return value;
};
