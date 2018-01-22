export const dropdown_base = `
<div class="cd-dropdown" data-toggle="cd-dropdown" data-trigger="hover">
  <a href="javascript:;" class="cd-link-primary">
    悬浮下拉<i class="cd-icon cd-icon-arrow-down"></i>
  </a>
  <ul class="dropdown-menu">
    <li>
      <a href="javascript:;">下拉菜单项一</a>
    </li>
    <li>
      <a href="javascript:;">下拉菜单项二</a>
    </li>
  </ul>
</div>
`;

export const dropdown_placement = `
<div class="cd-dropdown" data-toggle="cd-dropdown">
  <button class="cd-btn cd-btn-primary">
    左对齐 <i class="cd-icon cd-icon-arrow-down"></i>
  </button>
  <ul class="dropdown-menu">
    <li>
      <a href="javascript:;">下拉菜单项一</a>
    </li>
    <li>
      <a href="javascript:;">下拉菜单项二</a>
    </li>
  </ul>
</div>

<div class="cd-dropdown cd-dropdown-right" data-toggle="cd-dropdown">
  <button class="cd-btn cd-btn-primary">
    右对齐 <i class="cd-icon cd-icon-arrow-down"></i>
  </button>
  <ul class="dropdown-menu">
    <li>
      <a href="javascript:;">下拉菜单项一</a>
    </li>
    <li>
      <a href="javascript:;">下拉菜单项二</a>
    </li>
  </ul>
</div>
`;

export const dropdown_click = `
<div class="cd-dropdown" data-toggle="cd-dropdown">
  <a href="javascript:;" class="cd-link-primary">
    点击下拉<i class="cd-icon cd-icon-arrow-down"></i>
  </a>
  <ul class="dropdown-menu">
    <li>
      <a href="javascript:;">下拉菜单项一</a>
    </li>
    <li>
      <a href="javascript:;">下拉菜单项二</a>
    </li>
  </ul>
</div>
`;

export const dropdown_api =  `
cd.dropdown({
  el: '#cd-dropdown',
  trigger: 'click',
}).on('hide', () => {
  console.log('下拉收起后的回调');
}).on('show', () => {
  console.log('下拉展开后的回调');
})
`;