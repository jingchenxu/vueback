/**
 * @author jcxu
 * @description 异步加载页面js
 * @param url
 * @constructor
 */
var MyRequire = function(url) {
	var reqiurePage = {};
	$.ajax({
		url: url,
		async: false,
		success: function (data) {
			requirePage = eval(data);
		}
	});
	return requirePage;
};