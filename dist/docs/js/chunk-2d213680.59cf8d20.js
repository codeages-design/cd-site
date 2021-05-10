(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213680"],{ad18:function(s,r,e){"use strict";e.r(r);var t=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",[e("div",[e("p",[s._v("线型进度条")]),e("cds-progress",{attrs:{type:"line",status:s.status},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("p",[s._v("环型进度条")]),e("cds-progress",{attrs:{type:"circle",status:s.status},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("p",[s._v("小型进度条")]),e("cds-progress",{attrs:{size:"mini",type:"line",status:s.status},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("cds-progress",{attrs:{size:"mini",type:"circle",status:s.status},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("p",[s._v("不同状态的线型进度条")]),e("cds-progress",{attrs:{type:"line",status:""},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("cds-progress",{attrs:{type:"line",status:"error"},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("br"),e("cds-progress",{attrs:{type:"line",status:"warning"},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("cds-progress",{attrs:{type:"line",status:"success"},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("p",[s._v("不同状态的环型进度条")]),e("cds-progress",{attrs:{type:"circle",status:""},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("cds-progress",{attrs:{type:"circle",status:"error"},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("cds-progress",{attrs:{type:"circle",status:"warning"},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}}),e("cds-progress",{attrs:{type:"circle",status:"success"},model:{value:s.progress,callback:function(r){s.progress=r},expression:"progress"}})],1),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s._m(0)]),e("p",[s._v("cds-progress Attr")]),e("cds-table",{attrs:{data:s.progressData}},[e("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),e("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),e("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1)],1)},p=[function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("pre",[e("code",[s._v('\n        <template>\n          <div>\n            <p>线型进度条</p>\n            <cds-progress type="line" v-model="progress" :status="status"></cds-progress>\n\n            <p>环型进度条</p>\n            <cds-progress type="circle" v-model="progress" :status="status"></cds-progress>\n\n            <p>小型进度条</p>\n            <cds-progress size="mini" type="line" v-model="progress" :status="status"></cds-progress>\n            <cds-progress size="mini" type="circle" v-model="progress" :status="status"></cds-progress>\n\n            <p>不同状态的线型进度条</p>\n            <cds-progress type="line" v-model="progress" status=\'\'></cds-progress>\n            <cds-progress type="line" v-model="progress" status=\'error\'></cds-progress>\n            <br>\n            <cds-progress type="line" v-model="progress" status=\'warning\'></cds-progress>\n            <cds-progress type="line" v-model="progress" status=\'success\'></cds-progress>\n            \n            <p>不同状态的环型进度条</p>\n            <cds-progress type="circle" v-model="progress" status=\'\'></cds-progress>\n            <cds-progress type="circle" v-model="progress" status=\'error\'></cds-progress>\n            <cds-progress type="circle" v-model="progress" status=\'warning\'></cds-progress>\n            <cds-progress type="circle" v-model="progress" status=\'success\'></cds-progress>\n          </div>\n        </template>\n\n        <script>\n          export default {\n            data() {\n              return {\n                progress: .8\n              }\n            }\n          }\n        <\/script>\n      ')])])}],o={data:function(){return{progress:.8,progressData:[{attr:"value",attrDescription:"绑定值，表示进度条的进度，范围为0-1",attrType:"[String, Number]",attrOptions:"----",attrDefault:"0"},{attr:"size",attrDescription:"大小",attrType:"String",attrOptions:"large | mini",attrDefault:"large"},{attr:"type",attrDescription:"类型",attrType:"String",attrOptions:"line | circle",attrDefault:"line"},{attr:"status",attrDescription:"表示进度条的状态",attrType:"String",attrOptions:" | error | warning | success",attrDefault:""}]}}},a=o,n=e("2877"),c=Object(n["a"])(a,t,p,!1,null,null,null);r["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d213680.59cf8d20.js.map