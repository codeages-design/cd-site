export const checkbox_base = `
<label class="cd-checkbox">
  <input type="checkbox" value="1" data-toggle="cd-checkbox">
  多选框
</label>
`;

export const checkbox_group = `
<div class="cd-checkbox-group">
  <label class="cd-checkbox">
  <input type="checkbox" value="1" data-toggle="cd-checkbox">
  选项一
  </label>
  <label class="cd-checkbox checked">
  <input type="checkbox" value="2" checked data-toggle="cd-checkbox">
  选项二
  </label>
  <label class="cd-checkbox">
  <input type="checkbox" value="3" data-toggle="cd-checkbox">
  选项三
  </label>
</div>
`;

export const checkbox_disabled = `
<div class="cd-checkbox-group">
  <label class="cd-checkbox disabled">
  <input type="checkbox" value="1" disabled data-toggle="cd-checkbox">
  未选中禁用
  </label>
  <label class="cd-checkbox checked disabled">
  <input type="checkbox" value="2" checked disabled data-toggle="cd-checkbox">
  已选中禁用
  </label>
</div>
`;

export const checkbox_api = `
cd.checkbox({
  el: '#checkbox'
}, (event) => {
  console.log('这是回调函数');
})
`;