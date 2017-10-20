/**
 * Created by ronaldo on 2017/10/17.
 */
/*
 @author zzli
 @description 该页面主要用于测试绘制Tag的功能
 */
var template = '<div style="float: left;">' +
                '<router-link v-bind:to="tag.path" v-for="(tag,index) in tags" v-bind:key="tag.path">' +
                '<el-tag v-bind:closable="closable" ' +
                'v-bind:hit="hit" color="color" v-bind:type="isActive(tag.path)" style="margin-left: 10px;" ' +
                'v-on:close="handleClose(tag, $event)">' +
                '{{tag.name}}</el-tag></router-link></div>';
var Tag = Vue.extend({
    template: template,
    name: 'Tag',
    data: function () {
        return {
            type: '',
            closable: true,
            hit: false,
            color: '',
            tags: [
                {name: '首页', path: '/'}
            ]
        }
    },
    created: function () {
        console.log(this.tags);
    },
    methods: {
        handleClose: function (tag, $event) {
            //console.log(tag);
            var index = this.tags.indexOf(tag); // 当前被点击的tag标签位于标签数组的下标
            this.tags.splice(index,1);
            if (tag.path == this.$route.path && this.tags.length > 0) {
                //console.log(this.$route.path); // this.$route.path 可以得到当前地址
                if (index == 0) {
                    //location.href = "index.html#" + this.tags[0].path;
                    this.$router.push({name: this.tags[0].name, path: this.tags[0].path}) // https://router.vuejs.org/zh-cn/essentials/named-routes.html
                } else {
                    //location.href = "index.html#" + this.tags[index - 1].path;
                    this.$router.push({name: this.tags[index - 1].name, path: this.tags[index - 1].path})
                }
            }
            if (tag.path == this.$route.path && this.tags.length == 0) {
                //location.href = 'index.html#/';
                this.$router.push({name: '首页', path: '/'})
            }
            $event.preventDefault(); // 这是因为 tag 标签被放在 router-link 里面，当点击（哪怕是关闭该 tag）的时候会跳转，所以这里起到禁止跳转的功能
        },
        isActive: function (path) { // 这边是用来判断当前哪个 tag 被激活
            var pathArr = []; // 用于保存目前已存在的 tag 标签对应的地址
            for (var i = 0; i < this.tags.length; i++) { // 这里循环是为了把当前所有 tag 对应的地址放到一个数组里，如果有新增的地址可以和它比较
                pathArr.push(this.tags[i].path);
            }
            console.log(pathArr);
            console.log(this.tags);
            //console.log(this.$route);
            //console.log(this.$route.path);
            if (path === this.$route.path) {
                return 'primary';
            } else {
                if (pathArr.indexOf(this.$route.path) == -1) {
                    this.tags.push({name: this.$route.name, path: this.$route.path});
                }
                return '';
            }
        }
    }
});