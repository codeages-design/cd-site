import { principleData } from '@/data/principle.js';

const rules = [];

principleData.map((item) => {
  rules.push({
    path: item.text_en.toLowerCase(),
    name: item.name,
    meta: {
      title: item.text_zh,
    },
    component: (resolve) => require([`@/views/principle/${item.text_en.toLowerCase()}.vue`], resolve),
  })
});

export default rules;
