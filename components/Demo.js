var template = '<div>{{message}}</div>';

var Demo = Vue.extend({
	template: template,
	props: ['message']
});