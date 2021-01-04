const menu = [
  {
    'text': '元素样式',
    'children': [
      {
        'text_zh': '字体',
        'text_en': 'Font',
        'name': 'element_Font'
      },
      {
        'text_zh': '颜色',
        'text_en': 'Color',
        'name': 'element_Color'
      },
      {
        'text_zh': '线条&Corner 边角',
        'text_en': 'Line',
        'name': 'element_Line'
      },
      // {
      //   'text_zh': '边角',
      //   'text_en': 'Corner',
      //   'name': 'element_Corner'
      // },
      {
        'text_zh': '阴影',
        'text_en': 'Shadow',
        'name': 'element_Shadow'
      },
      {
        'text_zh': '图片',
        'text_en': 'Picture',
        'name': 'element_Picture'
      },
      {
        'text_zh': '图标',
        'text_en': 'Icon',
        'name': 'element_Icon'
      },
      // {
      //   'text_zh': '文字链接',
      //   'text_en': 'Link',
      //   'name': 'element_Link'
      // },
    ]
  },
  {
    'text': '布局模式',
    'isHideEn': true,
    'children': [
      {
        'text_zh': '单位和间距',
        'text_en': 'unit',
        'name': 'element_Unit'
      },
      {
        'text_zh': '栅格',
        'text_en': 'grid',
        'name': 'element_Grid'
      },
      {
        'text_zh': '内容块',
        'text_en': 'content-block',
        'name': 'element_content_block'
      },
      {
        'text_zh': '布局',
        'text_en': 'layout',
        'name': 'element_Layout'
      },
      {
        'text_zh': '框架',
        'text_en': 'frame',
        'name': 'element__Frame'
      },
    ]
  },
]
const principleData = [];

menu.map(item => {
  principleData.push(...item.children);
});

export default menu ;
export {principleData};

