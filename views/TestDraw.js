/*
@author jxu
@description 该页面主要用于测试绘制详情页的功能
 */

var template = '<emptypanel v-bind:form="form" v-bind:content="content"></emptypanel>';
console.dir(EmptyPanel);
console.log(EmptyPanel.options.template);
var input = BaseComponents.input('input', '测试信息');
var form = BaseComponents.form();
var select = BaseComponents.select();
var tag = BaseComponents.tag();
select.property.label = '测试';
console.log('======================');
console.log(select);
var textarea = BaseComponents.textarea();
var radio = BaseComponents.radio();
form.add(select.template());
form.add(textarea.template());
form.add(radio.template());
form.add(tag.template());
console.log(tag.template()+'1231542134543253');
console.log('========='+form.template());
// console.log('========='+form.template());
//console.log('========='+form.template());
//console.log('1111111111'+tag.template());
EmptyPanel.options.template = form.template();
var TestDraw = Vue.extend({
	template: template,
	name: 'TestDraw',
	components: {
		'emptypanel': EmptyPanel
	},
	data: function () {
		var content = '<div>这个是添加的第一个组件</div>';
		var form = {
			input: ''
		};
		return {
			content: content,
			form: form
		}
	}
});
