var template = '<div class="my-container">' +
	'<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>'+
	'<el-radio class="radio" v-model="radio" label="2">备选项</el-radio>'+
	'</div>';

var Radio = Vue.extend({
	template: template,
	data: function () {
		return {
			radio: '1'
		}
	}
});