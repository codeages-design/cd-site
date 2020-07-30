<template>
  <div id="app" class="site-wrap" :class="{ 'hide-sidebar': isHideSidebar }">
    <x-header></x-header>
    <div class="element-layout-facility">PC端</div>
    <x-side-bar @sidebarToggle="sidebarToggle" :menus="menus" style="top: 112px;"></x-side-bar>
    <main class="site-main">
      <div class="site-content">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </div>
      <x-pager></x-pager>
    </main>
    <div id="cd-modal" class="cd-modal cd-fade" v-html="code.modal_base"></div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import XSideBar from '@/views/sidebar.vue';
    import XHeader from '@/views/header.vue';
    import XPager from '@/views/pager.vue';
    import menus from '@/data/element-layout.js';

    import * as code from './component/modal';

    @Component({
        name: 'principle',
        components: {
            XSideBar,
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
