var template = '<div v-on:click="clickMenu(menu.id)" class="menu">{{menu.text}}</div>';

var Menu = Vue.extend({
	template: template,
	props: ['menu'],
	beforeCreate: function () {
		console.log('组件即将创建')
	},
	methods: {
		clickMenu: function (id) {
			console.log('菜单被点击了'+id);
			$.get('/vueback/views/Page1.js',function (data) {
				//console.dir(eval(data));
				Vue.component('my-page1', eval(data));
			})
		}
	}
});