<template>
  <div id="app" class="site-wrap">
    <x-header></x-header>
    <x-side-bar :data="componentMenu"></x-side-bar>
    <main class="site-main">
      <div class="site-content">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </div>
      <x-pager :data="componentData"></x-pager>
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

import * as code from './component/modal';
import { vueComponentMenu, vueComponentData } from '@/data';

import 'cd-vue/src/styles/index.less';

@Component({
  name: 'layout',
  components: {
    XSideBar,
    XHeader,
    XPager
  }
})
export default class extends Vue {
  code: any = code;
  componentMenu: any = vueComponentMenu;
  componentData: any = vueComponentData;
};
</script>

