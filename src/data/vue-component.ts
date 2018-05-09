import { getData } from './index';

const vueComponentMenu:any[] = [
  {
    'text': '基础 Basic',
    'children': [
      {
        'isItem': true,
        'text_zh': '栅格',
        'text_en': 'Grid',
        'name': 'vue-component_grid'
      },
    ]
  },
  {
    'text': '通用 Common',
    'children': [{
      'text_zh': '图标',
      'text_en': 'Icon',
      'name': 'vue-component_icon'
    }]
  },
  {
    'text': '通知 Notice',
    'children': [
      {
        'text_zh': '提示框',
        'text_en': 'Alert',
        'name': 'vue-component_alert'
      },
      {
        'text_zh': '信息框',
        'text_en': 'Message',
        'name': 'vue-component_message'
      }
    ]
  },
  {
    'text': '导航 Navigation',
    'children': [
      {
        'text_zh': '步骤条',
        'text_en': 'Step',
        'name': 'vue-component_step'
      },
    ]
  },
  {
    'text': '提示 Hint',
    'children': [
      {
        'text_zh': '微标数',
        'text_en': 'Badge',
        'name': 'vue-component_badge'
      }
    ]
  }
];

const vueComponentData:any[] = getData(vueComponentMenu);

export {
  vueComponentData,
  vueComponentMenu
};