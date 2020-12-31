<template>
  <div>
    <div class="el-content-title">Color 颜色</div>
    <div class="hr"></div>
    <div class="el-content-des">
      颜色可以有目的地展示产品的功能、层次和风格。色彩体系的搭建遵循适度、表意、无障碍的原则。
    </div>
    <div class="el-content-subtitle">色彩模型</div>
    <div class="el-content-subdes">
      我们将基于 HSB 色彩模型来进行色板体系的搭建。HSB 即色相、饱和度、明度（Hue, Saturation, Brightness），
      该色彩模型接近于人类感觉颜色的方式，具有较强的感知度。
    </div>
    <div class="el-content-subtitle">基础色板</div>
    <div class="el-content-subdes">
      基础色板共96个颜色，包含 12 个主色及其衍生色。基础色板基于 HSB 模型制定，遵循适度、无障碍的原则。
    </div>

    <div class="platte-color-container cd-clearfix">
      <div class="platte-color"
      :key="index"
      v-for="(item,index) in colorList">
        <div class="platte-color-title"
        :style="{background: '#ffffff'}">
          <span class="text-top el-content-subtitle">{{ item.title }}</span>
          <span class="text-middle el-content-subdes">{{ item.title_en }}</span>
          <span class="text-bottom el-content-subdes">{{ item.desc }}</span>
        </div>
        <div class="platte-colors"
        :key="index"
        v-for="(color,index) in item.colors"
        :style="{background: color.hex}"
        :class="index < (Math.ceil(item.colors.length / 2)) ? 'cd-dark-major': 'cd-light-major'" >
          <span class="text-top el-content-subtitle">{{ color.colorName }}</span>
          <span class="text-bottom el-content-subtitle">{{ color.hex }}</span>
        </div>
      </div>
    </div>

    <div class="el-content-subtitle">中性色板</div>
    <div class="el-content-subdes">
      中性色板包含了黑白灰。根据使用场景，中性色被定义为 4 类：文字类、边框及横线、色块背景、中性控件及图标。中性色的定义需要考虑文字及背景搭配的视觉效果。
    </div>
    <img src="../../../static/img/pc-element-layout/color02.png" alt="" class="color">

    <div class="el-content-subtitle">PC端产品品牌色（主色调）</div>
    <div class="el-content-subdes">
      绿色象征着自然生机，积极创新。我们从色彩模型中选取了绿色中的G3：#46c37b 作为主色调。
    </div>
    <img src="../../../static/img/pc-element-layout/color03.png" alt="" class="color color03 left">
    <img src="../../../static/img/pc-element-layout/color04.png" alt="" class="color left">
    <div class="cd-clearfix"></div>

    <div class="el-content-subtitle">功能色（辅助色）</div>
    <div class="el-content-subdes">
      功能色为界面设计中的特殊场景色，主要为成功、失败、警告、链接等。遵循适度、无障碍的原则，
      同时考量视觉呈现效果，我们定义了 4 种主要功能色，使其与白色的对比度满足大于 3。
    </div>
    <img src="../../../static/img/pc-element-layout/color05.png" alt="" class="color">

  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

