webpackJsonp([24],{396:function(t,e,a){function n(t){a(534)}var i=a(149)(a(452),a(564),n,null,null);t.exports=i.exports},426:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(428),i=a.n(n);e.default={props:["code"],data:function(){return{isShowCode:!1}},methods:{toggleCode:function(){this.isShowCode=!this.isShowCode}},created:function(){cd.tooltip({el:'[data-toggle="code-tooltip"]'})},mounted:function(){new i.a(".js-copy-code").on("success",function(t){cd.message({type:"success",message:"复制成功"})})}}},427:function(t,e,a){var n,i,o;!function(r,s){i=[t,a(435)],n=s,void 0!==(o="function"==typeof n?n.apply(e,i):n)&&(t.exports=o)}(0,function(t,e){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(t){return t&&t.__esModule?t:{default:t}}(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=function(){function t(e){a(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=a+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r})},428:function(t,e,a){var n,i,o;!function(r,s){i=[t,a(427),a(436),a(434)],n=s,void 0!==(o="function"==typeof n?n.apply(e,i):n)&&(t.exports=o)}(0,function(t,e,a,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var a="data-clipboard-"+t;if(e.hasAttribute(a))return e.getAttribute(a)}var l=i(e),d=i(a),u=i(n),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),v=function(t){function e(t,a){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(a),n.listenClick(t),n}return s(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,a=!!document.queryCommandSupported;return e.forEach(function(t){a=a&&!!document.queryCommandSupported(t)}),a}}]),e}(d.default);t.exports=v})},429:function(t,e,a){e=t.exports=a(391)(!0),e.push([t.i,'.site-clearfix[data-v-bd097140]:after,.site-clearfix[data-v-bd097140]:before{content:" ";display:table}.site-clearfix[data-v-bd097140]:after{clear:both}.cd-panel[data-v-bd097140],.cd-panel[data-v-bd097140]:hover{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.cd-panel[data-v-bd097140]:hover{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06);-moz-box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06);box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06)}.cd-panel .cd-panel-action i.active[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140]:hover{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.cd-panel .cd-panel-action i.active[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140]:hover{cursor:pointer;opacity:.56}',"",{version:3,sources:["/Users/ketu/Sites/cd-site/src/components/Panel.vue"],names:[],mappings:"AACA,6EAEE,YAAa,AACb,aAAe,CAChB,AACD,sCACE,UAAY,CACb,AAOD,4DALE,gCAAkC,AAClC,6BAA+B,AAC/B,2BAA6B,AAC7B,uBAA0B,CAU3B,AARD,iCAKE,mGAAkH,AAClH,gGAA+G,AAC/G,0FAA0G,CAC3G,AAOD,uJALE,gCAAkC,AAClC,6BAA+B,AAC/B,2BAA6B,AAC7B,uBAA0B,CAU3B,AARD,yGAME,eAAgB,AAChB,WAAc,CACf",file:"Panel.vue",sourcesContent:['\n.site-clearfix[data-v-bd097140]:after,\n.site-clearfix[data-v-bd097140]:before {\n  content: " ";\n  display: table;\n}\n.site-clearfix[data-v-bd097140]:after {\n  clear: both;\n}\n.cd-panel[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.cd-panel[data-v-bd097140]:hover {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n  -moz-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n}\n.cd-panel .cd-panel-action i[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.cd-panel .cd-panel-action i[data-v-bd097140]:hover,\n.cd-panel .cd-panel-action i.active[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  opacity: 0.56;\n}\n'],sourceRoot:""}])},430:function(t,e){function a(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=a},431:function(t,e,a){function n(t,e,a,n,o){var r=i.apply(this,arguments);return t.addEventListener(a,r,o),{destroy:function(){t.removeEventListener(a,r,o)}}}function i(t,e,a,n){return function(a){a.delegateTarget=o(a.target,e),a.delegateTarget&&n.call(t,a)}}var o=a(430);t.exports=n},432:function(t,e,a){var n=a(429);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(392)("18dd775a",n,!0)},433:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var a=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===a||"[object HTMLCollection]"===a)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},434:function(t,e,a){function n(t,e,a){if(!t&&!e&&!a)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(a))throw new TypeError("Third argument must be a Function");if(s.node(t))return i(t,e,a);if(s.nodeList(t))return o(t,e,a);if(s.string(t))return r(t,e,a);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,a){return t.addEventListener(e,a),{destroy:function(){t.removeEventListener(e,a)}}}function o(t,e,a){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,a)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,a)})}}}function r(t,e,a){return c(document.body,t,e,a)}var s=a(433),c=a(431);t.exports=n},435:function(t,e){function a(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(t),n.removeAllRanges(),n.addRange(i),e=n.toString()}return e}t.exports=a},436:function(t,e){function a(){}a.prototype={on:function(t,e,a){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:a}),this},once:function(t,e,a){function n(){i.off(t,n),e.apply(a,arguments)}var i=this;return n._=e,this.on(t,n,a)},emit:function(t){var e=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),n=0,i=a.length;for(n;n<i;n++)a[n].fn.apply(a[n].ctx,e);return this},off:function(t,e){var a=this.e||(this.e={}),n=a[t],i=[];if(n&&e)for(var o=0,r=n.length;o<r;o++)n[o].fn!==e&&n[o].fn._!==e&&i.push(n[o]);return i.length?a[t]=i:delete a[t],this}},t.exports=a},437:function(t,e,a){function n(t){a(432)}var i=a(149)(a(426),a(438),n,"data-v-bd097140",null);t.exports=i.exports},438:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cd-panel cd-panel-sm",class:{active:t.isShowCode}},[a("div",{staticClass:"cd-panel-heading"},[a("div",{staticClass:"cd-panel-title"},[t._t("title")],2),t._v(" "),a("div",{staticClass:"cd-panel-action"},[t.isShowCode?a("i",{staticClass:"cd-icon cd-icon-copy js-copy-code",attrs:{"data-toggle":"code-tooltip","data-title":"复制代码","data-clipboard-text":t.code}}):t._e(),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.isShowCode,expression:"isShowCode"}],staticClass:"cd-icon cd-icon-close active",attrs:{"data-toggle":"code-tooltip","data-title":"隐藏代码"},on:{click:t.toggleCode}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isShowCode,expression:"!isShowCode"}],staticClass:"cd-icon cd-icon-code",attrs:{"data-toggle":"code-tooltip","data-title":"显示代码"},on:{click:t.toggleCode}})])]),t._v(" "),a("div",{staticClass:"cd-panel-body"},[t.isShowCode?t._t("code"):t._e(),t._v(" "),t._t("style"),t._v(" "),t._t("dec")],2)])},staticRenderFns:[]}},452:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(480),i=a(437),o=a.n(i);e.default={components:{XPanel:o.a},data:function(){return{code:n}},methods:{}}},480:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"avatar_circle",function(){return n}),a.d(e,"avatar_square",function(){return i});var n='\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-lg"/>\n<img src="/static/img/avatar.png" alt="" class="cd-avatar"/>\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-sm"/>\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-xs"/>\n',i='\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-square cd-avatar-lg"/>\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-square"/>\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-square cd-avatar-sm"/>\n<img src="/static/img/avatar.png" alt="" class="cd-avatar cd-avatar-square cd-avatar-xs"/>\n'},508:function(t,e,a){e=t.exports=a(391)(!0),e.push([t.i,".avatar-page .cd-avatar{margin-right:16px}","",{version:3,sources:["/Users/ketu/Sites/cd-site/src/views/component/Avatar.vue"],names:[],mappings:"AACA,wBACE,iBAAmB,CACpB",file:"Avatar.vue",sourcesContent:["\n.avatar-page .cd-avatar {\n  margin-right: 16px;\n}\n"],sourceRoot:""}])},534:function(t,e,a){var n=a(508);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(392)("5f2b0ec6",n,!0)},564:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"avatar-page"},[a("div",{staticClass:"site-content-title"},[t._v("头像")]),t._v(" "),a("div",{staticClass:"site-content-des"},[t._v("\n    通过头像能够快速识别用户，并且给某些特定场景提供足够的丰富度。\n  ")]),t._v(" "),a("div",{staticClass:"cd-row"},[a("div",{staticClass:"col-xs-6"},[a("x-panel",{attrs:{code:t._f("trim")(t.code.avatar_circle)}},[a("span",{slot:"title"},[t._v("\n          圆形头像\n        ")]),t._v(" "),a("div",{slot:"code"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.avatar_circle)+"\n          ")])])]),t._v(" "),a("div",{staticClass:"cd-mb16",domProps:{innerHTML:t._s(t.code.avatar_circle)},slot:"style"}),t._v(" "),a("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          在列表等场景中，默认采用圆形头像，更为灵活轻便。\n        ")])])],1),t._v(" "),a("div",{staticClass:"col-xs-6"},[a("x-panel",{attrs:{code:t._f("trim")(t.code.avatar_square)}},[a("span",{slot:"title"},[t._v("\n          矩形头像\n        ")]),t._v(" "),a("div",{slot:"code"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.avatar_square)+"\n          ")])])]),t._v(" "),a("div",{staticClass:"cd-mb16",domProps:{innerHTML:t._s(t.code.avatar_square)},slot:"style"}),t._v(" "),a("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          矩形头像一般在对排版有特殊要求的情况下才会使用，相对而言更为规整。\n        ")])])],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=24.45959982e000a2911c2a.js.map