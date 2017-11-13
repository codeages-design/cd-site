export default [{
  path: 'index',
  name: 'component_index',
  component: (resolve) => require(['@/views/component/Index.vue'], resolve),
}, {
  path: 'button',
  name: 'component_button',
  component: (resolve) => require(['@/views/component/Button.vue'], resolve),
}, {
  path: 'alert',
  name: 'component_alert',
  component: (resolve) => require(['@/views/component/Alert.vue'], resolve),
}, {
  path: 'model',
  name: 'component_model',
  component: (resolve) => require(['@/views/component/Model.vue'], resolve),
}];
