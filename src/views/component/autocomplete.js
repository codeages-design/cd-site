export const autoComplete_base = `
<div class="cd-autocomplete" id="cd-autocomplete">
  <input type="text" class="cd-form-control" placeholder="请输入1来尝试" />
</div>
`;

export const autocomplete_api = `
// 静态数据
const sources = ['11', '12', '13', '21'];

cd.autocomplete({
  el: '#cd-autocomplete',
  sources: sources,
});

// 数据源为对象
const sources = [
  { id: '1', name: '11' },
  { id: '2', name: '12' },
  { id: '3', name: '13' },
  { id: '4', name: '21' }
];

cd.autocomplete({
  el: '#cd-autocomplete',
  sources: sources,
  selectKey: 'name'
});

// ajax数据
cd.autocomplete({
  el: '#cd-autocomplete',
  sources(value) {
    return new Promise((resolve, reject) => {
      // 以下片段自由修改
      $.ajax({
        url: GET_DATA_URL,
        data: {
          q: value
        }
      }).done((res) => {
        resolve(res);
      }).fail((res) => {
        console.log(res);
        reject([]);
      })
    })
  }
});
`;