import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const headers = {
	'Content-Type': 'application/json'
};
const baseURL = 'https://api.github.com';

class Http {
	_instance;
	_token;

	constructor(baseURL, headers) {
			this._instance = axios.create({
				url: baseURL,
				baseURL,
				headers
			});
	}

	get(url, config = {}) {
		return this._instance.get(url, config);
	}

	async signIn({ password, username }) {
		try {
			const token = `Basic ${btoa(`${username}:${password}`)}`;
			const response = await this._instance.get('/user', {
				headers: {
					...headers,
					Authorization: token
				}
			});
			await this.setToken(token);
			return response;
		} catch (e) {
			throw e;
		}
	}

	async getSignedInUser() {
		try {
			const token = await AsyncStorage.getItem('token');
			if (!token) return;
			await this.setToken(token);
			return await this._instance.get('/user');
		} catch (e) {
			throw e;
		}
	}

	async setToken(token) {
		try {
			this._token = token;
			await AsyncStorage.setItem('token', this._token);
			return this.updateHeader();
		} catch (e) {
			console.log('Set Token Error', e);
		}
	}

	async updateHeader() {
		if (!this._token) {
			this._token = await AsyncStorage.getItem('token');
		}
		if (this._token) {
			this._instance.defaults.headers['Authorization'] = this._token;
		}
	}
}


export default new Http(baseURL, headers);
