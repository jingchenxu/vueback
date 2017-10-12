var template = '<div><demo v-bind:message="message"></demo></div>';

var Demopage = Vue.extend({
	name: 'demopage',
	template: template,
	components: {
		'demo': Demo
	},
	data: function () {
		return {
			message: 'show goodmessage'
		}
	}
});