(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d763a"],{7737:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("cds-checkbox-group",{model:{value:t.checkboxs,callback:function(e){t.checkboxs=e},expression:"checkboxs"}},[a("cds-checkbox",{attrs:{label:"未选中项"}}),a("cds-checkbox",{attrs:{label:"已选中项",checked:""}}),a("cds-checkbox",{attrs:{label:"部分选中",indeterminate:""}}),a("cds-checkbox",{attrs:{label:"失效未选中项",disabled:""}}),a("cds-checkbox",{attrs:{label:"失效已选中项",checked:"",disabled:""}})],1)],1),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(0)]),a("p",[t._v("cds-checkbox-group Attr")]),a("cds-table",{attrs:{data:t.checkboxGroupData}},[a("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),a("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),a("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),a("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1),a("p",[t._v("cds-checkbox Attr")]),a("cds-table",{attrs:{data:t.checkboxData}},[a("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),a("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),a("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),a("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1),a("p",[t._v("cds-checkbox Event")]),a("cds-table",{attrs:{data:t.checkboxEvent}},[a("cds-table-column",{attrs:{prop:"name",label:"事件名称"}}),a("cds-table-column",{attrs:{prop:"description",label:"事件说明",width:"600"}}),a("cds-table-column",{attrs:{prop:"parameter",label:"回调参数"}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v('\n      <template>\n        <div>\n            <cds-checkbox-group v-model="checkboxs">\n              <cds-checkbox label="未选中项"></cds-checkbox>\n              <cds-checkbox label="已选中项" checked></cds-checkbox>\n              <cds-checkbox label="部分选中" indeterminate></cds-checkbox>\n              <cds-checkbox label="失效未选中项" disabled></cds-checkbox>\n              <cds-checkbox label="失效已选中项" checked disabled></cds-checkbox>\n            </cds-checkbox-group>\n        </div>\n      </template>\n\n      <script>\n\n        export default {\n          name: \'Form\',\n          data() {\n            return {\n              checkboxs: []\n            }\n          }\n        }\n      <\/script>\n    ')])])}],l={name:"Form",data:function(){return{current:3,current2:1,checkboxData:[{attr:"v-model",attrDescription:"绑定值",attrType:"[String, Number, Boolean]",attrOptions:"----",attrDefault:""},{attr:"label",attrDescription:"当没有设置checkbox描述时，label中的值则显示为checkbox的描述",attrType:"[String, Number]",attrOptions:"----",attrDefault:""},{attr:"disabled",attrDescription:"是否为禁用多选框",attrType:"Boolean",attrOptions:"----",attrDefault:"false"},{attr:"checked",attrDescription:"是否为已选中项",attrType:"Boolean",attrOptions:"----",attrDefault:"false"},{attr:"indeterminate",attrDescription:"是否为部分选中项",attrType:"Boolean",attrOptions:"----",attrDefault:"false"}],checkboxEvent:[{name:"input",description:"当绑定值变化时触发的事件",parameter:"(value: string | number | Boolean)"},{name:"change",description:"当绑定值变化时触发的事件",parameter:"(active: Boolean)"}],checkboxGroupData:[{attr:"v-model",attrDescription:"绑定值",attrType:"[String, Number, Boolean]",attrOptions:"----",attrDefault:""},{attr:"disabled",attrDescription:"是否为禁用多选框",attrType:"Boolean",attrOptions:"----",attrDefault:"false"}]}}},o=l,n=a("2877"),s=Object(n["a"])(o,c,r,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0d763a.6037685c.js.map