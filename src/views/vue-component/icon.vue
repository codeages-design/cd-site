<template>
  <x-component-template
    title="图标"
    :api="api"
  >
    <div class="site-content-subtitle">
      使用方式
    </div>
    <pre v-highlightjs><code class="html">
      {{ code.icon_base }}
    </code></pre>
    <div class="site-content-subtitle">
      图标集
    </div>
    <ul class="icon-list cd-clearfix" v-html="code.icon_list">
    </ul>
  </x-component-template>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import XComponentTemplate from '@/components/vue-component-template.vue';
  import XPanel from '@/components/vue-panel.vue';
  import * as code from './icon';

  const api = {};

  @Component({
    components: {
      XComponentTemplate,
      XPanel
    }
  })
  export default class extends Vue {
    code: any = code;
    api: any = api;
  }
</script>

<style lang="less">
  .icon-list {
    padding-left: 0;
    margin-top: 0;
    > li {
      float: left;
      list-style: none;
      text-align: center;
      padding: 24px 16px 16px 16px;
      width: 160px;
      font-size: 12px;
      border: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      i {
        font-size: 36px;
        margin-bottom: 8px;
        display: inline-block;
      }
      .name {
        margin-bottom: 8px;
      }
      .fontclass {
        display: none;
        height: 36px;
      }
    }
  }
</style>