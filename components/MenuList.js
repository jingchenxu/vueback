var template = 	'    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">\n' +
	'      <el-submenu key="menu.index" v-bind:menu="menu" v-for="menu in menuList" index="menu.index">\n' +
	'        <template slot="title"><i class="menu.icon"></i>{{menu.title}}{{menu.index}}</template>\n' +
	'          <el-menu-item key="submenu.index" v-bind:submenu="submenu" v-for="submenu in menu.submenu" index="submenu.index">{{submenu.title}}{{submenu.index}}</el-menu-item>\n' +
	'      </el-submenu>\n' +
	'    </el-menu>\n';

var MenuList = Vue.extend({
	template: template,
	name: 'MenuList',
	data: function () {
		return {
			menuList: []
		}
	},
	created: function () {
		var me = this;
		var url = '/vueback/demojson/menulist.json';
		$.get(url, function (data) {
			console.dir(data);
			me.menuList = data;
		});
		var response = this.$axios_get('/vueback/demojson/menulist.json');
		response
			.then(function (data) {
			    me.$log(data)
		    })
			.catch(function (error) {
				me.$log(error)
			})
	},
	methods: {
		handleOpen: function(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose: function (key, keyPath) {
			console.log(key, keyPath);
		},
		link: function (url) {
			console.log(url);
			location.href = url;
		}
	}
});