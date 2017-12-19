
export const select_base = `
<div class="cd-select" id="select-single">
  <input type="hidden" />
  <div class="select-value">选项1</div>
  <ul class="select-options">
    <li class="checked">选项1</li>
    <li>选项2</li>
    <li>选项3</li>
  </ul>
</div>
`;

export const select_multi = `
<div class="cd-select cd-select-multi cd-in" id="select-multi">
  <input type="hidden" />
  <div class="select-value" contenteditable="true">
    <span class="cd-tag" contenteditable="false">
      选项1
      <i class="cd-icon cd-icon-danger" data-toggle="cd-tag-close"></i>
    </span>
    <span class="cd-tag" contenteditable="false">
      选项2
      <i class="cd-icon cd-icon-danger" data-toggle="cd-tag-close"></i>
    </span>
  </div>
  <ul class="select-options">
    <li class="checked">选项1</li>
    <li>选项2</li>
    <li>选项3</li>
  </ul>
</div>
`;