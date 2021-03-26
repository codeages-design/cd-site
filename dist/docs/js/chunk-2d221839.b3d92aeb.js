(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221839"],{cb59:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticStyle:{"margin-bottom":"20px"}},[e("cds-button",{on:{click:function(r){t.rtl=!t.rtl}}},[t._v("从右向左打开")]),e("cds-button",{on:{click:function(r){t.ltr=!t.ltr}}},[t._v("从左向右打开 50%")]),e("cds-button",{on:{click:function(r){t.ttb=!t.ttb}}},[t._v("从上向下打开 10%")]),e("cds-button",{on:{click:function(r){t.btt=!t.btt}}},[t._v("从下向上打开")]),e("cds-drawer",{attrs:{visible:t.rtl,direction:"rtl"},on:{"update:visible":function(r){t.rtl=r}}}),e("cds-drawer",{attrs:{visible:t.ltr,direction:"ltr",percent:"50%"},on:{"update:visible":function(r){t.ltr=r}}}),e("cds-drawer",{attrs:{visible:t.ttb,direction:"ttb",percent:"10%"},on:{"update:visible":function(r){t.ttb=r}}}),e("cds-drawer",{attrs:{visible:t.btt,direction:"btt"},on:{"update:visible":function(r){t.btt=r}}})],1),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(0)]),e("p",[t._v("cds-drawer Attr")]),e("cds-table",{attrs:{data:t.drawerData}},[e("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),e("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),e("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1),e("p",[t._v("cds-drawer Slots")]),e("cds-table",{attrs:{data:t.drawerSlots}},[e("cds-table-column",{attrs:{prop:"name",label:"name"}}),e("cds-table-column",{attrs:{prop:"description",label:"说明",width:"600"}})],1),e("p",[t._v("cds-drawer Event")]),e("cds-table",{attrs:{data:t.drawerEvent}},[e("cds-table-column",{attrs:{prop:"name",label:"事件名称"}}),e("cds-table-column",{attrs:{prop:"description",label:"事件说明",width:"600"}}),e("cds-table-column",{attrs:{prop:"parameter",label:"回调参数"}})],1)],1)},n=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("pre",[e("code",[t._v('\n        <template>\n          <div>\n            <cds-button @click="rtl = !rtl">从右向左打开</cds-button>\n            <cds-button @click="ltr = !ltr">从左向右打开 50%</cds-button>\n            <cds-button @click="ttb = !ttb">从上向下打开 10%</cds-button>\n            <cds-button @click="btt = !btt">从下向上打开</cds-button>\n\n            <cds-drawer :visible.sync="rtl" direction="rtl"></cds-drawer>\n            <cds-drawer :visible.sync="ltr" direction="ltr" percent="50%"></cds-drawer>\n            <cds-drawer :visible.sync="ttb" direction="ttb" percent="10%"></cds-drawer>\n            <cds-drawer :visible.sync="btt" direction="btt"></cds-drawer>\n          </div>\n        </template>\n\n        <script>\n          export default {\n            data() {\n              return {\n                rtl: false,\n                ltr: false,\n                ttb: false,\n                btt: false\n              }\n            }\n          }\n        <\/script>\n      ')])])}],c={data:function(){return{rtl:!1,ltr:!1,ttb:!1,btt:!1,drawerData:[{attr:"direction",attrDescription:"打开drawer的位置",attrType:"String",attrOptions:"ltr | rtl | ttb | btt",attrDefault:""},{attr:"percent",attrDescription:"drawer占父组件的(宽度/高度)百分比",attrType:"String",attrOptions:"----",attrDefault:"30%"},{attr:"visible",attrDescription:"表示drawer的显示或隐藏",attrType:"Boolean",attrOptions:"----",attrDefault:"false"}],drawerSlots:[{name:"header",description:"表示drawer的标题内容"},{name:"content",description:"表示drawer的主体内容"}],drawerEvent:[{name:"opened",description:"在打开drawer后触发",parameter:""},{name:"closed",description:"在关闭drawer后触发",parameter:""},{name:"update:visible",description:"在drawer的visible值变化时触发",parameter:"false"}]}}},l=c,i=e("2877"),s=Object(i["a"])(l,a,n,!1,null,null,null);r["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d221839.b3d92aeb.js.map