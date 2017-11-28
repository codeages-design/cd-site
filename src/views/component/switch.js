export const switch_base = `
<label class="cd-switch">
  <input type="checkbox" data-toggle="cd-switch" value="1" />
</label>
<label class="cd-switch checked">
  <input type="checkbox" data-toggle="cd-switch" value="2" checked />
</label>
`;

export const switch_disabled = `
<label class="cd-switch disabled">
  <input type="checkbox" data-toggle="cd-switch" value="1" disabled />
</label>
<label class="cd-switch checked disabled">
  <input type="checkbox" data-toggle="cd-switch" value="2" checked disabled />
</label>
`;

export const switch_api = `
// 为了避免和js中的switch关键词冲突，故用onoff
cd.onoff({
  el: '#switch'
}, (event) => {
  console.log('这是回调函数')
})
`;