import { componentData } from '@/assets/js/data';

const newCompData = componentData.filter((item) => {
  return item.isItem;
});

const rules = [];

newCompData.map((item) => {
  rules.push({
    path: item.text_en.toLowerCase(),
    name: item.name,
    component: (resolve) => require([`@/views/component/${item.text_en}.vue`], resolve),
  })
});

export default rules;
