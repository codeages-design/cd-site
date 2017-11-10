export default [{
  path: 'index',
  name: 'component_index',
  component: (resolve) => require(['@/views/component/Index.vue'], resolve),
}, {
  path: 'button',
  name: 'component_button',
  component: (resolve) => require(['@/views/component/Button.vue'], resolve),
}];
