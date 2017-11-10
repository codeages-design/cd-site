<template>
  <div id="app" class="site-wrap" :class="{ 'hide-sidebar': isHideSidebar }">
    <x-header></x-header>
    <main class="site-content">
      <x-side-bar @sidebarToggle="sidebarToggle"></x-side-bar>
      <div class="site-main" v-loading="isLoading">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </div>
    </main>
  </div>
</template>

<script>
import XSideBar from '@/views/SideBar';
import XHeader from '@/views/Header';

import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js';

hljs.highlightCode = () => {
  let blocks = document.querySelectorAll('pre code');
  [].forEach.call(blocks, hljs.highlightBlock);
};

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
    XHeader
  },
  methods: {
    sidebarToggle() {
      return this.isHideSidebar = !this.isHideSidebar;
    },
  },
  mounted() {
    hljs.highlightCode()
  }
};
</script>
