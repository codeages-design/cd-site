export const tag_type = `
<span class="cd-tag">静态标签</span>

<span class="cd-tag">
  可关闭的标签
  <i class="cd-icon cd-icon-danger" data-toggle="cd-tag-close"></i>
</span>
`;

export const tag_color = `
<span class="cd-tag cd-tag-green">绿色标签</span>
<span class="cd-tag cd-tag-red">红色标签</span>
<span class="cd-tag cd-tag-orange">橙色标签</span>
<span class="cd-tag cd-tag-blue">蓝色标签</span>
<span class="cd-tag cd-tag-purple">紫色标签</span>
<span class="cd-tag cd-tag-pink">粉色标签</span>
`;

export const tag_api = `
cd.tag({
  closeEl: '#tag-close',
  close() {
    console.log('这是关闭后的回调函数');
  }
})
`;