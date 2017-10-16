/*
@author jcxu
@description 此文件用于注册元组件
 */

// 这是一个基本的输入框
var base_input = function (model, placeholder) {
	return '<el-input v-model="'+model+'" placeholder="'+placeholder+'"></el-input>';
};

// 这是一个基本的下拉选择框
var base_select = function () {
	var s = {};
	s.property = {
		label: '活动区域',
		model: 'form.region',
		placeholder: '请选择活动区域',
		options: [
			{
				label: '区域一',
				value: 'shanghai'
			},
			{
				label: '区域二',
				value: 'beijing'
			}
		]
	};
	s.start = function() {
		var start = '  <el-form-item label="'+s.property.label+'">' +
			'    <el-select v-model="form.region" placeholder="请选择活动区域">';
		return start;
	};
	s.end = '    </el-select>' +
		'  </el-form-item>';
	s.template = function () {
		var template = s.start();
		for(var i=0; i<s.property.options.length; i++) {
			template += '<el-option label="'+s.property.options[i].label+'" value="'+s.property.options[i].value+'"></el-option>';
		}
		template += s.end;
		return template;
	};
	return s;
};

// 创建一个空白的form表单
var base_form = function () {
	var f = {};
	f.property = {
		ref: 'form',
		model: 'form',
		width: '100px'
	};
	f.start = '<el-form ref="'+f.property.ref+'" :model="'+f.property.model+'" label-width="'+f.property.width+'">';
	f.end = '</el-form>';
	f.elementList = [];
	f.elementList[0] = f.start;
	f.add = function (base_component) {
		f.elementList.push(base_component);
	};
	f.template = function () {
		var template = '';
		for(var i=0; i<f.elementList.length; i++){
			template += f.elementList[i];
		}
		template += f.end;
		return template;
	};
	return f;
};

// 这是一个基本的文字填写框
var base_textarea = function () {
	var t = {};
	t.property = {
		label: '活动形式',
		type: 'textarea',
		model: 'form.desc'
	};
	t.template = function () {
		var template = '  <el-form-item label="'+t.property.label+'">' +
			'    <el-input type="'+t.property.type+'" v-model="'+t.property.model+'"></el-input>' +
			'  </el-form-item>';
		return template;
	};
	return t;
};

// 这是一个基本的radio组件
var base_radio = function () {
	var r = {};
	r.property = {
		label: '特殊资源',
		model: 'form.resource',
		radioList: [
			{
				label: '线上品牌赞助商'
			},
			{
				label: '线下场地免费'
			}
		]
	};
	r.start = '  <el-form-item label="特殊资源">' +
		'    <el-radio-group v-model="form.resource">';
	r.end = 		'    </el-radio-group>' +
		'  </el-form-item>';
	r.template = function () {
		var template = r.start;
		for(var i=0; i<r.property.radioList.length; i++) {
			template += '<el-radio label="'+r.property.radioList[i].label+'"></el-radio>';
		}
		template += r.end;
		return template;
	};
	return r;
};

var base_tag = function () {
	var t = {};
	t.property = {
		type: '',
		closable: false,
		color: '',
		hit: false,
		value: '223'
	};
	t.template = function () {
		var template = '<el-tag type="'+t.property.type+
			'" v-bind:closable="'+t.property.closable+
			'" v-bind:hit="'+t.property.hit+
			'" color="'+t.property.color+'">'
			+ t.property.value+
			'</el-tag> '
		return template;
	};
	return t;
};

var BaseComponents = {
	input: base_input,
	form: base_form,
	select: base_select,
	textarea: base_textarea,
	radio: base_radio,
	tag: base_tag
};