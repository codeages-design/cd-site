export const grid_base = `
<cd-row>
  <cd-col :span="24">
    <div class="grid-content bg-purple">24</div>
  </cd-col>
</cd-row>
<cd-row :gutter="20">
  <cd-col :span="12">
    <div class="grid-content bg-purple">12</div>
  </cd-col>
  <cd-col :span="12">
    <div class="grid-content bg-purple">12</div>
  </cd-col>
</cd-row>
<cd-row>
  <cd-col :span="8">
    <div class="grid-content bg-purple">8</div>
  </cd-col>
  <cd-col :span="8">
    <div class="grid-content bg-purple">8</div>
  </cd-col>
  <cd-col :span="8">
    <div class="grid-content bg-purple">8</div>
  </cd-col>
</cd-row>
`;

export const grid_offset = `
<div class="cd-row">
  <div class="cd-md-10 cd-md-offset-2">
    <div class="cd-bg">cd-md-10 cd-md-offset-2</div>
  </div>
  <div class="cd-md-12 cd-md-offset-4">
    <div class="cd-bg">cd-md-12 cd-md-offset-4</div>
  </div>
  <div class="cd-md-6 cd-md-offset-2">
    <div class="cd-bg">cd-md-6 cd-md-offset-2</div>
  </div>
</div>
`;

export const grid_responsive = `
<div class="cd-row">
  <div class="cd-md-12 cd-sm-16 cd-xs-24">
    <div class="cd-bg">cd-md-12 cd-sm-16 cd-xs-24</div>
  </div>
  <div class="cd-md-12 cd-sm-16 cd-xs-24">
    <div class="cd-bg">cd-md-12 cd-sm-16 cd-xs-24</div>
  </div>
</div>
`;

export const grid_flex = `
<p>左对齐flex-start：</p>
<cd-row type="flex" justify="start">
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
</cd-row>
<p>居中对齐flex-center：</p>
<cd-row type="flex" justify="center">
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
</cd-row>
<p>居中对齐flex-end：</p>
<cd-row type="flex" justify="end">
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
</cd-row>
<p>space-between：</p>
<cd-row type="flex" justify="space-between">
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
</cd-row>
<p>space-around：</p>
<cd-row type="flex" justify="space-around">
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
  <cd-col :span="6" >
    <div class="grid-content bg-purple">6</div>
  </cd-col>
</cd-row>
`;