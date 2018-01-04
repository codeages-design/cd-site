export default [{
  path: 'component',
  name: 'component',
  redirect: {
    name: 'component_color'
  }
}, {
  path: 'color',
  name: 'component_color',
  component: (resolve) => require(['@/views/component/Color.vue'], resolve),
}, {
  path: 'font',
  name: 'component_font',
  component: (resolve) => require(['@/views/component/Font.vue'], resolve),
}, {
  path: 'typo',
  name: 'component_typo',
  component: (resolve) => require(['@/views/component/Typo.vue'], resolve),
}, {
  path: 'icon',
  name: 'component_icon',
  component: (resolve) => require(['@/views/component/Icon.vue'], resolve),
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
  path: 'pagination',
  name: 'component_pagination',
  component: (resolve) => require(['@/views/component/Pagination.vue'], resolve),
}, {
  path: 'dropdown',
  name: 'component_dropdown',
  component: (resolve) => require(['@/views/component/Dropdown.vue'], resolve),
}, {
  path: 'loading',
  name: 'component_loading',
  component: (resolve) => require(['@/views/component/Loading.vue'], resolve),
}, {
  path: 'input',
  name: 'component_input',
  component: (resolve) => require(['@/views/component/Input.vue'], resolve),
}, {
  path: 'radio',
  name: 'component_radio',
  component: (resolve) => require(['@/views/component/Radio.vue'], resolve),
}, {
  path: 'checkbox',
  name: 'component_checkbox',
  component: (resolve) => require(['@/views/component/Checkbox.vue'], resolve),
}, {
  path: 'select',
  name: 'component_select',
  component: (resolve) => require(['@/views/component/Select.vue'], resolve),
}, {
  path: 'switch',
  name: 'component_switch',
  component: (resolve) => require(['@/views/component/Switch.vue'], resolve),
}, {
  path: 'avatar',
  name: 'component_avatar',
  component: (resolve) => require(['@/views/component/Avatar.vue'], resolve),
}, {
  path: 'badge',
  name: 'component_badge',
  component: (resolve) => require(['@/views/component/Badge.vue'], resolve),
}, {
  path: 'security',
  name: 'component_security',
  component: (resolve) => require(['@/views/component/Security.vue'], resolve),
}, {
  path: 'setting',
  name: 'component_setting',
  component: (resolve) => require(['@/views/component/Setting.vue'], resolve),
}, {
  path: 'status',
  name: 'component_status',
  component: (resolve) => require(['@/views/component/Status.vue'], resolve),
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
  path: 'modal',
  name: 'component_modal',
  component: (resolve) => require(['@/views/component/Modal.vue'], resolve),
}, {
  path: 'feedback',
  name: 'component_feedback',
  component: (resolve) => require(['@/views/component/Feedback.vue'], resolve),
}, {
  path: 'progress',
  name: 'component_progress',
  component: (resolve) => require(['@/views/component/Progress.vue'], resolve),
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
}, {
  path: 'tooltip',
  name: 'component_tooltip',
  component: (resolve) => require(['@/views/component/Tooltip.vue'], resolve),
}, {
  path: 'table',
  name: 'component_table',
  component: (resolve) => require(['@/views/component/Table.vue'], resolve),
}];
