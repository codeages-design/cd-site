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
          :style="{transform: `perspective(${banner.perspective}px) rotateX(${banner.rotateX}deg) rotateY(${banner.rotateY}deg)`}" 
          @mousemove="mousemove" @mouseleave="mouseleave" ref="banner">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.boss.rotateX}, ${banner.boss.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__boss" src="/static/img/homepage/boss.png" srcset="/static/img/homepage/boss@2x.png 2x" alt="">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.designer.rotateX}, ${banner.designer.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__designer" src="/static/img/homepage/designer.png" srcset="/static/img/homepage/designer@2x.png 2x" alt="">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.engineer.rotateX}, ${banner.engineer.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__engineer" src="/static/img/homepage/engineer.png" srcset="/static/img/homepage/engineer@2x.png 2x" alt="">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.component.rotateX}, ${banner.component.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__component" src="/static/img/homepage/component.png" srcset="/static/img/homepage/component@2x.png 2x" alt="">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.vase.rotateX}, ${banner.vase.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__vase" src="/static/img/homepage/vase.png" srcset="/static/img/homepage/vase@2x.png 2x" alt="">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.computer.rotateX}, ${banner.computer.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__computer" src="/static/img/homepage/computer.png" srcset="/static/img/homepage/computer@2x.png 2x" alt="">
          <img :style="{transform: `matrix(1, 0, 0, 1, ${banner.desktop.rotateX}, ${banner.desktop.rotateY}`}"
            :class="{active: isActive, prohibit: isProhibit}" class="site-homepage-banner__desktop" src="/static/img/homepage/desktop.png" srcset="/static/img/homepage/desktop@2x.png 2x" alt="">
        </div>
      </section>
      <section class="site-homepage-feature">
        <div class="site-homepage-feature__item">
          <div class="site-homepage-feature__thumb">
            <img src="/static/img/homepage/feature_1.png" srcset="/static/img/homepage/feature_1@2x.png 2x" alt="">
          </div>
          <div class="site-homepage-feature__title">
            帮助产品经理搭建原型
          </div>
          <div class="site-homepage-feature__content">
            了解设计指南，帮助产品经理搭建逻辑清晰，结构合理且高效易用的产品。
          </div>
          <div class="site-homepage-feature__action">
            <button class="cd-btn cd-btn-primary cd-btn-lg" @click="getMore">查看详情</button>
          </div>
        </div>
        <div class="site-homepage-feature__item" style="margin: 0 180px;">
          <div class="site-homepage-feature__thumb">
            <img src="/static/img/homepage/feature_2.png" srcset="/static/img/homepage/feature_2@2x.png 2x" alt="">
          </div>
          <div class="site-homepage-feature__title">
            帮助开发复用代码和组件元素
          </div>
          <div class="site-homepage-feature__content">
            使用组件演示快速体验交互细节，使用前端框架封装的代码帮助快速开发。
          </div>
          <div class="site-homepage-feature__action">
            <button class="cd-btn cd-btn-primary cd-btn-lg" @click="getMore">查看详情</button>
          </div>
        </div>
        <div class="site-homepage-feature__item">
          <div class="site-homepage-feature__thumb">
            <img src="/static/img/homepage/feature_3.png" srcset="/static/img/homepage/feature_3@2x.png 2x" alt="">
          </div>
          <div class="site-homepage-feature__title">
            帮助设计减少重复劳动力
          </div>
          <div class="site-homepage-feature__content">
            下载相关资源快速搭建页面原型或高保真视觉稿，提升产品设计效率。
          </div>
          <div class="site-homepage-feature__action">
            <button class="cd-btn cd-btn-primary cd-btn-lg" @click="getMore">查看详情</button>
          </div>
        </div>
      </section>
      <footer class="site-homepage-footer">
        <div class="cd-container">
          <ul class="site-homepage-footer__nav">
            <li><a href="">隐私协议</a></li>
            <li><a href="">下载文档</a></li>
          </ul>
          <div class="site-homepage-footer__copyright">
            © 2017 Codeages Design 阔知用户体验技术团队
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import XHeader from '@/views/Header';

export default {
  name: 'homepage',
  components: {
    XHeader,
  },
  data() {
    return {
      banner: {
        rotateX: 0,
        rotateY: 0,
        perspective: 250,
        ratio: 1.5,
        boss: {
          rotateX: 0,
          rotateY: 0,
          ratio: -3,
        },
        designer: {
          rotateX: 0,
          rotateY: 0,
          ratio: 4,
        },
        engineer: {
          rotateX: 0,
          rotateY: 0,
          ratio: 4,
        },
        component: {
          rotateX: 0,
          rotateY: 0,
          ratio: 2,
        },
        vase: {
          rotateX: 0,
          rotateY: 0,
          ratio: -3,
        },
        computer: {
          rotateX: 0,
          rotateY: 0,
          ratio: 3,
        },
        desktop: {
          rotateX: 0,
          rotateY: 0,
          ratio: 1,
        },
      },
      isProhibit: false,
      isActive: false
    }
  },
  created() {
    setTimeout(() => {
      this.isActive = true
    }, 500);

    setTimeout(() => {
      this.isProhibit = true;
    }, 1400)
  },
  methods: {
    mousemove(event) {
      const e = event || window.event;
      const rect = this.$refs['banner'].getBoundingClientRect();

      const middlePoint = {
        x: parseInt(rect.x + rect.width / 2),
        y: parseInt(rect.y + rect.height / 2)
      };

      const mouse = {
        x: e.clientX,
        y: e.clientY
      };

      function getRotateX(ratio) {
        return parseFloat((middlePoint.x - mouse.x) / (middlePoint.x - rect.x) * ratio).toFixed(2);
      }

      function getRotateY(ratio) {
        return parseFloat((mouse.y - middlePoint.y) / (middlePoint.y - rect.y) * ratio).toFixed(2);
      }

      this.banner.rotateX = getRotateY(this.banner.ratio);
      this.banner.rotateY = getRotateX(this.banner.ratio);

      this.banner.boss.rotateX = getRotateX(this.banner.boss.ratio);
      this.banner.boss.rotateY = getRotateY(this.banner.boss.ratio);

      this.banner.designer.rotateX = getRotateX(this.banner.designer.ratio);
      this.banner.designer.rotateY = getRotateY(this.banner.designer.ratio);

      this.banner.engineer.rotateX = getRotateX(this.banner.engineer.ratio);
      this.banner.engineer.rotateY = getRotateY(this.banner.engineer.ratio);

      this.banner.component.rotateX = getRotateX(this.banner.component.ratio);
      this.banner.component.rotateY = getRotateY(this.banner.component.ratio);

      this.banner.vase.rotateX = getRotateX(this.banner.vase.ratio);
      this.banner.vase.rotateY = getRotateY(this.banner.vase.ratio);

      this.banner.computer.rotateX = getRotateX(this.banner.computer.ratio);
      this.banner.computer.rotateY = getRotateY(this.banner.computer.ratio);

      this.banner.desktop.rotateX = getRotateX(this.banner.desktop.ratio);
      this.banner.desktop.rotateY = getRotateY(this.banner.desktop.ratio);

    },
    mouseleave() {
      this.banner.rotateX = 0;
      this.banner.rotateY = 0;
    },
    getMore() {
      this.$router.push({ 'name': 'component_index' })
    }
  }
}
</script>
