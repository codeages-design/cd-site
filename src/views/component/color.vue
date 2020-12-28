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
        <x-color-item
          name="primary"
          :title="baseColor['primary'].name"
          :colorArr="colors['primary']"
        ></x-color-item>
      </div>
      <div class="cd-md-8 cd-md-offset-4" style="margin-top: 120px;">
        <chrome-picker 
          :value="baseColor.primary" 
          @input="updateValue" 
          style="margin: 0 auto;"
          ></chrome-picker>
      </div>
    </div>
    <div class="cd-row">
      <div class="cd-md-8" 
        v-for="(item, itemIndex) in colors" 
        :key="itemIndex" 
        v-if="itemIndex !='primary'">
        <x-color-item
          :name="itemIndex"
          :title="baseColor[itemIndex].name"
          :colorArr="item"
        ></x-color-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Chrome } from 'vue-color';
import * as colorMix from '@/utils/color-mix';
import XColorItem from '@/components/color-item.vue';

const baseColor = {
  primary: {
    name: '主色调（Primary）',
    hex: '#14954B'
  },
  forest: {
    name: '森林绿（Forest）',
    hex: '#14954B'
  },
  ocean: {
    name: '海洋蓝（Ocean）',
    hex: '#177ED7'
  },
  rose: {
    name: '玫瑰红（Rose）',
    hex: '#E80404'
  },
  flame: {
    name: '烈焰橙（Flame）',
    hex: '#F46300'
  },
  bud: {
    name: '新芽绿（Bud）',
    hex: '#82A01C'
  },
  lemon: {
    name: '柠檬黄（Lemon）',
    hex: '#FDB500'
  },
  violet: {
    name: '罗兰紫（Violet）',
    hex: '#744EA1'
  },
  sakura: {
    name: '樱花粉（Sakura）',
    hex: '#DD3E8F'
  },
  gray: {
    name: '中性灰（Gray）',
    hex: '808080'
  }
};

const palette = [
  {
    type: 'tint',
    key: '50',
    value: 0.88
  },
  {
    type: 'tint',
    key: '100',
    value: 0.64
  },
  {
    type: 'tint',
    key: '200',
    value: 0.48
  },
  {
    type: 'tint',
    key: '300',
    value: 0.32
  },
  {
    type: 'tint',
    key: '400',
    value: 0.16
  },
  {
    type: 'tint',
    key: '500',
    value: 0
  },
  {
    type: 'shade',
    key: '600',
    value: 0.16
  },
  {
    type: 'shade',
    key: '700',
    value: 0.32
  },
  {
    type: 'shade',
    key: '800',
    value: 0.48
  },
  {
    type: 'shade',
    key: '900',
    value: 0.64
  },
]

@Component({
  components: {
    'chrome-picker': Chrome,
    XColorItem
  }
})
export default class extends Vue {
  baseColor: any = baseColor;
  colors: any = {};
  
  beforeCreate () {
    this.$nextTick().then(() => {
      console.log(2122)
    })
  }
  created() {
    for (let color in baseColor) {
      this.$set(this.colors, color, this.colorMix(baseColor[color].hex));
    }

    this.$nextTick().then(() => {
      console.log(222)
    })
  }

  updateValue(color) {
    this.$set(this.colors, 'primary', this.colorMix(color.hex));
  }
  
  colorMix(hex) {
    const colors = [];
    palette.map((item) => {
      let color = colorMix[item.type](hex.replace('#', ''), item.value).toUpperCase();
      colors.push({
        key: item.key,
        color: color
      });
    });
    return colors;
  }
}
</script>