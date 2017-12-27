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
  </div>
</template>

<script>
import XSideBar from '@/views/SideBar';
import XHeader from '@/views/Header';
import XPager from '@/views/Pager';
import 'highlight.js/styles/googlecode.css';

export default {
  name: 'layout',
  data() {
    return {
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
