import { principleData } from '@/data/element-layout.js';

const rules = [];

principleData.map((item) => {
  rules.push({
    path: item.text_en.toLowerCase(),
    name: item.name,
    meta: {
      title: item.text_zh,
    },
    component: (resolve) => require([`@/views/element-layout/${item.text_en.toLowerCase()}.vue`], resolve),
  })
});

export default rules;
