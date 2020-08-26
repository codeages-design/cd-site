import Vue from 'vue';
import Router from 'vue-router';
import config from '../../config';

import component from './component';
import principle from './principle';

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
    children: [
      ...principle,
    ],
  },
  {
    path: '/pc-element-layout',
    name: 'pc-element-layout',
    component: (resolve) => require(['@/views/element-layout.vue'], resolve),
  },
	{
		path: '/mobile-element-layout',
		name: 'mobile-element-layout',
		component: (resolve) => require(['@/views/element-layout.vue'], resolve),
	},
  {
    path: '/resources',
    name: 'resources',
    component: (resolve) => require(['@/views/resources.vue'], resolve),
  },
  {
    path: '/',
    name: 'homepage',
    component: (resolve) => require(['@/views/homepage.vue'], resolve),
  },
  {
    path: '/admin',
    name: 'admin',
    component: (resolve) => require(['@/views/admin/admin.vue'], resolve),
  },
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/views/admin/login.vue'], resolve),
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
