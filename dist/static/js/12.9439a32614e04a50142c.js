webpackJsonp([12],{412:function(t,e,n){function i(t){n(554)}var o=n(149)(n(466),n(589),i,null,null);t.exports=o.exports},426:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(428),o=n.n(i);e.default={props:["code"],data:function(){return{isShowCode:!1}},methods:{toggleCode:function(){this.isShowCode=!this.isShowCode}},created:function(){cd.tooltip({el:'[data-toggle="code-tooltip"]'})},mounted:function(){new o.a(".js-copy-code").on("success",function(t){cd.message({type:"success",message:"复制成功"})})}}},427:function(t,e,n){var i,o,a;!function(r,s){o=[t,n(435)],i=s,void 0!==(a="function"==typeof i?i.apply(e,o):i)&&(t.exports=a)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r})},428:function(t,e,n){var i,o,a;!function(r,s){o=[t,n(427),n(436),n(434)],i=s,void 0!==(a="function"==typeof i?i.apply(e,o):i)&&(t.exports=a)}(0,function(t,e,n,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=o(e),d=o(n),u=o(i),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=function(t){function e(t,n){a(this,e);var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return s(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(d.default);t.exports=h})},429:function(t,e,n){e=t.exports=n(391)(!0),e.push([t.i,'.site-clearfix[data-v-bd097140]:after,.site-clearfix[data-v-bd097140]:before{content:" ";display:table}.site-clearfix[data-v-bd097140]:after{clear:both}.cd-panel[data-v-bd097140],.cd-panel[data-v-bd097140]:hover{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.cd-panel[data-v-bd097140]:hover{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06);-moz-box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06);box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06)}.cd-panel .cd-panel-action i.active[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140]:hover{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.cd-panel .cd-panel-action i.active[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140]:hover{cursor:pointer;opacity:.56}',"",{version:3,sources:["/Users/ketu/Sites/cd-site/src/components/Panel.vue"],names:[],mappings:"AACA,6EAEE,YAAa,AACb,aAAe,CAChB,AACD,sCACE,UAAY,CACb,AAOD,4DALE,gCAAkC,AAClC,6BAA+B,AAC/B,2BAA6B,AAC7B,uBAA0B,CAU3B,AARD,iCAKE,mGAAkH,AAClH,gGAA+G,AAC/G,0FAA0G,CAC3G,AAOD,uJALE,gCAAkC,AAClC,6BAA+B,AAC/B,2BAA6B,AAC7B,uBAA0B,CAU3B,AARD,yGAME,eAAgB,AAChB,WAAc,CACf",file:"Panel.vue",sourcesContent:['\n.site-clearfix[data-v-bd097140]:after,\n.site-clearfix[data-v-bd097140]:before {\n  content: " ";\n  display: table;\n}\n.site-clearfix[data-v-bd097140]:after {\n  clear: both;\n}\n.cd-panel[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.cd-panel[data-v-bd097140]:hover {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n  -moz-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n}\n.cd-panel .cd-panel-action i[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.cd-panel .cd-panel-action i[data-v-bd097140]:hover,\n.cd-panel .cd-panel-action i.active[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  opacity: 0.56;\n}\n'],sourceRoot:""}])},430:function(t,e){function n(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=n},431:function(t,e,n){function i(t,e,n,i,a){var r=o.apply(this,arguments);return t.addEventListener(n,r,a),{destroy:function(){t.removeEventListener(n,r,a)}}}function o(t,e,n,i){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&i.call(t,n)}}var a=n(430);t.exports=i},432:function(t,e,n){var i=n(429);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(392)("18dd775a",i,!0)},433:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},434:function(t,e,n){function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,n);if(s.nodeList(t))return a(t,e,n);if(s.string(t))return r(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function a(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function r(t,e,n){return c(document.body,t,e,n)}var s=n(433),c=n(431);t.exports=i},435:function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}t.exports=n},436:function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function i(){o.off(t,i),e.apply(n,arguments)}var o=this;return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var a=0,r=i.length;a<r;a++)i[a].fn!==e&&i[a].fn._!==e&&o.push(i[a]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},437:function(t,e,n){function i(t){n(432)}var o=n(149)(n(426),n(438),i,"data-v-bd097140",null);t.exports=o.exports},438:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cd-panel cd-panel-sm",class:{active:t.isShowCode}},[n("div",{staticClass:"cd-panel-heading"},[n("div",{staticClass:"cd-panel-title"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"cd-panel-action"},[t.isShowCode?n("i",{staticClass:"cd-icon cd-icon-copy js-copy-code",attrs:{"data-toggle":"code-tooltip","data-title":"复制代码","data-clipboard-text":t.code}}):t._e(),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.isShowCode,expression:"isShowCode"}],staticClass:"cd-icon cd-icon-close active",attrs:{"data-toggle":"code-tooltip","data-title":"隐藏代码"},on:{click:t.toggleCode}}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:!t.isShowCode,expression:"!isShowCode"}],staticClass:"cd-icon cd-icon-code",attrs:{"data-toggle":"code-tooltip","data-title":"显示代码"},on:{click:t.toggleCode}})])]),t._v(" "),n("div",{staticClass:"cd-panel-body"},[t.isShowCode?t._t("code"):t._e(),t._v(" "),t._t("style"),t._v(" "),t._t("dec")],2)])},staticRenderFns:[]}},466:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(494),o=n(437),a=n.n(o);e.default={components:{XPanel:a.a},data:function(){return{code:i}},methods:{}}},494:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"panel_base",function(){return i});var i='\n<div class="cd-panel">\n  <div class="cd-panel-heading">\n    <div class="cd-panel-title">面板标题</div>\n    <div class="cd-panel-action">\n      <a href="javascript:;" class="cd-link-gray"><i class="cd-icon cd-icon-edit"></i></a>\n    </div>\n  </div>\n  <div class="cd-panel-body">\n    面板内容\n  </div>\n</div>\n'},528:function(t,e,n){e=t.exports=n(391)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Panel.vue",sourceRoot:""}])},554:function(t,e,n){var i=n(528);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(392)("0e717fa2",i,!0)},589:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"site-content-title"},[t._v("面板")]),t._v(" "),n("div",{staticClass:"site-content-des"},[t._v("\n    面板是界面布局中常用的容器，能够帮助设计师更为合理地梳理界面信息架构。你可以根据实际情况在面板中添加图片、文字及其他相关界面元素。\n  ")]),t._v(" "),n("x-panel",{attrs:{code:t._f("trim")(t.code.panel_base)}},[n("span",{slot:"title"},[t._v("\n      常用面板\n    ")]),t._v(" "),n("div",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[t._v("\n        "+t._s(t.code.panel_base)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"cd-mb16",domProps:{innerHTML:t._s(t.code.panel_base)},slot:"style"}),t._v(" "),n("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n      面板必须涵盖头部和身体部分，头部右侧可以根据实际场景更改不同的图标，从而灵活增减交互点。  \n    ")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.9439a32614e04a50142c.js.map