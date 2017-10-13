var testapps = {
	state: {
		message1: 'good message',
		message2: 'bad message'
	},
	mutations: {
		'CHANGEMESSAGE': function (val) {
			state.message1 = state.message1+val;
		}
	},
	getters: {
		message1: function (state) {
			return state.message1
		}
	},
	actions: {
		"CHANGEMESSAGE": function (store, param) {
			store.comment('CHANGEMESSAGE', param)
		}
	}
};