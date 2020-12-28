<template>
  <div class="color-palette">
    <div :class="`palette-${name}`" :style="{background: colorArr[middleIndex].color}">
      <span class="text-left-top">{{ title }}</span>
      <span class="text-right-bottom">{{ colorArr[middleIndex].color }}</span>
    </div>
    <div class="palette-color" 
      :class="index < middleIndex ? 'cd-dark-major': 'cd-light-major'" 
      :style="{background: item.color}" 
      v-for="(item, index) in colorArr" 
      :key="index">
      <span class="text-left">{{item.key}}</span>
      <span class="text-right">{{ item.color }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({
    type: Array,
    default: () => {
      return []
    }
  })
  colorArr: any;

  @Prop()
  name: string;

  @Prop()
  title: string;

  get middleIndex():number {
    return Math.ceil(this.colorArr.length / 2);
  }
}
</script>

<style lang="less" scoped>
@import '~codeages-design/src/less/variables.less';
@import '~codeages-design/src/less/mixins.less';
@import '../variables.less';

.color-palette {
	position: relative;
	margin: 40px 64px 0px 0px;
	font-size: 14px;
	line-height: 14px;
	color: white;
	border-radius: 4px;
	.cd-transition;
	.text-left-top {
		position: absolute;
		top: 16px;
		left: 16px;
	}
	.text-right-bottom {
		position: absolute;
		top: 48px;
		right: 16px;
	}
	.text-left {
		display: inline-block;
		padding: 13px 16px;
	}
	.text-right {
		opacity: 0;
		float: right;
		display: inline-block;
    // padding: 13px 16px;
    padding: 13px 14px;
		.cd-transition;
	}
	& div:last-child {
		border-radius: 0 0 4px 4px;
	}
}

.palette-color {
  .cd-transition;
  &:hover {
    transform: scale(1.03);
    .cd-box-shadow(24px);
    .cd-transition;
    .text-right {
      opacity: 1;
      .cd-transition;
    }
  }
}

.palette-levels(@color, @key) {
	.palette-@{key} {
		height: 80px;
		background: @color;
		border-radius: 4px 4px 0 0;
	}
}


.palette-levels(@color-red, red);
.palette-levels(@color-orange, orange);
.palette-levels(@color-chrome-yellow, chromeYellow);
.palette-levels(@color-yellow, yellow);
.palette-levels(@color-fluorescent-green, fluorescentGreen);
.palette-levels(@color-green, green);
.palette-levels(@color-cyan, cyan);
.palette-levels(@color-blue, blue);
.palette-levels(@color-dark-blue, darkBlue);
.palette-levels(@color-blue-purple, bluePurple);
.palette-levels(@color-purple, purple);
.palette-levels(@color-magenta, magenta);


</style>


