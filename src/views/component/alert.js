export const alert_color = `
<div class="cd-alert cd-alert-success">成功提示框，展示成功信息。</div>
<div class="cd-alert cd-alert-danger">错误提示框，展示错误信息。</div>
<div class="cd-alert cd-alert-warning">警告提示框，展示重要信息。</div>
<div class="cd-alert cd-alert-info">信息提示框，展示基本信息。</div>
`;

export const alert_close = `
<div class="cd-alert cd-alert-success">
  可关闭的成功提示框。
  <button type="button" class="close" data-toggle="cd-alert-close">
    <i class="cd-icon cd-icon-close"></i>
  </button>
</div>
<div class="cd-alert cd-alert-danger">
  可关闭的错误提示框。
  <button type="button" class="close" data-toggle="cd-alert-close">
    <i class="cd-icon cd-icon-close"></i>
  </button>
</div>
<div class="cd-alert cd-alert-warning">
  可关闭的警告提示框。
  <button type="button" class="close" data-toggle="cd-alert-close">
    <i class="cd-icon cd-icon-close"></i>
  </button>
</div>
<div class="cd-alert cd-alert-info">
  可关闭的信息提示框。
  <button type="button" class="close" data-toggle="cd-alert-close">
    <i class="cd-icon cd-icon-close"></i>
  </button>
</div>
`;

export const alert_api = `
cd.alert({
  closeEl: '#alert-close',
  close() {
    console.log('这是关闭后的回调函数');
  }
})
`;