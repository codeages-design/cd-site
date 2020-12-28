export const tabs_base = `
<ul class="cd-tabs">
  <li class="active"><a href="javascript:;">选中菜单</a></li>
  <li><a href="javascript:;">数字菜单<span class="number">2</span></a></li>
  <li><a href="javascript:;">未选菜单</a></li>
</ul>
`;

export const tabs_switch = `
<ul class="cd-tabs">
  <li class="active"><a href="javascript:;" data-toggle="cd-tabs" data-target="#tab1">标签页一</a></li>
  <li><a href="javascript:;" data-toggle="cd-tabs" data-target="#tab2">标签页二</a></li>
  <li><a href="javascript:;" data-toggle="cd-tabs" data-target="#tab3">标签页三</a></li>
</ul>

<div class="cd-tabs-content">
  <div class="cd-tabs-panel active" id="tab1">
  这是标签页一的内容
  </div>
  <div class="cd-tabs-panel" id="tab2">
  这是标签页二的内容
  </div>
  <div class="cd-tabs-panel" id="tab3">
  这是标签页三的内容
  </div>
</div>
`;

export const tabs_ajax = `
<ul class="cd-tabs" id="cd-tabs">
  <li class="active"><a href="javascript:;" data-url="/demo/tabs/1">标签页一</a></li>
  <li><a href="javascript:;" data-url="/demo/tabs/2">标签页二</a></li>
  <li><a href="javascript:;" data-url="/demo/tabs/3">标签页三</a></li>
</ul>
<div id="tabs-panel"></div>
`;

export const tabs_api = `
cd.tabs({
  el: '#cd-tabs a',
  target: '#tabs-panel',
  url: '/demo/tabs/1',
}).on('success', (res) => {
  console.log('success', res);
}).on('error', (res) => {
  console.log('error', res);
})
`;