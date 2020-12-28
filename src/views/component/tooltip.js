export const tooltip_base = `
<div class="cd-tooltip top">
  Tooltip on the top
</div>
<div class="cd-tooltip right">
  Tooltip on the right
</div>
<div class="cd-tooltip bottom">
  Tooltip on the bottom
</div>
<div class="cd-tooltip left">
  Tooltip on the left
</div>
`;

export const tooltip_api = `
cd.tooltip({
  el: '[data-toggle="cd-tooltip"]',
  title: 'Plase add title',
  placement: 'top',
  offset: 10,
  delay: 0,
  container: document.body,
})
`;