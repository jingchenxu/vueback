var Navigator = Vue.extend({
	template: '<div class="navigator">' +
			  '<my-hamburger style="margin: 15px 0 0 20px; float: left;"></my-hamburger>' +
			  '<my-PageName style="float: left; margin-left: 20px;"></my-PageName>' +
			  '<div class="userInformation">{{user.username}}</div></div>',
	props: ['user']
});
