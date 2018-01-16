<template>
  <div>
    <div class="site-content-title">色彩</div>
    <div class="site-content-des">
      颜色是设计语言中非常重要的一块内容，因为不同颜色能够给用户带来截然不同的心里感知，
      我们在 Codeages Design 中定义了主色调以及场景色，所谓场景色，就是指颜色本身的属性能够唤起用户自主意识对颜色的感受，
      例如红色对于用户来说，意味着“危险、错误”，而绿色对于用户来说，则意味着“安全、成功”，通过不同场景色的引入，能够在不同交互场景下通过颜色快速表达意图，从而减少用户理解成本。
    </div>
    <div class="cd-row">
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-primary" :style="{background: primaryColors[5].color}">
	    		<span class="text-left-top">主色调（Primary）</span>
	    		<span class="text-right-bottom">{{ primaryColors[5].color }}</span>
	    	</div>
	      <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in primaryColors" :key="index">
	    		<span class="text-left">P {{color.name}}</span>
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
	    	<div class="palette-info">
	    		<span class="text-left-top">信息色（Info）</span>
	    		<span class="text-right-bottom">{{ infoColors[5].color }}</span>
	    	</div>
	    	<div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in infoColors" :key="index">
	    		<span class="text-left">I {{color.name}}</span>
	    		<span class="text-right">{{ color.color }}</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-danger">
	    		<span class="text-left-top">危险色（Danger）</span>
	    		<span class="text-right-bottom">{{ dangerColors[5].color }}</span>
	    	</div>
	    	<div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in dangerColors" :key="index">
	    		<span class="text-left">D {{color.name}}</span>
	    		<span class="text-right">{{ color.color }}</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-warning">
	    		<span class="text-left-top">警告色（Warning）</span>
	    		<span class="text-right-bottom">{{ warningColors[5].color }}</span>
	    	</div>
	    	<div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in warningColors" :key="index">
	    		<span class="text-left">W {{color.name}}</span>
	    		<span class="text-right">{{ color.color }}</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-success">
	    		<span class="text-left-top">成功色（Success）</span>
	    		<span class="text-right-bottom">{{ successColors[5].color }}</span>
	    	</div>
	    	<div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in successColors" :key="index">
	    		<span class="text-left">S {{color.name}}</span>
	    		<span class="text-right">{{ color.color }}</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-neutral">
	    		<span class="text-left-top">中性色（Neutral)</span>
	    		<span class="text-right-bottom">{{ neutralColors[5].color }}</span>
	    	</div>
        <div class="palette-color" :class="index < 5 ? 'cd-dark-major': 'cd-light-major'" :style="{background: color.color}" v-for="(color, index) in neutralColors" :key="index">
	    		<span class="text-left">N {{color.name}}</span>
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
  'primary': {
    hex: '#43bc60'
  },
  'info': {
    hex: '#278bf5',
  },
  'danger': {
    hex: '#ed3e3e',
  },
  'warning': {
    hex: 'ffa51f',
  },
  'success': {
    hex: '#43bc60'
  },
  'neutral': {
    hex: '#808080'
  }
};

const palette = [
  {
    type: 'tint',
    name: '50',
    value: 0.8
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
      infoColors: [],
      dangerColors: [],
      warningColors: [],
      successColors: [],
      neutralColors: [],
    }
  },
  created() {
    this.primaryColors = this.colorMix(baseColor.primary.hex);
    this.infoColors = this.colorMix(baseColor.info.hex);
    this.dangerColors = this.colorMix(baseColor.danger.hex);
    this.warningColors = this.colorMix(baseColor.warning.hex);
    this.successColors = this.colorMix(baseColor.success.hex);
    this.neutralColors = this.colorMix(baseColor.neutral.hex);
  },
  methods: {
    updateValue(color) {
      console.log(color, 'updateValue');

      this.primaryColors = this.colorMix(color.hex);
    },
    colorMix(hex) {
      const colors = [];
      palette.map((item) => {
        let color = colorMix[item.type](hex.replace('#', ''), item.value);
        colors.push({
          name: item.name,
          color: color
        });
      });
      console.log(colors, 'colorMix');
      return colors;
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/less/variables.less';
@import '~@/assets/less/mixins.less';

.color-palette {
	position: relative;
	margin: 0 16px 40px 0px;
	font-size: 14px;
	line-height: 14px;
	color: white;
	border-radius: 4px;
	.site-transition;
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
		.site-transition;
	}
	& div:last-child {
		border-radius: 0 0 4px 4px;
	}
}

.palette-color {
  .site-transition;
  &:hover {
    transform: scale(1.03);
    .site-box-shadow(24px);
    .site-transition;
    .text-right {
      opacity: 1;
      .site-transition;
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

.palette-levels(@site-primary, primary);
.palette-levels(@site-info, info);
.palette-levels(@site-danger, danger);
.palette-levels(@site-warning, warning);
.palette-levels(@site-success, success);
.palette-levels(@site-neutral, neutral);
</style>
