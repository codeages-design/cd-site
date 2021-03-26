(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a47c1"],{"0748":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticStyle:{"margin-bottom":"20px"}},[e("cds-table",{staticStyle:{"margin-top":"20px"},attrs:{data:t.tableList},on:{checked:t.checkedRows,sort:t.tableSort}},[e("cds-table-column",{attrs:{prop:"date",label:"日期",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("cds-button",[t._v(t._s(a.row.date))])]}}])}),e("cds-table-column",{attrs:{prop:"name",label:"姓名",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.name+"吴博"))])]}}])}),e("cds-table-column",{attrs:{prop:"address",label:"地址"}}),e("cds-table-column",{attrs:{label:"操作"}},[[e("cds-button",{attrs:{type:"danger"}},[t._v("删除")])]],2)],1)],1),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("pre",[e("code",[t._v('\n        <template>\n          <div>\n            <cds-table :data="tableList" \n              @checked="checkedRows"\n              @sort="tableSort" \n              style="margin-top: 20px;">\n              <cds-table-column prop="date" label="日期" sortable>\n                <template v-slot:default="slotProps">\n                  <cds-button>'+t._s("slotProps.row.date")+'</cds-button>\n                </template>\n              </cds-table-column>\n              <cds-table-column prop="name" label="姓名" sortable>\n                <template v-slot:default="slotProps">\n                  <div>'+t._s("slotProps.row.name + 吴博")+"</div>\n                </template>\n              </cds-table-column>\n              <cds-table-column prop=\"address\" label=\"地址\"></cds-table-column>\n              <cds-table-column label=\"操作\">\n                <template>\n                  <cds-button type=\"danger\">删除</cds-button>\n                </template>\n              </cds-table-column>\n            </cds-table>\n          </div>\n        </template>\n\n        <script>\n          export default {\n            data() {\n              return {\n                tableList: [{\n                  isChecked: false,\n                  date: '2016-05-02',\n                  name: '王小虎',\n                  address: '上海市普陀区金沙江路 1518 弄',\n                  children: [\n                    { date: '2020-1-1', name: 'xxxx', address: 'yyyy' },\n                    { date: '2020-1-2', name: 'xxxx', address: 'yyyy' }\n                  ]\n                }, {\n                  isChecked: false,\n                  date: '2016-05-04',\n                  name: '王小虎',\n                  address: '上海市普陀区金沙江路 1517 弄'\n                }, {\n                  isChecked: false,\n                  date: '2016-05-01',\n                  name: '王小虎',\n                  address: '上海市普陀区金沙江路 1519 弄'\n                }, {\n                  isChecked: false,\n                  date: '2016-05-03',\n                  name: '王小虎',\n                  address: '上海市普陀区金沙江路 1516 弄'\n                }]\n              }\n            },\n            methods: {\n              tableSort(value) {\n                console.log('tableSort: ', value)\n              },\n              checkedRows (value) {\n                console.log(value)\n              }\n            }\n          }\n        <\/script>\n      ")])])]),e("p",[t._v("cds-table Attr")]),e("cds-table",{attrs:{data:t.tableData}},[e("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),e("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),e("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1),e("p",[t._v("cds-table-column Attr")]),e("cds-table",{attrs:{data:t.tableColumnData}},[e("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),e("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),e("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1),e("p",[t._v("cds-dialog Event")]),e("cds-table",{attrs:{data:t.tableEvent}},[e("cds-table-column",{attrs:{prop:"name",label:"事件名称"}}),e("cds-table-column",{attrs:{prop:"description",label:"事件说明",width:"600"}}),e("cds-table-column",{attrs:{prop:"parameter",label:"回调参数"}})],1)],1)},l=[],r={data:function(){return{tableList:[{isChecked:!1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",children:[{date:"2020-1-1",name:"xxxx",address:"yyyy"},{date:"2020-1-2",name:"xxxx",address:"yyyy"}]},{isChecked:!1,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{isChecked:!1,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{isChecked:!1,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],tableData:[{attr:"data",attrDescription:"表格项的内容列表",attrType:"Array",attrOptions:"----",attrDefault:"[]"},{attr:"calcSpan",attrDescription:"",attrType:"Function",attrOptions:"----",attrDefault:"function () {\n          return [1, 1]\n        }"}],tableColumnData:[{attr:"prop",attrDescription:"该行对应data的属性名",attrType:"String",attrOptions:"----",attrDefault:""},{attr:"label",attrDescription:"表示该行的标题",attrType:"String",attrOptions:"----",attrDefault:""},{attr:"width",attrDescription:"表示该表格行的宽度",attrType:"[String, Number]",attrOptions:"----",attrDefault:""},{attr:"sortable",attrDescription:"",attrType:"Boolean",attrOptions:"----",attrDefault:"是否可排序"},{attr:"type",attrDescription:"是否为可多选框表格行",attrType:"String",attrOptions:" | checkbox",attrDefault:"function () {\n          return [1, 1]\n        }"}],tableEvent:[{name:"sort",description:"在点击排序时触发",parameter:"(value: {prop, type})"},{name:"checked",description:"在选中表格行时触发",parameter:"(value: checkedRows)"}]}},methods:{tableSort:function(t){console.log("tableSort: ",t)},checkedRows:function(t){console.log(t)}}},s=r,o=e("2877"),d=Object(o["a"])(s,n,l,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0a47c1.f88998a2.js.map