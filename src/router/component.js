import { component } from '@/assets/data.json';

const newCompData = component.filter((item) => {
  return item.isItem;
});

const rules = [];

newCompData.map((item) => {
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
