var template_switch = '  <el-form-item label="即时配送">\n' +
	'    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>\n' +
	'  </el-form-item>';

var template = '<switch></switch>';
BaseComponents.options.template = template_switch;
var Switch = Vue.extend({
	template: template,
	name: 'Switch',
	components: {
		'switch': BaseComponents
	}
});