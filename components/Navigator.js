var Navigator = Vue.extend({
	template: '<div class="navigator"><div class="userInformation">{{user.username}}</div></div>',
	props: ['user']
});