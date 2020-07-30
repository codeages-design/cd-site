const componentMenu:any[] = [
  {
    'text': '基础 Basic',
    'children': [
        {
          'text_zh': '色彩',
          'text_en': 'Color',
          'name': 'component_color'
        },
        {
          'text_zh': '字体',
          'text_en': 'Font',
          'name': 'component_font'
        },
        {
          'text_zh': '排版',
          'text_en': 'Typography',
          'name': 'component_typography'
        },
        {
          'isItem': true,
          'text_zh': '栅格',
          'text_en': 'Grid',
          'name': 'component_grid'
        },
        {
          'isItem': true,
          'text_zh': '布局',
          'text_en': 'Layout',
          'name': 'component_layout'
        }
    ]
  },
  {
    'text': '通用 Common',
    'children': [
      {
        'text_zh': '按钮',
        'text_en': 'Button',
        'name': 'component_button'
      },
      {
        'text_zh': '图标',
        'text_en': 'Icon',
        'name': 'component_icon'
      },
      {
        'text_zh': '工具类',
        'text_en': 'Tools',
        'name': 'component_tools'
      },
      {
        'text_zh': '标签',
        'text_en': 'Tag',
        'name': 'component_tag'
      },
      {
        'text_zh': '头像',
        'text_en': 'Avatar',
        'name': 'component_avatar'
      },
      {
        'text_zh': '面板',
        'text_en': 'Panel',
        'name': 'component_panel'
      },
      {
        'text_zh': '卡片',
        'text_en': 'Card',
        'name': 'component_card'
      }
    ]
  },
  {
    'text': '表单 Form',
    'children': [
      {
        'text_zh': '输入框',
        'text_en': 'Input',
        'name': 'component_input'
      },
      {
        'text_zh': '单选框',
        'text_en': 'Radio',
        'name': 'component_radio'
      },
      {
        'text_zh': '多选框',
        'text_en': 'Checkbox',
        'name': 'component_checkbox'
      },
      {
        'text_zh': '选择器',
        'text_en': 'Select',
        'name': 'component_select'
      },
      {
        'text_zh': '开关',
        'text_en': 'Switch',
        'name': 'component_switch'
      },
      {
        'text_zh': '上传',
        'text_en': 'Upload',
        'name': 'component_upload'
      },
      {
        'text_zh': '补全',
        'text_en': 'AutoComplete',
        'name': 'component_autocomplete'
      }
    ]
  },
  {
    'text': '通知 Notice',
    'children': [
      {
        'text_zh': '提示框',
        'text_en': 'Alert',
        'name': 'component_alert'
      },
      {
        'text_zh': '信息框',
        'text_en': 'Message',
        'name': 'component_message'
      },
      {
        'text_zh': '确认框',
        'text_en': 'Confirm',
        'name': 'component_confirm'
      },
      {
        'text_zh': '模态框',
        'text_en': 'Modal',
        'name': 'component_modal'
      },
      {
        'text_zh': '反馈',
        'text_en': 'Feedback',
        'name': 'component_feedback'
      },
      {
        'text_zh': '进度条',
        'text_en': 'Progress',
        'name': 'component_progress'
      }
    ]
  },
  {
    'text': '导航 Navigation',
    'children': [
      {
        'text_zh': '面包屑',
        'text_en': 'Breadcrumb',
        'name': 'component_breadcrumb'
      },
      {
        'text_zh': '标签页',
        'text_en': 'Tabs',
        'name': 'component_tabs'
      },
      {
        'text_zh': '下拉菜单',
        'text_en': 'Dropdown',
        'name': 'component_dropdown'
      },
      {
        'text_zh': '步骤条',
        'text_en': 'Steps',
        'name': 'component_steps'
      },
      {
        'text_zh': '分页',
        'text_en': 'Pagination',
        'name': 'component_pagination'
      }
    ]
  },
  {
    'text': '提示 Hint',
    'children': [
      {
        'text_zh': '工具提示',
        'text_en': 'Tooltip',
        'name': 'component_tooltip'
      },
      {
        'text_zh': '气泡提示',
        'text_en': 'Popover',
        'name': 'component_popover'
      },
      {
        'text_zh': '徽标数',
        'text_en': 'Badge',
        'name': 'component_badge'
      },
      {
        'text_zh': '评分',
        'text_en': 'Rate',
        'name': 'component_rate'
      },
      {
        'text_zh': '加载中',
        'text_en': 'Loading',
        'name': 'component_loading'
      }
    ]
  },
  {
    'text': '数据 Data',
    'children': [
      {
        'text_zh': '表格',
        'text_en': 'Table',
        'name': 'component_table'
      }
    ]
  }
];

const navMenu:any[] = [
  {
    'text': '首页',
    'name': 'homepage'
  },
  {
    'text': '原则策略',
    'name': 'principle',
  },
  {
    'text': '元素布局',
    'name': 'element-layout'
  },
  {
    'text': '组件',
    'name': 'component'
  },
  {
    'text': '资源',
    'name': 'resource'
  }
];

const componentData:any[] = [];

componentMenu.map((item: any):void => {
  componentData.push(...item.children);
});

export {
  componentMenu,
  navMenu,
  componentData
};
