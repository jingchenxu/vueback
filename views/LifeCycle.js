/*
@author jcxu
@description 该页面主要用于演示生命周期
 */

var template = '<v-button>按钮</v-button>';

var LifeCycle = Vue.extend({
	template: template,
	name: 'LifeCycle',
	data: function () {
		return {

		}
	},
	beforeCreate: function () {
		console.group('beforeCreate 组件准备创建=====》');
		console.log('%c%s', 'color:red', 'el:' + this.$el);
		console.log('%c%s', 'color:red', 'el:' + this.$data);
		console.log('%c%s', 'color:blue', 'el:' + this.myname);
	},
	created: function () {
		console.group('created 组件创建完成=====》');
		//this.myGlobalMethod();
		this.$myMethod();
		console.dir(this);
		console.dir(this.$myMethod());
	},
	beforeMount: function () {
		console.group('created 组件准备挂载=====》');
		console.log('%c%s', 'color:red', 'el:' + this.$el);
		console.log('%c%s', 'color:red', 'el:' + this.$data);
		console.log('%c%s', 'color:red', 'el:' + this.myname);
	},
	mounted: function () {
		console.group('mounted 组件挂载完成=====》');
		this.$log('组件已经挂在完成了\n' +
			'      ."`".\n' +
			'  .-./ _=_ \\.-.\n' +
			' {  (,(oYo),) }}\n' +
			' {{ |   "   |} }\n' +
			' { { \\(---)/  }}\n' +
			' {{  }\'-=-\'{ } }\n' +
			' { { }._:_.{  }}\n' +
			' {{  } -:- { } }\n' +
			' {_{ }`===`{  _}\n' +
			'((((\\)     (/))))');
	},
	beforeUpdate: function () {
		console.group('beforeUpdate 组件准备更新=====》');
		console.log('%c%s', 'color:red', 'el:' + this.$el);
		console.log('%c%s', 'color:red', 'el:' + this.$data);
		console.log('%c%s', 'color:red', 'el:' + this.myname);
	},
	updated: function () {
		console.group('updated 组件更新完成=====》');
		console.log('%c%s', 'color:red', 'el:' + this.$el);
		console.log('%c%s', 'color:red', 'el:' + this.$data);
		console.log('%c%s', 'color:red', 'el:' + this.myname);
	},
	beforeDestroy: function () {
		console.group('beforeDestroy 组件即将销毁=====》');
		console.log('%c%s', 'color:red', 'el:' + this.$el);
		console.log('%c%s', 'color:red', 'el:' + this.$data);
		console.log('%c%s', 'color:red', 'el:' + this.myname);
	},
	destroyed: function () {
		console.group('destroyed 组件销毁=====》');
		console.log('%c%s', 'color:red', 'el:' + this.$el);
		console.log('%c%s', 'color:red', 'el:' + this.$data);
		console.log('%c%s', 'color:red', 'el:' + this.myname);
	}
});