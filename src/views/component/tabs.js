export const tabs_base = `
<ul class="cd-tabs">
  <li class="active"><a href="javascript:;">选中菜单</a></li>
  <li><a href="javascript:;">数字菜单<span class="number">2</span></a></li>
  <li><a href="javascript:;">未选菜单</a></li>
</ul>
`;

export const tabs_switch = `
<ul class="cd-tabs">
  <li class="active"><a href="javascript:;" data-toggle="cd-tabs" data-target="#tab1">Tab1</a></li>
  <li><a href="javascript:;" data-toggle="cd-tabs" data-target="#tab2">Tab2</a></li>
  <li><a href="javascript:;" data-toggle="cd-tabs" data-target="#tab3">Tab3</a></li>
</ul>

<div class="cd-tabs-content">
  <div class="cd-tabs-panel active" id="tab1">
  这是tab1的内容
  </div>
  <div class="cd-tabs-panel" id="tab2">
  这是tab2的内容
  </div>
  <div class="cd-tabs-panel" id="tab3">
  这是tab3的内容
  </div>
</div>
`;

export const tabs_ajax = `
<ul class="cd-tabs">
  <li class="active"><a href="javascript:;" class="js-tabs" data-url="/demo/tabs/1">Tab1</a></li>
  <li><a href="javascript:;" class="js-tabs" data-url="/demo/tabs/2">Tab2</a></li>
  <li><a href="javascript:;" class="js-tabs" data-url="/demo/tabs/3">Tab3</a></li>
</ul>
<div id="tabs-panel"></div>
`;

export const tabs_api = `
cd.tabs({
  el: '.js-tabs',
  target: '#tabs-panel',
  url: '/demo/tabs/1',
  success(res) {
    $('#tabs-panel').html(JSON.parse(res).message);
  },
  error(res) {
    console.log('这是失败的回调函数')
  }
})
`;