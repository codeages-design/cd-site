(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ceb92"],{6156:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("cds-date-picker-range",{attrs:{maxDate:t.maxDate,minDate:t.startDate,size:"large"},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}}),e("cds-date-picker-range",{attrs:{maxDate:t.maxDate,minDate:t.startDate,disabled:!0},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}}),e("cds-date-picker-range",{attrs:{maxDate:t.maxDate,minDate:t.startDate,size:"mini"},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}})],1),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(0)]),e("p",[t._v("cds-date-picker-range Attr")]),e("cds-table",{attrs:{data:t.datePickerRangeData}},[e("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),e("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),e("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",[e("code",[t._v('\n      <template>\n        <div>\n          <div>\n            <cds-date-picker-range \n              v-model="date2" \n              :maxDate="maxDate" \n              :minDate="startDate" \n              size="large"\n            />\n            <cds-date-picker-range \n              v-model="date2" \n              :maxDate="maxDate" \n              :minDate="startDate" \n              :disabled="true" \n            />\n            <cds-date-picker-range \n              v-model="date2"\n              :maxDate="maxDate" \n              :minDate="startDate" \n              size="mini"\n            />\n          </div>\n          \n        </div>\n      </template>\n\n      <script>>\n\n        export default {\n          name: \'Form\',\n          data() {\n            return {\n              date2: [\'2020-12-1\', \'2020-12-20\'],\n              startDate: \'2020-10-03\',\n              maxDate: \'2021-04-10\',\n            }\n          }\n        }\n      <\/script>\n    ')])])}],i={name:"Form",data:function(){return{date2:["2020-12-1","2020-12-20"],startDate:"2020-10-03",maxDate:"2021-01-03",datePickerRangeData:[{attr:"v-model",attrDescription:"绑定值",attrType:"String",attrOptions:"----",attrDefault:""},{attr:"size",attrDescription:"大小",attrType:"String",attrOptions:"large | medium | mini",attrDefault:"medium"},{attr:"disabled",attrDescription:"是否为禁用时间选择器",attrType:"Boolean",attrOptions:"----",attrDefault:"false"},{attr:"minDate",attrDescription:"可以选择的最小日期，格式为YYYY-MM-DD",attrType:"[String, Object]",attrOptions:"",attrDefault:""},{attr:"maxDate",attrDescription:"可以选择的最大日期，格式为YYYY-MM-DD",attrType:"[String, Object]",attrOptions:"",attrDefault:""}]}}},d=i,s=e("2877"),l=Object(s["a"])(d,n,r,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0ceb92.91b83512.js.map