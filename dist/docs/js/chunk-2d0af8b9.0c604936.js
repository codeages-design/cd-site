(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af8b9"],{"0f7d":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticStyle:{"margin-bottom":"20px"}},[e("cds-button",{on:{click:t.handleSuccessClick}},[t._v("success")]),e("cds-button",{on:{click:t.handleInfoClick}},[t._v("info")]),e("cds-button",{on:{click:t.handleWarningClick}},[t._v("warning")]),e("cds-button",{on:{click:t.handleErrorClick}},[t._v("error")])],1),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(0)]),e("p",[t._v("Message Attr")]),e("cds-table",{attrs:{data:t.messageData}},[e("cds-table-column",{attrs:{prop:"attr",label:"属性"}}),e("cds-table-column",{attrs:{prop:"attrDescription",label:"属性描述",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrType",label:"类型"}}),e("cds-table-column",{attrs:{prop:"attrOptions",label:"可选值",width:"300"}}),e("cds-table-column",{attrs:{prop:"attrDefault",label:"默认值"}})],1)],1)},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[e("code",[t._v("\n        <template>\n          <div>\n            <cds-button @click=\"handleSuccessClick\">success</cds-button>\n            <cds-button @click=\"handleInfoClick\">info</cds-button> \n            <cds-button @click=\"handleWarningClick\">warning</cds-button>\n            <cds-button @click=\"handleErrorClick\">error</cds-button>  \n          </div>\n        </template>\n\n        <script>\n          export default {\n            data() {\n              return {\n              }\n            },\n            methods: {\n              handleSuccessClick () {\n                this.$message.success('这是一条成功消息，会主动消失。')\n              },\n              handleInfoClick () {\n                this.$message('这是一条询问消息，会主动消失。')\n              },\n              handleWarningClick () {\n                this.$message({content:'这是一条警告消息，会主动消失。', type: 'warning', duration: 1000,closable: true})\n              },\n              handleErrorClick () {\n                this.$message.error({content: '这是一条错误消息，会主动消失。', duration: 2000})\n              },\n            }\n          }\n        <\/script>\n      ")])])}],r={data:function(){return{messageData:[{attr:"type",attrDescription:"类型",attrType:"String",attrOptions:"info | success | warning | error",attrDefault:"info"},{attr:"content",attrDescription:"message消息内容",attrType:"String",attrOptions:"----",attrDefault:""},{attr:"closed",attrDescription:"是否为可关闭message消息",attrType:"Boolean",attrOptions:"",attrDefault:"false"},{attr:"offset",attrDescription:"每两个message消息间的间隔",attrType:"Number",attrOptions:"",attrDefault:"16"},{attr:"duration",attrDescription:"message消息自动消失的时间",attrType:"Number",attrOptions:"",attrDefault:"3000"}]}},methods:{handleSuccessClick:function(){this.$message.success("这是一条成功消息，会主动消失。")},handleInfoClick:function(){this.$message("这是一条询问消息，会主动消失。")},handleWarningClick:function(){this.$message({content:"这是一条警告消息，会主动消失。",type:"warning",duration:1e3,closable:!0})},handleErrorClick:function(){this.$message.error({content:"这是一条错误消息，会主动消失。",duration:2e3})}}},c=r,i=e("2877"),l=Object(i["a"])(c,a,s,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0af8b9.0c604936.js.map