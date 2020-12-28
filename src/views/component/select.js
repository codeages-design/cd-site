
export const select_base = `
<div class="cd-select" id="select-single">
  <input type="hidden" value="option1" />
  <div class="select-value">选项1</div>
  <ul class="select-options">
    <li class="checked" data-value="option1">选项1</li>
    <li data-value="option2">选项2</li>
    <li data-value="option3">选项3</li>
  </ul>
</div>
`;

export const select_multi = `
<div class="cd-select cd-select-multi" id="select-multi">
  <input type="hidden" value="option1,option2,option3" />
  <div class="select-value">
  </div>
  <ul class="select-options">
    <li class="checked" data-value="option1">选项1</li>
    <li class="checked" data-value="option2">选项2</li>
    <li class="checked" data-value="option3">选项3</li>
    <li data-value="option4">选项4</li>
    <li data-value="option5">选项5</li>
    <li data-value="option6">选项6</li>
    <li data-value="option7">选项7</li>
  </ul>
</div>
`;

export const select_api = `
cd.select({
  el: '#select-multi',
  type: 'multi'
}).on('change', (value, text) => {
  console.log('multi', value, text);
});
`;