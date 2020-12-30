<template>
  <div id="app" class="site-wrap resources" :class="{ 'hide-sidebar': isHideSidebar }">
    <x-header></x-header>
    <div class="title">资源</div>
    <div class="desc">这里是全栈式可复用资源库供大家下载</div>
    <div class="resources-list">
      <div class="resources-item">
        <div class="img">
          <img src="../../static/img/resourse/mokuai.png" srcset="../../static/img/resourse/mokuai@2x.png" alt="" />
        </div>
        <div class="name">模块设计资源</div>
        <div class="description">
          设计师之间可复用的各种由组件构成的页面模块资源。
        </div>
      </div>
      <div class="resources-item">
        <div class="img">
          <img src="../../static/img/resourse/axure.png" srcset="../../static/img/resourse/axure@2x.png" alt="" />
        </div>
        <div class="name">原型Axure组件资源</div>
        <div class="description">
          通过在 Axure 中导入 Element 组件库，可以在交互设计阶段方便地调用常用的组件
        </div>
      </div>
      <div class="resources-item">
        <div class="img">
          <img src="../../static/img/resourse/sketch.png" srcset="../../static/img/resourse/sketch@2x.png" alt="" />
        </div>
        <div class="name">设计稿sketch资源</div>
        <div class="description">
          设计师之间可复用的页面设计稿资源
        </div>
      </div>
    </div>
    <x-pager></x-pager>
    <div id="cd-modal" class="cd-modal cd-fade" v-html="code.modal_base"></div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import XHeader from '@/views/header.vue';
    import XPager from '@/views/pager.vue';
    import menus from '@/data/principle.js';

    import * as code from './component/modal';

    @Component({
        name: 'principle',
        components: {
            XHeader,
            XPager
        }
    })

    export default class extends Vue {
        code: any = code;
        isHideSidebar: boolean = false;
        menus: any = menus;

        sidebarToggle() {
            return this.isHideSidebar = !this.isHideSidebar;
        }
    };
</script>
