(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0baaca"],{"37e5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"margin-bottom":"20px"}},[n("cds-transfer",{model:{value:t.transfer,callback:function(e){t.transfer=e},expression:"transfer"}})],1),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(0)]),n("p",[t._v("cds-transfer Attr")]),n("cds-table",{attrs:{data:t.transferData}},[n("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),n("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),n("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),n("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),n("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1),n("p",[t._v("cds-transfer Event")]),n("cds-table",{attrs:{data:t.transferEvent}},[n("cds-table-column",{attrs:{prop:"name",label:"事件名称"}}),n("cds-table-column",{attrs:{prop:"description",label:"事件说明",width:"600"}}),n("cds-table-column",{attrs:{prop:"parameter",label:"回调参数"}})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("\n        <template>\n          <div>\n            <cds-transfer v-model=\"transfer\"></cds-transfer>\n          </div>\n        </template>\n\n        <script>\n          export default {\n            data() {\n              return {\n                transfer: [\n                  { title: '源列表', list: [{id: 1, content: '111'}, {id: 2, content: '222'}, {id: 3, content: '333'}] },\n                  { title: '目标列表', list: [{id: 4, content: '444'}, {id: 5, content: '555'}, {id: 6, content: '666'} ] }\n                ]\n              }\n            }\n          }\n        <\/script>\n      ")])])}],l={data:function(){return{transfer:[{title:"源列表",list:[{id:1,content:"111"},{id:2,content:"222"},{id:3,content:"333"}]},{title:"目标列表",list:[{id:4,content:"444"},{id:5,content:"555"},{id:6,content:"666"}]}],transferData:[{attr:"v-model",attrDescription:"绑定值，绑定值需要有两个对象，其中title为列表的标题，list为列表内容",attrType:"Array",attrOptions:"----",attrDefault:"[]"}],transferEvent:[{name:"input",description:"在transfer穿梭框中数据发生改变时触发",parameter:"(value: Array)"}]}}},s=l,i=n("2877"),c=Object(i["a"])(s,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0baaca.412e4287.js.map