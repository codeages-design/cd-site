export const checkbox_base = `
<label class="cd-checkbox">
  <input type="checkbox" value="1" data-toggle="cd-checkbox">
  默认
</label>
<label class="cd-checkbox checked">
  <input type="checkbox" value="2" checked data-toggle="cd-checkbox">
  选中
</label>
<label class="cd-checkbox disabled">
  <input type="checkbox" value="3" disabled data-toggle="cd-checkbox">
  禁用
</label>
`;

export const  checkbox_group = `
<div class="cd-checkbox-group">
  <label class="cd-checkbox">
  <input type="checkbox" value="1" data-toggle="cd-checkbox">
  默认
  </label>
  <label class="cd-checkbox checked">
  <input type="checkbox" value="2" checked data-toggle="cd-checkbox">
  选中
  </label>
  <label class="cd-checkbox disabled">
  <input type="checkbox" value="3" disabled data-toggle="cd-checkbox">
  禁用
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