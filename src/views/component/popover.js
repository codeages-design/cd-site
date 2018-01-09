export const popover_base = `
<div class="cd-popover topRight">
  <div class="popover-arrow"></div>
  <div class="popover-title">
    popover top
  </div>
  <div class="popover-content">
    popover content<br>
    popover content
  </div>
</div>

<div class="cd-popover right">
  <div class="popover-arrow"></div>
  <div class="popover-title">
    popover right
  </div>
  <div class="popover-content">
    popover content<br>
    popover content
  </div>
</div>
<div class="cd-popover bottom">
  <div class="popover-arrow"></div>
  <div class="popover-title">
    popover bottom
  </div>
  <div class="popover-content">
    popover content<br>
    popover content
  </div>
</div>
<div class="cd-popover left">
  <div class="popover-arrow"></div>
  <div class="popover-title">
    popover left
  </div>
  <div class="popover-content">
    popover content<br>
    popover content
  </div>
</div>
`;

export const popover_type = `
<button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-trigger="click" data-title="click" data-content="popover content<br>popover content" data-placement="top" style="width: 120px">click</button>
<button class="cd-btn cd-btn-ghost-default" data-toggle="cd-popover" data-trigger="hover" data-title="hover" data-content="popover content<br>popover content" data-placement="top" style="width: 120px">hover</button>
`;

export const popover_api = `
cd.popover({
  el: '[data-toggle="cd-popover"]',
  trigger: 'click',
  title: '这是标题',
  content: '这是主题内容'
})
`;