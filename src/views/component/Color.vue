<template>
  <div>
    <div class="site-content-title">色彩</div>
    <div class="site-content-des">
      颜色是设计语言中非常重要的一块内容，因为不同颜色能够给用户带来截然不同的心里感知，
      我们在 Codeages Design 引入了颜色层级的算法，只需要提供自己的主色调，就能够自动生成对应的颜色层级以供使用。
      另外，我们提供了默认的颜色色板，所有色板都是根据自然界的颜色生成，更是符合“WCAG 2.0”对可视化的要求。
    </div>
    <div class="cd-row">
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-primary" :style="{background: primaryColors[5].color}">
            <span class="text-left-top">主色调（Primary）</span>
            <span class="text-right-bottom">{{ primaryColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in primaryColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8 cd-md-offset-4" style="margin-top: 120px;">
        <chrome-picker :value="baseColor.primary" @input="updateValue" style="margin: 0 auto;"></chrome-picker>
      </div>
    </div>
    <div class="cd-row">
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-forest">
            <span class="text-left-top">森林绿（Forest）</span>
            <span class="text-right-bottom">{{ forestColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in forestColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-ocean">
            <span class="text-left-top">海洋蓝（Ocean）</span>
            <span class="text-right-bottom">{{ oceanColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in oceanColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-rose">
            <span class="text-left-top">玫瑰红（Rose）</span>
            <span class="text-right-bottom">{{ roseColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in roseColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-flame">
            <span class="text-left-top">烈焰橙（Flame）</span>
            <span class="text-right-bottom">{{ flameColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in flameColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-bud">
            <span class="text-left-top">新芽绿（Bud）</span>
            <span class="text-right-bottom">{{ budColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in budColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-lemon">
            <span class="text-left-top">柠檬黄（Lemon）</span>
            <span class="text-right-bottom">{{ lemonColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in lemonColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-violet">
            <span class="text-left-top">罗兰紫（Violet）</span>
            <span class="text-right-bottom">{{ violetColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in violetColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-sakura">
            <span class="text-left-top">樱花粉（Sakura）</span>
            <span class="text-right-bottom">{{ sakuraColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in sakuraColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>
      <div class="cd-md-8">
        <div class="color-palette">
          <div class="palette-gray">
            <span class="text-left-top">中性灰（Gray）</span>
            <span class="text-right-bottom">{{ grayColors[5].color }}</span>
          </div>
          <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in grayColors" :key="index">
            <span class="text-left">{{color.name}}</span>
            <span class="text-right">{{ color.color }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color';
import * as colorMix from '@/assets/js/color-mix';

const baseColor = {
  primary: {
    hex: '#14954B'
  },
  forest: {
    hex: '#14954B'
  },
  ocean: {
    hex: '#177ED7'
  },
  rose: {
    hex: '#E80404'
  },
  flame: {
    hex: '#F46300'
  },
  bud: {
    hex: '#82A01C'
  },
  lemon: {
    hex: '#FDB500'
  },
  violet: {
    hex: '#744EA1'
  },
  sakura: {
    hex: '#DD3E8F'
  },
  gray: {
    hex: '808080'
  }
};

const palette = [
  {
    type: 'tint',
    name: '50',
    value: 0.88
  },
  {
    type: 'tint',
    name: '100',
    value: 0.64
  },
  {
    type: 'tint',
    name: '200',
    value: 0.48
  },
  {
    type: 'tint',
    name: '300',
    value: 0.32
  },
  {
    type: 'tint',
    name: '400',
    value: 0.16
  },
  {
    type: 'tint',
    name: '500',
    value: 0
  },
  {
    type: 'shade',
    name: '600',
    value: 0.16
  },
  {
    type: 'shade',
    name: '700',
    value: 0.32
  },
  {
    type: 'shade',
    name: '800',
    value: 0.48
  },
  {
    type: 'shade',
    name: '900',
    value: 0.64
  },
]

export default {
  components: {
    'chrome-picker': Chrome
  },
  data() {
    return {
      baseColor: baseColor,
      primaryColors: [],
      forestColors: [],
      oceanColors: [],
      roseColors: [],
      flameColors: [],
      budColors: [],
      lemonColors: [],
      violetColors: [],
      sakuraColors: [],
      grayColors: [],
    }
  },
  created() {
    this.primaryColors = this.colorMix(baseColor.primary.hex);
    this.forestColors = this.colorMix(baseColor.forest.hex);
    this.oceanColors = this.colorMix(baseColor.ocean.hex);
    this.roseColors = this.colorMix(baseColor.rose.hex);
    this.flameColors = this.colorMix(baseColor.flame.hex);
    this.budColors = this.colorMix(baseColor.bud.hex);
    this.lemonColors = this.colorMix(baseColor.lemon.hex);
    this.violetColors = this.colorMix(baseColor.violet.hex);
    this.sakuraColors = this.colorMix(baseColor.sakura.hex);
    this.grayColors = this.colorMix(baseColor.gray.hex);
  },
  methods: {
    updateValue(color) {
      // console.log(color, 'updateValue');

      this.primaryColors = this.colorMix(color.hex);
    },
    colorMix(hex) {
      const colors = [];
      palette.map((item) => {
        let color = colorMix[item.type](hex.replace('#', ''), item.value).toUpperCase();
        colors.push({
          name: item.name,
          color: color
        });
      });
      // console.log(colors, 'colorMix');
      return colors;
    }
  }
}
</script>

<style lang="less">
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
