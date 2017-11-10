import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '@/App';
import router from '@/router';
import filters from '@/filters';
import utils from '@/utils';

Vue.use(filters);
Vue.use(utils);
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
