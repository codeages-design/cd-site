import Vue from 'vue';
import MetaInfo from 'vue-meta-info';
import CKEditor from 'ckeditor4-vue';
import router from '@/router';
import filters from '@/filters';
import plugins from '@/plugins';

import 'babel-polyfill';
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import 'jquery';
import * as cd from 'codeages-design';
import 'codeages-design/src/less/codeages-design.less';
import '@/assets/styles/main.less';

Vue.use( CKEditor );
Vue.use(MetaInfo);
Vue.use(filters);
Vue.use(plugins);

Vue.config.productionTip = false;

Vue.directive('highlightjs', (e) => {
  hljs.highlightBlock(e);
});

(<any>window).cd = cd;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>',
});
