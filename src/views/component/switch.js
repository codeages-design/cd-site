export const switch_base = `
<label class="cd-switch checked">
  <input id="switch" type="radio" data-toggle="cd-switch" value="1" checked/>
</label>
`;

export const switch_disabled = `
<label class="cd-switch disabled">
  <input type="radio" data-toggle="cd-switch" value="1" disabled />
</label>
<label class="cd-switch checked disabled">
  <input type="radio" data-toggle="cd-switch" value="2" checked disabled />
</label>
`;


export const switch_api = `
<!-- 1 无需js调用方式 即DATA-API -->
<label class="cd-switch checked">
  <input type="radio" data-toggle="cd-switch" value="1" checked/>
</label>

<!-- 2 js调用方式 -->
<label class="cd-switch checked">
  <input id="switch" type="radio" value="1" checked />
</label>

// 为了避免和js中的switch关键词冲突，故用onoff
cd.onoff({
  el: '#switch'
}).on('change', (value) => {
  console.log('switch', value);
})
`;