var template = '<div class="my-container">' +
'<el-table :data="tableData" border style="width: 100%">' +
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
	created: function () {
		var me = this;
		$.get('/vueback/demojson/orderlist.json',function (data) {
			console.dir(data);
			me.tableData = data;
		});
	},
	methods: {
		formatter(row, column) {
			return row.address;
		},
		filterTag(value, row) {
			return row.tag === value;
		}
	}
});