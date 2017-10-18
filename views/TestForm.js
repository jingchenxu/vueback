/**
 * Created by user on 2017/10/16.
 */
var template;
var property;
$.ajax({
	url: "/vueback/demojson/form.json",
	async:false,
	success: function (data) {
		// console.dir(data);
		property = data;
		// console.log(property)
		template = BasicComponents.form(property);
		// console.log(template)
	}
});
var TestForm = Vue.extend({
	beforeCreate: function () {
		// console.log(this)
	},
	template: template,
	data: function () {
		return{
			template: "<div>ceshiaaaaaaa</div>",
			property: [],
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
	},
	created:function(){
		// console.log("000000000000000000",this.form)
		
	},
	methods: {
		onSubmit: function(val) {
			console.log('看看外部组件的输出'+val);
			console.dir(val);
			// location.href='#/orderdetail/'+val.orderid;
			// this.$message(AlertIfo.TEST_INFO);
		}
	}
});