export default {
  data () {
    return {
      colorList: {
        red: {
          title: '红',
          title_en: 'Red',
          desc: '斗志、奔放',
          colors: [
            {colorName: 'CY1',
              hex: '#FFF1F1',},
            {colorName: 'CY2',
              hex: '#FEB0B0',},
            {colorName: 'CY3',
              hex: '#FF7979',},
            {colorName: 'CY4',
              hex: '#FE4040',},
            {colorName: 'CY5',
              hex: '#F02626',},
            {colorName: 'CY6',
              hex: '#D91E1E',},
            {colorName: 'CY7',
              hex: '#B41212',},
            {colorName: 'CY8',
              hex: '#6D0C0C',},
          ]
        },
        orange: {
          title: '橙',
          title_en: 'Orange',
          desc: '温暖、欢快',
          colors: [
            {colorName: 'O1',
              hex: '#FFF6F1',},
            {colorName: 'O2',
              hex: '#FED1B6',},
            {colorName: 'O3',
              hex: '#FDAC7C',},
            {colorName: 'O4',
              hex: '#FB8D4D',},
            {colorName: 'O5',
              hex: '#FE7728',},
            {colorName: 'O6',
              hex: '#E36115',},
            {colorName: 'O7',
              hex: '#BA4A07',},
            {colorName: 'O8',
              hex: '#853201',},
          ]
        },
        ChromeYellow: {
          title: '铭黄',
          title_en: 'Chrome Yellow',
          desc: '活力、积极',
          colors: [
            {colorName: 'CY1',
              hex: '#FFF9EC',},
            {colorName: 'CY2',
              hex: '#FFE6B1',},
            {colorName: 'CY3',
              hex: '#FFD273',},
            {colorName: 'CY4',
              hex: '#FBBC38',},
            {colorName: 'CY5',
              hex: '#EFAB1F',},
            {colorName: 'CY6',
              hex: '#D9970C',},
            {colorName: 'CY7',
              hex: '#AE7909',},
            {colorName: 'CY8',
              hex: '#7F5601',},
          ]
        },
        yellow: {
          title: '黄',
          title_en: 'Yellow',
          desc: '出生、阳光',
          colors: [
            {colorName: 'Y1',
              hex: '#FCFAE8',},
            {colorName: 'Y2',
              hex: '#FFF8B8',},
            {colorName: 'Y3',
              hex: '#FDF183',},
            {colorName: 'Y4',
              hex: '#FFEB38',},
            {colorName: 'Y5',
              hex: '#F3DD21',},
            {colorName: 'Y6',
              hex: '#E1CB0D',},
            {colorName: 'Y7',
              hex: '#C1AF0C',},
            {colorName: 'Y8',
              hex: '#7F7201',},
          ]
        },
        FluorescentGreen: {
          title: '荧光绿',
          title_en: 'FluorescentGreen',
          desc: '自然、生机',
          colors: [
            {colorName: 'FG1',
              hex: '#F7FFF3',},
            {colorName: 'FG2',
              hex: '#E2FAD3',},
            {colorName: 'FG3',
              hex: '#CDF7B1',},
            {colorName: 'FG4',
              hex: '#9BE16E',},
            {colorName: 'FG5',
              hex: '#7FC850',},
            {colorName: 'FG6',
              hex: '#5EB327',},
            {colorName: 'FG7',
              hex: '#489A12',},
            {colorName: 'FG8',
              hex: '#337806',},
          ]
        },
        green: {
          title: '绿',
          title_en: 'Green',
          desc: '健康、创新',
          colors: [
            {colorName: 'G1',
              hex: '#ECFEF4',},
            {colorName: 'G2',
              hex: '#D2FBE4',},
            {colorName: 'G3',
              hex: '#95F1BC',},
            {colorName: 'G4',
              hex: '#65DE98',},
            {colorName: 'G5',
              hex: '#46C37B',},
            {colorName: 'G6',
              hex: '#18B35A',},
            {colorName: 'G7',
              hex: '#0F9D4B',},
            {colorName: 'G8',
              hex: '#0A6E34',},
          ]
        },
        cyan: {
          title: '明青',
          title_en: 'Cyan',
          desc: '希望、坚强',
          colors: [
            {colorName: 'C1',
              hex: '#EEFEFF',},
            {colorName: 'C2',
              hex: '#98EFF7',},
            {colorName: 'C3',
              hex: '#67E6F1',},
            {colorName: 'C4',
              hex: '#3EDFEE',},
            {colorName: 'C5',
              hex: '#2CC5D3',},
            {colorName: 'C6',
              hex: '#11A0AD',},
            {colorName: 'C7',
              hex: '#0D757E',},
            {colorName: 'C8',
              hex: '#08494F',},
          ]
        },
        blue: {
          title: '蓝',
          title_en: 'Blue',
          desc: '包容、科技、普惠',
          colors: [
            {colorName: 'B1',
              hex: '#F0F9FF',},
            {colorName: 'B2',
              hex: '#90D0FE',},
            {colorName: 'B3',
              hex: '#5AB9FF',},
            {colorName: 'B4',
              hex: '#31A1FF',},
            {colorName: 'B5',
              hex: '#0093FF',},
            {colorName: 'B6',
              hex: '#047BD2',},
            {colorName: 'B7',
              hex: '#0965A8',},
            {colorName: 'B8',
              hex: '#054777',},
          ]
        },
        darkBlue: {
          title: '深蓝',
          title_en: 'Dark Blue',
          desc: '探索、钻研',
          colors: [
            {colorName: 'DB1',
              hex: '#EFF5FF',},
            {colorName: 'DB2',
              hex: '#B6D0FF',},
            {colorName: 'DB3',
              hex: '#77A8FF',},
            {colorName: 'DB4',
              hex: '#377FFF',},
            {colorName: 'DB5',
              hex: '#246BE8',},
            {colorName: 'DB6',
              hex: '#1755C0',},
            {colorName: 'DB7',
              hex: '#0F3F92',},
            {colorName: 'DB8',
              hex: '#052864',},
          ]
        },
        bulePurple: {
          title: '蓝紫色',
          title_en: 'Blue Purple',
          desc: '神秘、梦幻',
          colors: [
            {colorName: 'BP1',
              hex: '#F6F0FF',},
            {colorName: 'BP2',
              hex: '#D6BEFF',},
            {colorName: 'BP3',
              hex: '#BB94FF',},
            {colorName: 'BP4',
              hex: '#9E67FD',},
            {colorName: 'BP5',
              hex: '#8139FD',},
            {colorName: 'BP6',
              hex: '#641FDB',},
            {colorName: 'BP7',
              hex: '#4B10B0',},
            {colorName: 'BP8',
              hex: '#33077E',},
          ]
        },
        purple: {
          title: '紫',
          title_en: 'Purple',
          desc: '优雅、浪漫',
          colors: [
            {colorName: 'P1',
              hex: '#F9F0FF',},
            {colorName: 'P2',
              hex: '#E4B5FF',},
            {colorName: 'P3',
              hex: '#D184FD',},
            {colorName: 'P4',
              hex: '#C04FFF',},
            {colorName: 'P5',
              hex: '#AA29F1',},
            {colorName: 'P6',
              hex: '#8E15D1',},
            {colorName: 'P7',
              hex: '#6E0BA5',},
            {colorName: 'P8',
              hex: '#53077E',},
          ]
        },
        magenta: {
          title: '洋红',
          title_en: 'Magenta',
          desc: '明快、感性',
          colors: [
            {colorName: 'M1',
              hex: '#FFEFF8',},
            {colorName: 'M2',
              hex: '#FFAEDD',},
            {colorName: 'M3',
              hex: '#FE7CC8',},
            {colorName: 'M4',
              hex: '#FA42AE',},
            {colorName: 'M5',
              hex: '#DE2592',},
            {colorName: 'M6',
              hex: '#BA1A78',},
            {colorName: 'M7',
              hex: '#8D1059',},
            {colorName: 'M8',
              hex: '#64083E',},
          ]
        },

      }
    };
  },
  
}
</script>

