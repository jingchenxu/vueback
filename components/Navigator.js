var Navigator = Vue.extend({
	template: '<div class="navigator"><my-tag style="margin: 13px;"></my-tag><div class="userInformation">{{user.username}}</div></div>',
	props: ['user']
});
