import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '@/App';
import router from '@/router';
import filters from '@/filters';
import utils from '@/utils';
import hljs from 'highlight.js';

Vue.use(filters);
Vue.use(utils);
Vue.use(ElementUI);

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
