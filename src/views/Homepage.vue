<template>
  <div id="app" class="site-wrap">
    <x-header></x-header>
    <section class="site-homepage-banner">
      <div class="site-homepage-banner__text">
        <h1>Codeages Design<br>一种 Web 设计语言</h1>
        <h2>让你快速搭建自己的中后台应用</h2>
        <button class="cd-btn cd-btn-primary" @click="getMore">了解更多</button>
      </div>
      <div class="site-homepage-banner__pic">
        <img class="site-homepage-banner__boss" src="/static/img/homepage/boss.png" srcset="/static/img/homepage/boss@2x.png 2x" alt="">
        <img class="site-homepage-banner__designer" src="/static/img/homepage/designer.png" srcset="/static/img/homepage/designer@2x.png 2x" alt="">
        <img class="site-homepage-banner__engineer" src="/static/img/homepage/engineer.png" srcset="/static/img/homepage/engineer@2x.png 2x" alt="">
        <img class="site-homepage-banner__component" src="/static/img/homepage/component.png" srcset="/static/img/homepage/component@2x.png 2x" alt="">
        <img class="site-homepage-banner__vase" src="/static/img/homepage/vase.png" srcset="/static/img/homepage/vase@2x.png 2x" alt="">
        <img class="site-homepage-banner__computer" src="/static/img/homepage/computer.png" srcset="/static/img/homepage/computer@2x.png 2x" alt="">
        <img class="site-homepage-banner__desktop" src="/static/img/homepage/desktop.png" srcset="/static/img/homepage/desktop@2x.png 2x" alt="">
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
          <button class="cd-btn cd-btn-primary" @click="getMore">查看详情</button>
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
          <button class="cd-btn cd-btn-primary" @click="getMore">查看详情</button>
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
          <button class="cd-btn cd-btn-primary" @click="getMore">查看详情</button>
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
          © 2017 Codeages Design
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import XHeader from '@/views/Header';

export default {
  name: 'homepage',
  components: {
    XHeader,
  },
  methods: {
    getMore() {
      this.$router.push({ 'name': 'component_index' })
    }
  }
}
</script>
