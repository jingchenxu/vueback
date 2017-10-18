(function com(){
	var template = '<list @container="itemChange" v-bind:url="url"></list>';

	var OrderList = Vue.extend({
		name: 'OrderList',
		template: template,
		components: {
			'list': ListPage
		},
		data: function () {
			return{
				url: '/vueback/demojson/orderlist.json',
				titleList: []
			}
		},
		methods: {
			// 点击每行时跳转的页面
			itemChange: function(val) {
				console.log('看看外部组件的输出'+val);
				console.dir(val);
				location.href='#/orderdetail/'+val.orderid;
				this.$message(AlertIfo.TEST_INFO);
			}
		}
	});
	return OrderList;
})()