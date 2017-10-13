/*
@author jxu
@description 这个是一个空白页面，主要的作用是用于绘制页面的
 */

var template = '<div class="my-container"></div>';

var EmptyPanel = Vue.extend({
	template: template,
	name: 'EmptyPanel',
	props: ['content'],
	data: function () {
		return {
			form: {
				input: ''
			},
			input: ''
		}
	},
	created: function () {
		console.log('==================');
		console.dir(this._props.form);
	}
});