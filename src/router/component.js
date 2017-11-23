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
  path: 'tabs',
  name: 'component_tabs',
  component: (resolve) => require(['@/views/component/Tabs.vue'], resolve),
}, {
  path: 'loading',
  name: 'component_loading',
  component: (resolve) => require(['@/views/component/Loading.vue'], resolve),
}, {
  path: 'model',
  name: 'component_model',
  component: (resolve) => require(['@/views/component/Model.vue'], resolve),
}, {
  path: 'radio',
  name: 'component_radio',
  component: (resolve) => require(['@/views/component/Radio.vue'], resolve),
}, {
  path: 'avatar',
  name: 'component_avatar',
  component: (resolve) => require(['@/views/component/Avatar.vue'], resolve),
}, {
  path: 'steps',
  name: 'component_steps',
  component: (resolve) => require(['@/views/component/Steps.vue'], resolve),
}, {
  path: 'confirm',
  name: 'component_confirm',
  component: (resolve) => require(['@/views/component/Confirm.vue'], resolve),
}, {
  path: 'message',
  name: 'component_message',
  component: (resolve) => require(['@/views/component/Message.vue'], resolve),
}, {
  path: 'panel',
  name: 'component_panel',
  component: (resolve) => require(['@/views/component/Panel.vue'], resolve),
}, {
  path: 'card',
  name: 'component_card',
  component: (resolve) => require(['@/views/component/Card.vue'], resolve),
}, {
  path: 'tag',
  name: 'component_tag',
  component: (resolve) => require(['@/views/component/Tag.vue'], resolve),
}];
