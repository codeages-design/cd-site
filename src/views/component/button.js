export const button_base = `
<button class="cd-btn cd-btn-primary">主要按钮</button>
<button class="cd-btn cd-btn-default">默认按钮</button>
`;

export const button_link = `
<button class="cd-btn cd-btn-link-primary">主要按钮</button>
<button class="cd-btn cd-btn-link-default">默认按钮</button>
<button class="cd-btn cd-btn-link-danger">危险按钮</button>
`;

export const button_ghost = `
<button class="cd-btn cd-btn-ghost-primary">主要按钮</button>
<button class="cd-btn cd-btn-ghost-default">默认按钮</button>
<button class="cd-btn cd-btn-ghost-light">白色按钮</button>
`;

export const button_disabled = `
<button disabled class="cd-btn cd-btn-default">通用按钮</button><button disabled class="cd-btn cd-btn-ghost-default">幽灵按钮</button><button disabled class="cd-btn cd-btn-link-default">链接按钮</button>
`;

export const button_size = `
<button class="cd-btn cd-btn-primary cd-btn-lg">最大按钮</button>
<button class="cd-btn cd-btn-primary">中等按钮</button>
<button class="cd-btn cd-btn-primary cd-btn-sm">最小按钮</button>
`;

export const button_api = `
const btn = cd.btn({
  el: '#cd-btn',
  loadingText: '加载中...'
});

btn.trigger('loading', () => {
  console.log('loading...');
});

setTimeout(() => {
  btn.trigger('reset', () => {
    console.log('reset...');
  });
}, 1000);
`;