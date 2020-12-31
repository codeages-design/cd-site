<template>
  <div id="app" class="site-wrap">

    <x-header :index="true"></x-header>
    
    <div class="site-homepage-main">

      <div class="site-homepage-banner__text">
        <div class="site-homepage-banner__flex">
          <div class="title">Codeages Design system</div>
          <div class="desc">阔知设计系统：一个让团队协作规范、高效的全栈式设计体系。</div>
          <div class="link">
            <button class="cd-btn desc-link">入门</button>
            <button class="cd-btn component-link" style="margin-left: 64px;">组件</button>
          </div>
        </div>
        <div>
          <img class="banner" src="/static/img/homepage/banner.png" srcset="/static/img/homepage/banner@2x.png" alt="">
        </div>
      </div>
      
      <section class="site-homepage-feature">
        <!-- <div class="site-homepage-feature__item site-homepage-feature__item__flex"
          :class="feature.direction"
          v-for="feature in features" :key="feature.title">

          <div class="site-homepage-feature__thumb" :class="feature.direction">
            <img alt="" :src="feature.src" :srcset="feature.srcset" />
          </div>

          <div class="site-homepage-feature__text">
            <div class="site-homepage-feature__title">{{ feature.title }}</div>
            <div class="site-homepage-feature__content">{{ feature.content }}</div>
          </div>
          
        </div> -->

        <div class="site-homepage-feature__item site-homepage-feature__item__flex left" >
          <div class="site-homepage-feature__thumb">
            <img alt="" src="/static/img/homepage/01.png" srcset="/static/img/homepage/01@2x.png 2x" />
          </div>
          <div class="site-homepage-feature__text">
            <div class="site-homepage-feature__title">原则策略</div>
            <div class="site-homepage-feature__content">原则策略能辅助产品和设计团队规范的、严谨的表达内容，让用户使用起来更加愉悦。</div>
          </div>
        </div>
        <div class="site-homepage-feature__item site-homepage-feature__item__flex right" >
          <div class="site-homepage-feature__text">
            <div class="site-homepage-feature__title">设计元素</div>
            <div class="site-homepage-feature__content">元素规范能让设计和前端团队在设计和开发过程中做出专业的决策，搭建出结构合理、高效易用的产品。</div>
          </div>
          <div class="site-homepage-feature__thumb">
            <img alt="" src="/static/img/homepage/02.png" srcset="/static/img/homepage/02@2x.png 2x" />
          </div>
        </div>
        <div class="site-homepage-feature__item site-homepage-feature__item__flex left" >
          <div class="site-homepage-feature__thumb">
            <img alt="" src="/static/img/homepage/03.png" srcset="/static/img/homepage/03@2x.png 2x" />
          </div>
          <div class="site-homepage-feature__text">
            <div class="site-homepage-feature__title">组件Demo</div>
            <div class="site-homepage-feature__content">使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</div>
          </div>
        </div>
        <div class="site-homepage-feature__item site-homepage-feature__item__flex right" >
          <div class="site-homepage-feature__text">
            <div class="site-homepage-feature__title">可复用的资源</div>
            <div class="site-homepage-feature__content">下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计率。</div>
          </div>
          <div class="site-homepage-feature__thumb">
            <img alt="" src="/static/img/homepage/04.png" srcset="/static/img/homepage/04@2x.png 2x" />
          </div>
        </div>

      </section>
      
      <footer class="site-homepage-footer">
        <div class="cd-container">
          <div class="site-homepage-footer__belongto">阔知UED团队和技术团队联合出品</div>
          <div class="site-homepage-footer__copyright">
            © 2019-2020 Codeages Design V1.0.1
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, } from 'vue-property-decorator';

import XHeader from '@/views/header.vue';
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
      src: '/static/img/homepage/01.png',
      srcset: '/static/img/homepage/01@2x.png 2x'
    },
    designer: {
      rotateX: 0,
      rotateY: 0,
      ratio: 4,
      src: '/static/img/homepage/02.png',
      srcset: '/static/img/homepage/02@2x.png 2x'
    },
    engineer: {
      rotateX: 0,
      rotateY: 0,
      ratio: 4,
      src: '/static/img/homepage/03.png',
      srcset: '/static/img/homepage/03@2x.png 2x'
    },
    component: {
      rotateX: 0,
      rotateY: 0,
      ratio: 2,
      src: '/static/img/homepage/04.png',
      srcset: '/static/img/homepage/04@2x.png 2x'
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
  
  features: any = [
    {
      direction: 'left',
      title: '原则策略',
      content: '原则策略能辅助产品和设计团队规范的、严谨的表达内容，让用户使用起来更加愉悦。',
      src: '/static/img/homepage/01.png',
      srcset: "/static/img/homepage/01@2x.png 2x"
    },
    {
      direction: 'right',
      title: '设计元素',
      content: '元素规范能让设计和前端团队在设计和开发过程中做出专业的决策，搭建出结构合理、高效易用的产品。',
      src: '/static/img/homepage/02.png',
      srcset: "/static/img/homepage/02@2x.png 2x"
    },
    {
      direction: 'left',
      title: '组件Demo',
      content: '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。',
      src: '/static/img/homepage/03.png',
      srcset: "/static/img/homepage/03@2x.png 2x"
    },
    {
      direction: 'right',
      title: '可复用的资源',
      content: '下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计率。',
      src: '/static/img/homepage/04.png',
      srcset: "/static/img/homepage/04@2x.png 2x"
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
  
}
</script>
