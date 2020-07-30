const menu = [
  {
    'text': '元素样式',
    'children': [
      {
        'text_zh': '字体',
        'text_en': 'Font ',
        'name': 'element_Font'
      },
      {
        'text_zh': '颜色',
        'text_en': 'Color',
        'name': 'element_Color'
      },
      {
        'text_zh': '线条',
        'text_en': 'Line',
        'name': 'element_Line'
      },
      {
        'text_zh': '边角',
        'text_en': 'Corner',
        'name': 'element_Corner'
      },
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
      {
        'text_zh': '文字链接',
        'text_en': 'Link',
        'name': 'element_Link'
      },
    ]
  },
  {
    'text': '布局模式',
    'isHideEn': true,
    'children': [
      {
        'text_zh': '单位',
        'text_en': 'unit',
        'name': 'principle_unit'
      },
      {
        'text_zh': '方块',
        'text_en': 'block',
        'name': 'component_block'
      },
      {
        'text_zh': '间距',
        'text_en': 'gap',
        'name': 'component_gap'
      },
      {
        'text_zh': '栅格',
        'text_en': 'grid',
        'name': 'component_grid'
      },
      {
        'text_zh': '布局',
        'text_en': 'layout',
        'name': 'component_layout'
      },
      {
        'text_zh': '框架',
        'text_en': 'frame',
        'name': 'component_frame'
      },
    ]
  },
]
const data = [];

menu.map(item => {
  data.push(...item.children);
});

export default menu;
