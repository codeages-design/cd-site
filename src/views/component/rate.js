export const rate_static = `
<ul class="cd-rate cd-rate-static">
  <li class="rate-star rate-star-full">
    <i class="cd-icon cd-icon-star"></i>
  </li>
  <li class="rate-star rate-star-full">
    <i class="cd-icon cd-icon-star"></i>
  </li>
  <li class="rate-star rate-star-full">
    <i class="cd-icon cd-icon-star-half"></i>
  </li>
  <li class="rate-star">
    <i class="cd-icon cd-icon-star"></i>
  </li>
  <li class="rate-star">
    <i class="cd-icon cd-icon-star"></i>
  </li>
</ul>
`;

export const rate_base = `
<input type="hidden" id="cd-rate" name="rate" />
`;

export const rate_api = `
cd.rate({
  el: '#cd-rate',
  score: 3,
}, (score) => {
  console.log(score);
})
`;

