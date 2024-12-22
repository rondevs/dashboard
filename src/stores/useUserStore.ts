import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			count: 1,
		};
	},
	getters: { getCount: (state) => state.count },
	actions: {
		increment() {
			this.count++;
		},
	},
});
