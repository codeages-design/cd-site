export const loading_base = `
<div class="cd-loading">
  <div class="loading-content">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
`;

export const loading_js = `
let loading = cd.loading();

// 插入
$dom.html(loading);
`;