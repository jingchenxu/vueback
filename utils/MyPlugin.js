var MyPlugin = {};

MyPlugin.install = function (Vue, options) {
    // 没搞懂
	Vue.myGlobalMethod = function () {
		console.log('function1');
		return 'function1';
	};
    
	// 没搞懂
	Vue.directive('my-directive', {
		bind: function (el, binding, vnode, oldVnode) {
			console.log('function2');
		}
	});

	Vue.mixin({
		created: function () {
			console.log('function3');
		}
	});

	Vue.prototype.$myMethod = function (methodOptions) {
		console.log('function4');
	};

	// 日志只会在允许输出的情况下才会输出
	Vue.prototype.$log = function (val) {
		if(IndexConfig.DEBUG_IS_ON){
			console.log(val);
		}
	};
	
	/*
	@author jcxu
	@description 该方法主要封装的是axios的get请求
	@TODO 后期支持浏览器缓存
	 */
	Vue.prototype.$axios_get = function (url, options) {
		// 设置axios拦截器
		axios.interceptors.request.use(function (config) {
			console.log('拦截器被触发了！');
			return config;
		},function (error) {
			return Promise.reject(error);
		});
		return axios.get(url);
	}
};