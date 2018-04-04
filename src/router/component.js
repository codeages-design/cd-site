import { componentData } from '@/data';

const rules = [];

componentData.map((item) => {
  rules.push({
    path: item.text_en.toLowerCase(),
    name: item.name,
    meta: {
      title: item.text_zh,
    },
    component: (resolve) => require([`@/views/component/${item.text_en}.vue`], resolve),
  })
});

export default rules;
