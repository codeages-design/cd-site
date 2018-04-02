import Vue from 'vue';
import MetaInfo from 'vue-meta-info';
import App from '@/App';
import router from '@/router';
import filters from '@/filters';
import utils from '@/utils';

import 'babel-polyfill';
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import 'jquery';
import 'codeages-design/dist/codeages-design';
import 'codeages-design/src/less/codeages-design.less';

Vue.use(MetaInfo);
Vue.use(filters);
Vue.use(utils);

Vue.config.productionTip = false;

Vue.directive('highlightjs', function(el) {
  hljs.highlightBlock(el);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
