var template = 	'    <el-menu default-active="2" theme="dark" ' +
	':style="sidebarWidth" class="el-menu-vertical-demo" style="transition: width 0.5s"' +
	'@open="handleOpen" ' +
	'@close="handleClose" ' +
	':collapse="isCollapse">\n' +
	'<template slot="title"><img src="../img/logo.jpg" alt=""></template>'+	
	'      <el-submenu key="menu.index" v-bind:menu="menu" v-for="menu in menuList" :index="menu.index">\n' +
	'        <template slot="title"><i :class="menu.icon"></i><span slot="title">{{menu.title}}</span></template>\n' +
	'          <el-menu-item v-on:click="link(submenu.url)" ' +
	'key="submenu.index" v-bind:submenu="submenu" ' +
	'v-for="submenu in menu.submenu" ' +
	':index="submenu.index">{{submenu.title}}</el-menu-item>\n' +
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
			//console.dir(data);
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
	computed: {
		isCollapse: function () {
			//console.log(this.$store.getters.sidebar);
			return !this.$store.getters.sidebar
		},
		sidebarWidth: function () {
			if (this.$store.getters.sidebar) {
				return {width: '200px'}
			} else {
				return {width: '65px'}
			}
		}
	},
	methods: {
		handleOpen: function(key, keyPath) {
			//console.log(key, keyPath);
		},
		handleClose: function (key, keyPath) {
			//console.log(key, keyPath);
		},
		link: function (url) {
			//console.log(url);
			location.href = url;
		}
	}
});