<template>
  <div id="app" class="site-wrap" :class="{ 'hide-sidebar': isHideSidebar }">
    <x-header></x-header>
    <x-side-bar @sidebarToggle="sidebarToggle"></x-side-bar>
    <main class="site-main">
      <div class="site-content" v-loading="isLoading">
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

<script>
import XSideBar from '@/views/SideBar';
import XHeader from '@/views/Header';
import XPager from '@/views/Pager';
import 'highlight.js/styles/googlecode.css';

import * as code from './component/modal';

export default {
  name: 'layout',
  data() {
    return {
      code,
      isHideSidebar: false,
      isLoading: false
    }
  },
  components: {
    XSideBar,
    XHeader,
    XPager
  },
  methods: {
    sidebarToggle() {
      return this.isHideSidebar = !this.isHideSidebar;
    },
  },
};
</script>
