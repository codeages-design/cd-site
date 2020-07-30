import Vue from 'vue';
import Router from 'vue-router';
import config from '../../config';

import component from './component';

Vue.use(Router);

// route分模块
const routes = [
  {
    path: '/component',
    name: 'component',
    redirect: {
      name: 'component_color'
    },
    component: (resolve) => require(['@/views/component.vue'], resolve),
    children: [
      ...component,
    ],
  },
  {
    path: '/principle',
    name: 'principle',
    component: (resolve) => require(['@/views/principle.vue'], resolve),
  },
  {
    path: '/element-layout',
    name: 'element-layout',
    component: (resolve) => require(['@/views/element-layout.vue'], resolve),
  },
  {
    path: '/',
    name: 'homepage',
    component: (resolve) => require(['@/views/homepage.vue'], resolve),
  }
];

const router = new Router({
  routes,
  mode: config.build.isPrerenderSpa ? 'history' : 'hash'
});

router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title + ' - Codeages Design';
  }

  next();
});

export default router;
