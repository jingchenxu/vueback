var Navigator = Vue.extend({
	template: '<div class="navigator" style="min-width: 800px;">' +
			  '<my-hamburger style="margin: 15px 0 0 20px; float: left;"></my-hamburger>' +
			  '<my-PageName style="float: left; margin-left: 20px;"></my-PageName>' +
			  '<el-menu class="navbar" mode="horizontal" style="float:right; background-color: #fff;"> ' +
			  '<div style="overflow: hidden; float: left;"> ' +
			  '<span style="display: block; float: left; padding-right: 10px;">{{user.username}}</span>'+
			  '<img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="" class="user-avatar"> ' +
			  '</div> ' +
			  '<el-dropdown trigger="click" style="float: right;"> ' +
			  '<i class="el-icon-caret-bottom" style="margin: 20px 5px; display: block; cursor: pointer;"></i> ' +
			  '<el-dropdown-menu slot="dropdown"> ' +
			  '<router-link to="/" style="text-decoration: none;"> ' +
			  '<el-dropdown-item style="color: black;">首页 </el-dropdown-item> </router-link> ' +
			  '<a href="https://github.com/DEEP-WATER/vueback" style="text-decoration: none; color: black;"> ' +
			  '<el-dropdown-item>项目地址 </el-dropdown-item> </a> ' +
			  '<el-dropdown-item divided><span style="display:block;">退出登录</span></el-dropdown-item> ' +
			  '</el-dropdown-menu> ' +
			  '</el-dropdown></el-menu>' +
			  '<my-screenfull style="float: right; margin: 15px;"></my-screenfull>' +
			  '</div>',
	props: ['user']
});
