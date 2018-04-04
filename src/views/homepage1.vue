<template>
  <div id="app" class="site-wrap">
    <x-header></x-header>
    <div class="site-homepage-main">
      <section class="site-homepage-banner">
        <div class="site-homepage-banner__text">
          <h1>Codeages Design<br>一种 Web 设计语言</h1>
          <h2>让你快速搭建自己的中后台应用</h2>
          <button class="cd-btn cd-btn-primary cd-btn-lg" @click="getMore">了解更多</button>
        </div>
        <div class="site-homepage-banner__pic" 
          :style="{transform: `perspective(${banner.global.perspective}px) rotateX(${banner.global.rotateY}deg) rotateY(${banner.global.rotateX}deg)`}" 
          @mousemove="mousemove" 
          @mouseleave="mouseleave" 
          ref="banner">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${item.rotateX}, ${item.rotateY}`}"
            :class="[{active: isActive, prohibit: isProhibit}, `site-homepage-banner__${index}`]" 
            :src="item.src"
            :srcset="item.srcset" alt="" v-for="(item, index) in banner" :key="index" :data-a="banner[item]" v-if="index != 'global'">
        </div>
      </section>
      <section class="site-homepage-feature">
        <div class="site-homepage-feature__item" :class="{middle: index == 1}" v-for="(item, index) in feature" :key="index">
          <div class="site-homepage-feature__thumb">
            <img :src="item.src" 
              :srcset="item.srcset" alt="">
          </div>
          <div class="site-homepage-feature__title">
            {{ item.title }}
          </div>
          <div class="site-homepage-feature__content">
            {{ item.content }}
          </div>
          <div class="site-homepage-feature__action">
            <button class="cd-btn cd-btn-primary cd-btn-lg" @click="getMore">查看详情</button>
          </div>
        </div>
      </section>
      <footer class="site-homepage-footer">
        <div class="cd-container">
          <!-- <ul class="site-homepage-footer__nav">
            <li><a href="">隐私协议</a></li>
            <li><a href="">下载文档</a></li>
          </ul> -->
          <div class="site-homepage-footer__copyright">
            © 2017-2018 Codeages Design v{{version}} 阔知用户体验技术团队
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, } from 'vue-property-decorator';

import XHeader from '@/views/Header.vue';
import { version } from 'codeages-design/package.json';

@Component({
  name: 'homepage',
  components: {
    XHeader
  }
})
export default class extends Vue {
  // data
  version: string = version;
  banner: any = {
    global: {
      rotateX: 0,
      rotateY: 0,
      perspective: 250,
      ratio: 1.5,
    },
    boss: {
      rotateX: 0,
      rotateY: 0,
      ratio: -3,
      src: '/static/img/homepage/boss.png',
      srcset: '/static/img/homepage/boss@2x.png 2x'
    },
    designer: {
      rotateX: 0,
      rotateY: 0,
      ratio: 4,
      src: '/static/img/homepage/designer.png',
      srcset: '/static/img/homepage/designer@2x.png 2x'
    },
    engineer: {
      rotateX: 0,
      rotateY: 0,
      ratio: 4,
      src: '/static/img/homepage/engineer.png',
      srcset: '/static/img/homepage/engineer@2x.png 2x'
    },
    component: {
      rotateX: 0,
      rotateY: 0,
      ratio: 2,
      src: '/static/img/homepage/component.png',
      srcset: '/static/img/homepage/component@2x.png 2x'
    },
    vase: {
      rotateX: 0,
      rotateY: 0,
      ratio: -3,
      src: '/static/img/homepage/vase.png',
      srcset: '/static/img/homepage/vase@2x.png 2x'
    },
    computer: {
      rotateX: 0,
      rotateY: 0,
      ratio: 3,
      src: '/static/img/homepage/computer.png',
      srcset: '/static/img/homepage/computer@2x.png 2x'
    },
    desktop: {
      rotateX: 0,
      rotateY: 0,
      ratio: 1,
      src: '/static/img/homepage/desktop.png',
      srcset: '/static/img/homepage/desktop@2x.png 2x'
    },
  };
  
  feature: any = [
    {
      title: '帮助产品经理搭建原型',
      content: '了解设计指南，帮助产品经理搭建逻辑清晰，结构合理且高效易用的产品。',
      src: '/static/img/homepage/feature_1.png',
      srcset: "/static/img/homepage/feature_1@2x.png 2x"
    },
    {
      title: '帮助开发复用代码和组件元素',
      content: '使用组件演示快速体验交互细节，使用前端框架封装的代码帮助快速开发。',
      src: '/static/img/homepage/feature_2.png',
      srcset: "/static/img/homepage/feature_2@2x.png 2x"
    },
    {
      title: '帮助设计减少重复劳动力',
      content: '下载相关资源快速搭建页面原型或高保真视觉稿，提升产品设计效率。',
      src: '/static/img/homepage/feature_3.png',
      srcset: "/static/img/homepage/feature_3@2x.png 2x"
    },
  ];

  isProhibit: boolean = false;
  isActive: boolean = false

  created() {
    setTimeout(() => {
      this.isActive = true
    }, 500);

    setTimeout(() => {
      this.isProhibit = true;
    }, 1400)
  }

  mousemove(event) {
    const e = event || window.event;
    const bannerEl: any = this.$refs['banner'];
    const rect = bannerEl.getBoundingClientRect();

    const middlePoint= {
      x: parseInt(rect.x + rect.width / 2),
      y: parseInt(rect.y + rect.height / 2)
    };

    const mouse = {
      x: parseFloat(e.clientX),
      y: parseFloat(e.clientY)
    };

    function getRotateX(ratio: number) {
      return ((middlePoint.x - mouse.x) / (middlePoint.x - rect.x) * ratio).toFixed(2);
    }

    function getRotateY(ratio: number) {
      return ((mouse.y - middlePoint.y) / (middlePoint.y - rect.y) * ratio).toFixed(2);
    }

    Object.keys(this.banner).map((item) => {
      this.banner[item].rotateX = getRotateX(this.banner[item].ratio);
      this.banner[item].rotateY = getRotateY(this.banner[item].ratio);
    })
  }

  mouseleave() {
    this.banner.global.rotateX = 0;
    this.banner.global.rotateY = 0;
  }

  getMore() {
    this['$router'].push({ 'name': 'component' });
  }
}
</script>
