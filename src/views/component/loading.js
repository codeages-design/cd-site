export const loading_base = `
<div class="cd-loading">
  <div class="loading-content">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
`;

export const loading_api = `
let loading = cd.loading({
  isFixed: false
});

// 插入
$target.html(loading);
`;