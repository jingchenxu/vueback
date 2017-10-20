/**
 * Created by ronaldo on 2017/10/19.
 */
var template = '<el-breadcrumb separator="/" style="line-height: 50px;float: left;"> ' +
                '<el-breadcrumb-item v-bind:to="path" style="font-weight: 700;">{{path}}</el-breadcrumb-item> ' +
                '</el-breadcrumb>';

var PageName = Vue.extend({
    template: template,
    name: 'PageName',
    computed: {
        path: function () {
            console.log(this.$route.name);
            return this.$route.name === '首页' ? this.$route.name : '首页/' + this.$route.name
        }
    }
})