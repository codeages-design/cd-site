<template>
  <x-component-template
    title="信息框"
    :api="api"
  >
    <cd-col :span="12">
      <x-panel
        :code="code.message_base"
        title="基础"
      >
        <div slot="code">
          <pre v-highlightjs>
            <code class="html">{{ code.message_base }}</code>
          </pre>
        </div>
        <div slot="style">
          <a @click="oninfoType">普通信息</a>
        </div>
      </x-panel>
    </cd-col>
    <cd-col :span="12">
      <x-panel
        :code="code.message_type"
        title="信息框类型"
      >
        <div slot="code">
          <pre v-highlightjs><code class="html">
            {{ code.message_type }}
          </code></pre>
        </div>
        <div slot="style">
          <a class="cd-btn" @click="onSuccessType">成功信息</a>
          <a class="cd-btn" @click="onWarningType">警告信息</a>
          <a class="cd-btn" @click="onDangerType">危险信息</a>
        </div>
      </x-panel>
    </cd-col>
    <cd-col :span="12">
      <x-panel
        :code="code.message_action"
        title="带操作的"
      >
        <div slot="code">
          <pre v-highlightjs>
            <code class="html">{{ code.message_action }}</code>
          </pre>
        </div>
        <div slot="style">
          <a class="cd-btn" @click="onAction">带操作的</a>
        </div>
      </x-panel>
    </cd-col>
    <cd-col :span="12">
      <x-panel
        :code="code.message_delay"
        title="修改延迟">
        <div slot="code">
          <pre v-highlightjs>
            <code class="html">{{ code.message_delay }}</code>
          </pre>
        </div>
        <div slot="style">
          <a class="cd-btn" @click="onDelay">延迟10秒</a>
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
  import * as code from './message';

  const api = {
    attrData: [
      {
        name: 'type',
        dec: '信息类型',
        type: 'String',
        value: 'info',
        optional: '<code>success</code> <code>info</code> <code>warning</code> <code>danger</code>'
      },
      {
        name: 'message',
        dec: '信息主体',
        type: 'String',
        value: '--',
        optional: '--'
      },
      {
        name: 'isShowClose',
        dec: '是否显示关闭按钮',
        type: 'Boolean',
        value: '--',
        optional: 'false'
      },
      {
        name: 'duration',
        dec: '显示时间, 毫秒',
        type: 'Number',
        value: '--',
        optional: '3000'
      },
      {
        name: 'onClose',
        dec: '关闭时的回调函数',
        type: 'function',
        value: '--',
        optional: '--'
      },
    ]
  };

  @Component({
    components: {
      XPanel,
      XComponentTemplate
    }
  })
  export default class extends Vue {
    code: any = code;
    api: any = api;

    oninfoType() {
      this.$message({
        type: 'info',
        message: '这是普通信息。'
      });
    }
    onDangerType() {
      this.$message({
        type: 'danger',
        message: '这是危险信息。',
      })
    }
    onSuccessType() {
      this.$message({
        type: 'success',
        message: '这是成功信息。',
      })
    }
    onWarningType() {
      this.$message({
        type: 'warning',
        message: '这是警告信息。',
      })
    }
    onDelay() {
      this.$message({
        type: 'info',
        message: '这是延迟10秒的信息。',
        duration: '10000'
      });
    }
    onAction() {
      this.$message({
        type: 'info',
        message: '这是普通信息。',
        isShowClose: true
      });
    }
  }
</script>
<style>
  a {
    cursor: pointer;
  }
</style>