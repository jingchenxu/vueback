/**
 * Created by ronaldo on 2017/10/18.
 */

var template = '<div><el-table v-bind:data="tableDataZzli" border >' +
                '<el-table-column type="selection" width="55"></el-table-column>' +
                '<el-table-column ' +
                'v-for="(item,index) in tableData3Label" ' +
                'v-bind:prop="tableData3Arr[index]" ' +
                'v-bind:key="index" ' +
                'v-bind:label="item"'+
                'sortable align="center" width="300">' +
                '</el-table-column></el-table></div>';

var TestTableZzli = Vue.extend({
    template: template,
    name: 'TestTableZzli',
    data: function () {
        console.log(110);
        return {
            tableDataZzli: [
                {
                    "date": "2017-10-19",
                    "name": "吴彦祖",
                    "address": "上海市普陀区金沙江路 1518 弄"
                },
                {
                    "date": "2017-10-20",
                    "name": "周杰伦",
                    "address": "上海市普陀区金沙江路 1518 弄"
                },
                {
                    "date": "2017-10-21",
                    "name": "周星驰",
                    "address": "上海市普陀区金沙江路 1518 弄"
                }
            ],
            multipleSelection: [],
            tableData3Label: ['日期', '姓名', '地址'],
            tableData3Arr: [],
            saveData: []
        }
    },
    created: function () {
        for (var key in this.tableDataZzli[0]) {
            this.tableData3Arr.push(key);
        }
        //var me = this;
        //var url = '/vueback/zzliTest/tableDataZzli.json';
        //$.get(url, function (data) {
        //    console.dir(data);
        //    me.tableDataZzli = data;
        //});
        //var tableDataZzli = this.$axios_get('/vueback/zzliTest/tableDataZzli.json');
        //tableDataZzli
        //    .then(function (data) {
        //        me.$log(data)
        //    })
        //    .catch(function (error) {
        //        me.$log(error)
        //    })
    }
});