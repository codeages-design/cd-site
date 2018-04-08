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
    console.log(Math.ceil(this.colorArr.length / 2), 'colorArr')
    return Math.ceil(this.colorArr.length / 2);
  }
}
</script>

<style lang="less" scoped>
@import '~codeages-design/src/less/variables.less';
@import '~codeages-design/src/less/mixins.less';

.color-palette {
	position: relative;
	margin: 0 16px 40px 0px;
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
		padding: 13px 16px;
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

.palette-levels(@brand-primary, primary);
.palette-levels(@color-forest, forest);
.palette-levels(@color-ocean, ocean);
.palette-levels(@color-rose, rose);
.palette-levels(@color-flame, flame);
.palette-levels(@color-bud, bud);
.palette-levels(@color-lemon, lemon);
.palette-levels(@color-violet, violet);
.palette-levels(@color-sakura, sakura);
.palette-levels(@color-gray, gray);
</style>


