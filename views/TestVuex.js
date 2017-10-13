// 该组件用于测试vuex的集成

var template = '<div>{{message}}{{testvue.count}}</div>';

var TestVuex = Vue.extend({
	name: 'TestVuex',
	template: template,
	data: function () {
		return{
			message: 'test vuex'
		}
	},
	created: function () {
		console.log(this.$store.getters.count);
	},
	computed: Vuex.mapState(['testvue'])
});