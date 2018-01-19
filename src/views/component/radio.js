export const radio_base = `
<div class="cd-radio-group">
  <label class="cd-radio checked">
    <input type="radio" name="title" value="1" data-toggle="cd-radio">
    选项内容一
  </label>
  <label class="cd-radio">
    <input type="radio" name="title" value="2" data-toggle="cd-radio">
    选项内容二
  </label>
  <label class="cd-radio">
    <input type="radio" name="title" value="3" data-toggle="cd-radio">
    选项内容三
  </label>
</div>
`;

export const radio_disabled = `
<div class="cd-radio-group">
  <label class="cd-radio checked disabled">
    <input type="radio" name="title" value="1" data-toggle="cd-radio" disabled>
    选项内容一
  </label>
  <label class="cd-radio disabled">
    <input type="radio" name="title" value="2" data-toggle="cd-radio" disabled>
    选项内容二
  </label>
  <label class="cd-radio disabled">
    <input type="radio" name="title" value="3" data-toggle="cd-radio" disabled>
    选项内容三
  </label>
</div>
`;

export const radio_size = `
<div class="cd-radio-group">
  <label class="cd-radio checked">
    <input type="radio" name="title" value="1" data-toggle="cd-radio">
    默认尺寸选项一
  </label>
  <label class="cd-radio">
    <input type="radio" name="title" value="2" data-toggle="cd-radio">
    默认尺寸选项二
  </label>
</div>

<div class="cd-radio-group">
  <label class="cd-radio cd-radio-sm checked">
    <input type="radio" name="title" value="1" data-toggle="cd-radio">
    小尺寸选项一
  </label>
  <label class="cd-radio cd-radio-sm">
    <input type="radio" name="title" value="2" data-toggle="cd-radio">
    小尺寸选项二
  </label>
</div>
`;

export const radio_api = `
cd.radio({
  el: '#cd-radio',
}).on('click', ($item) => {
  console.log('点击后触发');
});
`;