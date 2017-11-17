export const radio_base = `
<div class="cd-radio-group">
  <label class="cd-radio checked">
    <input type="radio" name="title" value="1" data-toggle="cd-radio">
    选项内容
  </label>
  <label class="cd-radio">
    <input type="radio" name="title" value="2" data-toggle="cd-radio">
    选项内容
  </label>
</div>
`;

export const radio_disabled = `
<div class="cd-radio-group">
  <label class="cd-radio checked disabled">
    <input type="radio" name="title" value="1" data-toggle="cd-radio" disabled>
    选项内容
  </label>
  <label class="cd-radio disabled">
    <input type="radio" name="title" value="2" data-toggle="cd-radio" disabled>
    选项内容
  </label>
</div>
`;

export const radio_size = `
<div class="cd-radio-group">
  <label class="cd-radio checked">
    <input type="radio" name="title" value="1" data-toggle="cd-radio">
    常规
  </label>
  <label class="cd-radio">
    <input type="radio" name="title" value="2" data-toggle="cd-radio">
    常规
  </label>
</div>

<div class="cd-radio-group">
  <label class="cd-radio cd-radio-sm checked">
    <input type="radio" name="title" value="1" data-toggle="cd-radio">
    小号
  </label>
  <label class="cd-radio cd-radio-sm">
    <input type="radio" name="title" value="2" data-toggle="cd-radio">
    小号
  </label>
</div>
`;

export const radio_js = `
cd.radio({
  el: '#radio',
  cb() {
    console.log('这是回调函数')
  }
});
`;