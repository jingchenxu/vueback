var testvue = {
	state: {
		count: 0,
		message: 0
	} ,
	mutations: {
		"INCREMENT": function() {
			state.count++
		},
		"ADD": function () {
			state.message += msg;
		}
	},
	getters: {
		count: function (state) {
			return state.count;
		}
	},
	actions: {
		"ADD": function (store, param) {
			store.commit('ADD', param)
		}
	}
};