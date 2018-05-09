<template>
  <x-component-template
    title="栅格">
    <x-panel
      :code="code.grid_base"
      title="基础">
      <div slot="code">
         <pre v-highlightjs>
           <code class="html">{{ code.grid_base }}</code>
         </pre>
      </div>
      <div slot="style">
        <cd-row>
          <cd-col :span="24">
            <div class="grid-content bg-purple">24</div>
          </cd-col>
        </cd-row>
        <cd-row :gutter="20">
          <cd-col :span="12">
            <div class="grid-content bg-purple">12</div>
          </cd-col>
          <cd-col :span="12">
            <div class="grid-content bg-purple">12</div>
          </cd-col>
        </cd-row>
        <cd-row>
          <cd-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </cd-col>
          <cd-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </cd-col>
          <cd-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </cd-col>
        </cd-row>
      </div>
    </x-panel>
    <!--<x-panel-->
      <!--:code="code.grid_flex"-->
      <!--title="响应式">-->
      <!--<div slot="code">-->
         <!--<pre v-highlightjs>-->
           <!--<code class="html">{{ code.grid_flex }}</code>-->
         <!--</pre>-->
      <!--</div>-->
      <!--<div slot="style">-->
        <!--<cd-row>-->
          <!--<cd-col :md="12" :xs="24" :lg="6">-->
            <!--<div class="grid-content bg-purple">6</div>-->
          <!--</cd-col>-->
          <!--<cd-col :md="12" :xs="24" :lg="6">-->
            <!--<div class="grid-content bg-purple">6</div>-->
          <!--</cd-col>-->
        <!--</cd-row>-->
      <!--</div>-->
    <!--</x-panel>-->
    <x-panel
      :code="code.grid_flex"
      title="Flex布局">
      <div slot="code">
         <pre v-highlightjs>
           <code class="html">{{ code.grid_flex }}</code>
         </pre>
      </div>
      <div slot="style">
        <p>左对齐flex-start：</p>
        <cd-row type="flex" justify="start">
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
        </cd-row>
        <p>居中对齐flex-center：</p>
        <cd-row type="flex" justify="center">
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
        </cd-row>
        <p>居中对齐flex-end：</p>
        <cd-row type="flex" justify="end">
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
        </cd-row>
        <p>space-between：</p>
        <cd-row type="flex" justify="space-between">
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
        </cd-row>
        <p>space-around：</p>
        <cd-row type="flex" justify="space-around">
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
          <cd-col :span="6" >
            <div class="grid-content bg-purple">6</div>
          </cd-col>
        </cd-row>
      </div>
    </x-panel>
  </x-component-template>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import XComponentTemplate from '@/components/vue-component-template.vue';
  import XPanel from '@/components/vue-panel.vue';
  import * as code from './grid';

  @Component({
    components: {
      XComponentTemplate,
      XPanel
    }
  })
  export default class extends Vue {
    code: any = code
  }
</script>
<style lang="less" scoped>
  .cd-row {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
    [class^="cd-col"] {
      text-align: center;
      >.bg-purple {
        padding: 16px;
        background-color: #f5f5f5;
      }
    }
  }
  .cd-row-flex {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>