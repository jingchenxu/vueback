/**
 * Created by user on 2017/10/16.
 */

console.log(BasicComponents);
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
		},
		{
			label:"input",
			modal:[],
			type:"input",
			placeholder:"默认值"
		},
		{
			label: '活动区域',
			model: 'form.region',
			type:"select",
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
		}
	]
};
var template=BasicComponents.form(property);
console.log(template)
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