import Vue from 'vue';
import Router from 'vue-router';

import component from './component';

Vue.use(Router);

// route分模块
const routes = [{
  path: '/component',
  name: 'component',
  component: (resolve) => require(['@/views/Component.vue'], resolve),
  children: [
    ...component,
  ],
}];

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

export default router;
