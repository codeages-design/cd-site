import Vue from 'vue';
import MetaInfo from 'vue-meta-info';
import router from '@/router';
import filters from '@/filters';
import plugins from '@/plugins';

import 'babel-polyfill';
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import 'jquery';
import * as cd from 'codeages-design';
import '@/assets/styles/main.less';

import {
  Alert,
  Panel,
  Row,
  Col,
  message
} from 'cd-vue';

Vue.use(MetaInfo);
Vue.use(filters);
Vue.use(plugins);

Vue.component('cd-alert', Alert);
Vue.component('cd-panel', Panel);
Vue.component('cd-row', Row);
Vue.component('cd-col', Col);

Vue.prototype.$message = message;

Vue.config.productionTip = false;

Vue.directive('highlightjs', (e) => {
  hljs.highlightBlock(e);
});

window.cd = cd;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>',
});