<style lang="less" scoped>
.platte-color-container {
  .platte-color {
    float: left;
    /* width: 160px; */
    width: 14%;
    margin: 40px 1.3% 48px;
    text-align: center;
    .el-content-subtitle,.el-content-subdes {
      margin: 0;
      padding: 0;
    }
    .el-content-subdes {
      color: #999999;
    }
    .cd-light-major {
      .text-top,.text-bottom {
        color: #FFFFFF;
      }
    }

    &-title {
      .text-top,.text-middle,.text-bottom {
        display: block;
        margin: 4px 0;
      }
      .text-bottom {
        margin-bottom: 16px;
      }
    }

    .platte-colors {
      height: 80px;
      .text-top {
        display: block;
        padding-top: 28px;
      }
      .text-bottom {
        display: none;
      }
      
      &:hover {
        transform: scale(1.03);
        .text-top {
          display: block;
          padding-top: 16px;
        }
        .text-bottom {
          display: block;
          padding-top: 4px;
          padding-bottom: 16px;
        }
        transition: all 0.1s;
      }
      &:nth-child(2) {
        border-radius: 8px 8px 0px 0px;
      }
      &:nth-child(9) {
        border-radius: 0px 0px 8px 8px;
      }
    }
  }
}
.left {
  float: left;
}
.color {
  margin-top: 32px;
  margin-bottom: 48px;
}
.color03 {
  margin-right: 32px;
}
</style>>



