/**
 * Created by user on 2017/10/16.
 */
var template = "<div>ceshiaaaaaaa</div>";
var datajson;
$.ajax({
	url: "/vueback/demojson/form.json",
	async:false,
	success: function (data) {
		datajson=data;
		// template = BasicComponents.form(datajson);
	}
});
var TestForm = Vue.extend({
	template: template,
	name:'TestForm',
	data: function () {
		return{
			property: datajson,
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			rules:{
				region: [
					{ required: true, message: '请选择活动区域', trigger: 'change' }
				]
			}
		}
	},
	beforeCreate: function () {
		// console.log(template)
	},
	created:function(){
		// console.log(this.property,datajson)
		TestForm.options.template = BasicComponents.form(this.property)
		// console.log(TestForm.options)
	},
	methods: {
		onSubmit: function(val) {
			console.log('看看外部组件的输出'+val);
			console.dir(val);
			this.property.options[0].label = "hahaha";
			this.property.options.push({
					"label": "",
					"type": "button",
					"content": "取消",
					"color": "",
					"clickfn": ""
				})
			// console.log(this.property.options[0],this.property.rules)
			// console.log(TestForm.options)
			console.log(this.$data,this.$refs.form)
			this.$refs.form.validate(function(valid){
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
			// this.$message(AlertIfo.TEST_INFO);
		},
		resetForm:function(){
			this.$refs.form.resetFields();
		}
	}
});