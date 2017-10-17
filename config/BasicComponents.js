/**
 * Created by user on 2017/10/17.
 */

// 这是一个基本的输入框
var base_input = function (data) {
	return '<el-input v-model="'+data.model+'" placeholder="'+data.placeholder+'"></el-input>';
};

// 这是一个基本的下拉选择框
var base_select = function () {
	var s = new Object();
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
		var template = s.start();
		for(var i=0; i<s.property.options.length; i++) {
			template += '<el-option label="'+s.property.options[i].label+'" value="'+s.property.options[i].value+'"></el-option>';
		}
		template += s.end();
		return template;
	};
	return s;
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

//CheckBox组件
var base_checkbox = function (data, template) {
	template = template ? template : '' +'<el-checkbox-group>';
	for(var j=0;j<data.children.length;j++){
		template+='<el-checkbox label="'+data.children[j].label+'" name="type"></el-checkbox>';
	}
	template+='</el-checkbox-group>';
	return template;
};

//form组件
var base_form=function(data){
	var options=data.options;
	var template='<el-form ref="'+data.ref+'" :model="'+data.model+'" label-width="'+data.width+'">';
	for(var i=0;i<options.length;i++){
		if(options[i].type=="checkbox"){
			template+='<el-form-item label="'+options[i].label+'">';
			var resulttemplate = eval("base_" + options[i].type +"(options[i],template);");
			template = resulttemplate+'</el-form-item>';
		}
		if(options[i].type=="input"){
			template+='<el-form-item label="'+options[i].label+'">';
			var template1=eval("base_"+options[i].type+"(options[i]);");
			template =template+template1+'</el-form-item>';
		}
		if(options[i].type=="input"){
			template+='<el-form-item label="'+options[i].label+'">';
			var template1=eval("base_"+options[i].type+"(options[i]);");
			template =template+template1+'</el-form-item>';
		}
	}
	template+='</el-form>';
	return template;
};

var BasicComponents = {
	input: base_input,
	select: base_select,
	textarea: base_textarea,
	form:base_form,
	checkbox:base_checkbox
};