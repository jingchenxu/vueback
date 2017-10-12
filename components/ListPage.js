var template = '<div class="my-container">' +
'<el-table :data="tableData" @row-click="rowlink" border style="width: 100%">' +
	'<el-table-column prop="date" label="日期" sortable width="180"></el-table-column>'+
	'<el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>'+
	'<el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>'+
	'<el-table-column prop="tag" label="标签" width="100" :filters="[{ text: \'家\', value: \'家\' }, { text: \'公司\', value: \'公司\' }]" :filter-method="filterTag" filter-placement="bottom-end">' +
	'<template scope="scope">'+
		'<el-tag :type="(scope.row.tag === \'家\') ? \'primary\' : \'success\'" close-transition>{{scope.row.tag}}</el-tag>'+
    '</template>'+
	'</el-table-column>'+
	'</el-table>'+
	'</div>';

var ListPage = Vue.extend({
	template: template,
	data: function () {
		return {
			tableData: []
		}
	},
	props: ['url'],
	created: function () {
		var me = this;
		var url = me.$props.url;
		console.dir(me);
		$.get(url,function (data) {
			console.dir(data);
			me.tableData = data;
		});
	},
	methods: {
		formatter: function(row, column) {
			return row.address;
		},
		filterTag: function(value, row) {
			return row.tag === value;
		},
		rowlink: function (val) {
			console.log('某一行被点击了'+val);
			//location.href='#/orderdetail/'+val.orderid;
			this.$emit('container', val)
		}
	}
});