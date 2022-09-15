import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useAPIstore = defineStore({
	id: 'api',
	state: () => ({
		fbData: null
	}),
	getters: {
		getFBdata: state => state.fbData
	},
	actions: {
		fetchFBdata() {
			return new Promise((resolve, reject) => {
				fetch('http://localhost:3000/')
					.then(response => {
						if (response.status === 500) throw new Error('server_error');
						return response.json();
					})
					.then(response => {
						const result = response.json();
						this.fbData = result;
						resolve(result);
					})
					.catch(err => {
						reject(err);
					});
			});
		}
	}
});
