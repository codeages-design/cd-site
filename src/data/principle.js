const menu = [
  {
    'text': 'Codeages Design',
    isHideEn: true,
    'children': [
      {
        'text_zh': '简介',
        'text_en': 'desc',
        'name': 'principle_desc'
      },
      {
        'text_zh': '价值观',
        'text_en': 'value',
        'name': 'principle_value'
      },
      {
        'text_zh': '适用边界',
        'text_en': 'boundary',
        'name': 'principle_boundary'
      }, 
    ]
  },
  {
    'text': '设计共性',
    isHideEn: true,
    'children': [
      {
        'text_zh': '一致性',
        'text_en': 'coherence',
        'name': 'principle_coherence'
      },
      {
        'text_zh': '可控性',
        'text_en': 'controlled',
        'name': 'component_controlled'
      },
      {
        'text_zh': '灵活性',
        'text_en': 'familiarity',
        'name': 'component_familiarity'
      },
      {
        'text_zh': '友好性',
        'text_en': 'friendly',
        'name': 'component_friendly'
      },
      {
        'text_zh': '安全性',
        'text_en': 'safety',
        'name': 'component_safety'
      },
    ]
  },
  {
    text: '设计原则',
    isHideEn: true,
    children: [
      {
        text_zh: '重点突出',
        text_en: 'importance',
        name: 'principle_importance'
      },
      {
        text_zh: '对齐',
        text_en: 'align',
        name: 'principle_align'
      },
      {
        text_zh: '重复',
        text_en: 'repetition',
        name: 'principle_repetition'
      },
      {
        text_zh: '足不出户',
        text_en: 'keep_in_doors',
        name: 'principle_keep_in_doors'
      },
      {
        text_zh: '简化交互',
        text_en: 'interaction',
        name: 'principle_interaction'
      },
      {
        text_zh: '提供邀请',
        text_en: 'offer_request',
        name: 'principle_offer_request'
      },
      {
        text_zh: '及时反馈',
        text_en: 'couple_back',
        name: 'principle_couple_back'
      }
    ]
  },
  {
    text: '全局规则',
    isHideEn: true,
    children: [
      {
        text_zh: '导航',
        text_en: 'navigation',
        name: 'principle_navigation'
      },
      {
        text_zh: '消息与反馈',
        text_en: 'messages',
        name: 'principle_messages'
      },
      {
        text_zh: '空状态',
        text_en: 'dummy_status',
        name: 'principle_dummy_status'
      },
    ]
  },
  {
    text: '动效',  
    isHideEn: true,
    isOnly: true,
    children: [
      {
        text_zh: '动效',
        text_en: 'dynamic_effect',
        name: 'principle_dynamic_effect',
      }
    ],
  },
  {
    text: '可视化', 
    isHideEn: true,
    isOnly: true,
    children: [
      {
        text_zh: '可视化',
        text_en: 'visualization', 
        name: 'principle_visualization',
      }
    ],
  }
]
const principleData = [];

menu.map(item => {
  principleData.push(...item.children);
});

export default menu;

export {
  principleData
}