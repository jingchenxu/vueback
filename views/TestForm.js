/**
 * Created by user on 2017/10/16.
 */

console.log(BaseComponents);
var property = {
	ref: 'form',
	model: 'form',
	width: '100px',
	options:[
		{
			label:'复选框',
			model:[],
			type:"checkbox",
			children:[
				{label:"1",name:""},
				{label:"2",name:""},
				{label:"3",name:""},
				{label:"4",name:""}
			]
		},
		{
			label:"单选",
			modal:"",
			type:"radio",
			children:[
				{label:"1",name:""},
				{label:"2",name:""},
				{label:"4",name:""}
			]
		}
	]
};
var template=BaseComponents.forms(property);

// var template = '<el-form ref="form" :model="form" label-width="80px">'+
// 		'<el-form-item label="活动性质">'+
// 		'<el-checkbox-group v-model="form.type">'+
// 		'<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>'+
// 		'<el-checkbox label="地推活动" name="type"></el-checkbox>'+
// 		'<el-checkbox label="线下主题活动" name="type"></el-checkbox>'+
// 		'<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>'+
// 		'</el-checkbox-group>'+
// 		'</el-form-item>'+
// 		'<el-form-item label="特殊资源">'+
// 		'<el-radio-group v-model="form.resource">'+
// 		'<el-radio label="线上品牌商赞助"></el-radio>'+
// 		'<el-radio label="线下场地免费"></el-radio>'+
// 		'</el-radio-group>'+
// 		'</el-form-item>'+
// 		'<el-form-item label="活动形式">'+
// 		'<el-input type="textarea" v-model="form.desc"></el-input>'+
// 		'</el-form-item>'+
// 		'<el-form-item>'+
// 		'<el-button type="primary">立即创建</el-button>'+
// 		'<el-button>取消</el-button>'+
// 		'</el-form-item>'+
// 		'</el-form>';

var TestForm = Vue.extend({
	template: template,
	data: function () {
		return{
			message: 'test vuex',
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		}
	}
});