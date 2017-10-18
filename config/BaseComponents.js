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
	s.start = function () {
		var start = '  <el-form-item label="'+s.property.label+'">' +
			'    <el-select v-model="form.region" placeholder="请选择活动区域">';
		return start;
	};
	s.end = function () {
		var end = '    </el-select>' +
			'  </el-form-item>';
		return end;
	};
	s.template = function () {
		var template = s.start;
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
	r.start = function () {
		var start = '  <el-form-item label="特殊资源">' +
			'    <el-radio-group v-model="form.resource">';
		return start;
	};
	r.end = function () {
		var end = '    </el-radio-group>' +
			'  </el-form-item>';
		return end;
	};
	r.template = function () {
		var template = r.start();
		for(var i=0; i<r.property.radioList.length; i++) {
			template += '<el-radio label="'+r.property.radioList[i].label+'"></el-radio>';
		}
		template += r.end();
		return template;
	};
	return r;
};

var base_tag = function() {
	var t = {};
	t.property = {
		color: '',
		hit: false,
		value: '首页',
		closable: 'true',
		type: 'primary',
		value: 'test'
	};
	t.template = function () {
		var template = '<el-tag' +
			'  v-bind:closable="' + t.property.closable + '"' +
			'  type="' + t.property.type + '"' +
			'>' + t.property.value + '</el-tag>';
		return template;
	};
	return t;
};

//CheckBox组件
var base_checkbox=function (data,template) {
	template=template?template:''+'<el-checkbox-group>';
	for(var j=0;j<data.children.length;j++){
		template+='<el-checkbox label="'+data.children[j].label+'" name="type"></el-checkbox>';
	}
	template+='</el-checkbox-group>';
    return template;
};

//form组件
var base_forms=function(data){
    var options=data.options;
	var template='<el-form ref="'+data.ref+'" :model="'+data.model+'" label-width="'+data.width+'">';
	for(var i=0;i<options.length;i++){
		if(options[i].type=="checkbox"){
			template+='<el-form-item label="'+options[i].label+'">';
			var template1=eval("base_"+options[i].type+"(options[i],template);");
			template=template1+'</el-form-item>';
		}
	}
	template+='</el-form>';
    return template;
};

var BaseComponents = {
	input: base_input,
	form: base_form,
	select: base_select,
	textarea: base_textarea,
	radio: base_radio,
	tag: base_tag,
	forms:base_forms,
	checkbox:base_checkbox
};