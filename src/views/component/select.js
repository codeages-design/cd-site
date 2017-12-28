
export const select_base = `
<div class="cd-select" id="select-single">
  <input type="hidden" value="选项1" />
  <div class="select-value">选项1</div>
  <ul class="select-options">
    <li class="checked">选项1</li>
    <li>选项2</li>
    <li>选项3</li>
  </ul>
</div>
`;

export const select_multi = `
<div class="cd-select cd-select-multi" id="select-multi">
  <input type="hidden" value="选项1,选项2" />
  <div class="select-value">
  </div>
  <ul class="select-options">
    <li class="checked">选项1</li>
    <li class="checked">选项2</li>
    <li>选项3</li>
    <li>选项4</li>
  </ul>
</div>
`;

export const select_api = `
cd.select({
  el: '#select-multi',
  type: 'multi'
})
`;