export const upload_avatar = `
<div class="cd-image-upload">
  <img src="" alt="" class="cd-avatar cd-avatar-square cd-avatar-lg" id="cd-avatar" />
  <div class="image-upload-mask">
    <div class="image-upload-content">
      <i class="cd-icon cd-icon-camera"></i>上传图片
    </div>
  </div>
  <label class="image-upload-label">
    <input id="cd-upload" type="file" name="file" class="cd-hide" data-target="#cd-avatar" />
  </label>
</div>
`;

export const upload_file = `
  <label class="cd-btn cd-btn-ghost-default">
    <span>上传文件</span>
    <input id="upload-file" type="file" name="file2" class="cd-hide" />
  </label>
`;

export const upload_api = `
cd.upload({
  el: '#cd-upload',
}).on('success', (event, file, src) => {
  // 替换自己的业务
  let $this = $(event.currentTarget);
  let $target = $($this.data('target'));

  $target.attr('src', src);
}).on('error', (code) => {
  let message = '';
  if (code === 'FILE_SIZE_LIMIT') {
    message = '文件大小超过了限制';
  } else if (code === 'FLIE_TYPE_LIMIT') {
    message = '文件格式不符合要求';
  }
  cd.message({
    type: 'danger',
    message: message
  })
});
`;