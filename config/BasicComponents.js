/**
 * Created by user on 2017/10/17.
 */

// 这是一个基本的输入框
var base_input = function (data) {
	return '<el-input v-model="'+data.model+'" placeholder="'+data.placeholder+'"></el-input>';
};

// 这是一个基本的下拉选择框
var base_select = function (data) {
	var template = ' <el-select v-model="'+data.model+'" placeholder="'+data.placeholder+'">';
	for(var j=0;j<data.children.length;j++){
		template+='<el-option label="'+data.children[j].label+'" value="'+data.children[j].value+'"></el-option>';
	}
	template+='</el-select>';
	return template;
};


// 这是一个button
var base_button = function (data) {
	return '<el-button type="'+data.color+'" @click="onSubmit">'+data.content+'</el-button>' ;
};

// 这是一个基本的文字填写框
var base_textarea = function (data) {
	return '<el-input type="'+data.type+'" v-model="'+data.model+'"></el-input>' ;
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

// 这是一个基本的radio组件
var base_radio = function (data) {
	var template = ' <el-radio-group v-model="' + data.model + '">';
	for (var j = 0; j < data.children.length; j++) {
		template += '<el-radio label="' + data.children[j].label + '" value="' + data.children[j].value + '"></el-radio>';
	}
	template += '</el-radio-group>';
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
		}else{
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
	button:base_button,
	textarea: base_textarea,
	radio: base_radio,
	form:base_form,
	checkbox:base_checkbox
};