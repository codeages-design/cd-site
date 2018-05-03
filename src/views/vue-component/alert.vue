<template>
  <x-component-template 
    title="提示框"
    des="提示框的作用是在页面级别的交互反馈中用以给用户展示场景信息，大部分情况下，提示框都应该是固定在某个具体位置不主动消失。"
    :api="api"
  >
    <cd-col :span="12">
      <x-panel
      :code="code.alert_color"
      title="场景提示框"
      >
        <div slot="code">
          <pre v-highlightjs><code class="html">
            {{ code.alert_color }}
          </code></pre>
        </div>
        <div slot="style">
          <cd-alert type="success">成功提示框，展示成功信息。</cd-alert>
          <cd-alert type="danger">错误提示框，展示错误信息。</cd-alert>
          <cd-alert type="warning">警告提示框，展示重要信息。</cd-alert>
          <cd-alert type="info">信息提示框，展示基本信息。</cd-alert>
        </div>
        <div slot="dec">
          我们将场景色引入了提示框中，为的是让用户通过场景色能够快速感知提示框可能带来的内容定义。
          通过成功提示框、错误提示框、警告提示框、信息提示框来区分不同场景下的信息提示。
        </div>
      </x-panel>
    </cd-col>
    <cd-col :span="12">
      <x-panel
      :code="code.alert_color"
      title="可关闭提示框"
      >
        <div slot="code">
          <pre v-highlightjs><code class="html">
            {{ code.alert_close }}
          </code></pre>
        </div>
        <div slot="style">
          <cd-alert type="success" :isShowIcon="true">可关闭的成功提示框。</cd-alert>
          <cd-alert type="danger" :isShowIcon="true">可关闭的错误提示框。</cd-alert>
          <cd-alert type="warning" :isShowIcon="true">可关闭的警告提示框。</cd-alert>
          <cd-alert type="info" :isShowIcon="true">可关闭的信息提示框。</cd-alert>
        </div>
        <div slot="dec">
          在一些偏向营销的提示框场景下，我们应该给用户以关闭“碍眼的提示信息”的权利。
        </div>
      </x-panel>
    </cd-col>
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/vue-component-template.vue';
import XPanel from '@/components/vue-panel.vue';

import * as code from './alert';

const api = {
  attrData: [
    {
      name: 'type',
      dec: '场景类型',
      type: 'String',
      value: 'info',
      optional: '<code>success</code> <code>info</code> <code>warning</code> <code>danger</code>'
    },
    {
      name: 'isShowIcon',
      dec: '是否显示关闭按钮',
      type: 'Boolean',
      value: 'false',
      optional: '--'
    }
  ]
}

@Component({
  components: {
    XComponentTemplate,
    XPanel,
  },
})
export default class extends Vue {
  code: any = code;
  api: any = api;
}
</script>

