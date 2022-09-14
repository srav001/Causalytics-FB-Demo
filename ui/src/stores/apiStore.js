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
			return new Promise(resolve => {
				fetch('http://localhost:3000/')
					.then(response => response.json())
					.then(result => {
						console.log(result)
						this.fbData = result;
						resolve(result);
					});
			});
		}
	}
});
