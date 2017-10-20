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
				// date2: '',
				// delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			rules:{
				region: [
					{ required: true, message: '请选择活动区域', trigger: 'change' }
				],
				date1: [
					{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
				],
				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				type: [
					{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
				],
				resource: [
					{ required: true, message: '请选择活动资源', trigger: 'change' }
				],
				desc: [
					{ required: true, message: '请填写活动形式', trigger: 'blur' }
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
			// console.log(this.$data,this.$refs.form)
			var _this=this;
			this.$refs.form.validate(function(valid){
				if (valid) {
					var date={
						name: _this.form.name,
						region: _this.form.region,
						date1: _this.form.date1,
						date2: _this.form.date2,
						delivery: _this.form.delivery,
						type: _this.form.type,
						resource: _this.form.resource,
						desc: _this.form.desc
					}
					console.log(date)
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
		},
		change1:function(){
			console.log(this.form)
		}
	}
});