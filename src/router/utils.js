export const getRules = (data, name) => {
  const rules = [];

  data.map((item) => {
    rules.push({
      path: item.text_en.toLowerCase(),
      name: item.name,
      meta: {
        title: item.text_zh,
      },
      component: (resolve) => require([`@/views/${name}/${item.text_en.toLowerCase()}.vue`], resolve),
    })
  });

  return rules;
}