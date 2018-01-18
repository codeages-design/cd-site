export const tag_type = `
<span class="cd-tag">静态标签</span>

<span class="cd-tag" id="cd-tag">
  可关闭的标签
  <i class="cd-icon cd-icon-danger"></i>
</span>
`;

export const tag_color = `
<span class="cd-tag cd-tag-default">默认标签</span>
<span class="cd-tag cd-tag-green">绿色标签</span>
<span class="cd-tag cd-tag-red">红色标签</span>
<span class="cd-tag cd-tag-orange">橙色标签</span>
<span class="cd-tag cd-tag-blue">蓝色标签</span>
<span class="cd-tag cd-tag-purple">紫色标签</span>
<span class="cd-tag cd-tag-pink">粉色标签</span>
<span class="cd-tag cd-tag-yellow">黄色标签</span>
`;

export const tag_api = `
cd.tag({
  el: '#cd-tag',
}).on('close', ($close, $tag) => {
  console.log('tag', $close, $tag);
})
`;