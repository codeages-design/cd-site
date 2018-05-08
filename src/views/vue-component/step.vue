<template>
  <x-component-template
    title="步骤条"
    :api="api"
  >
    <cd-col>
      <x-panel
        :code="code.step_color"
        title="基础"
      >
        <div slot="code">
          <pre v-highlightjs><code class="html">
            {{ code.step_color }}
          </code></pre>
        </div>
        <div slot="style">
          <cd-steps :active="0" status="finish">
            <cd-step title="步骤一"></cd-step>
            <cd-step title="步骤二"></cd-step>
            <cd-step title="步骤三"></cd-step>
          </cd-steps>
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

  import * as code from './step';

  const api = {
    attrData: [
      {
        name: 'active(steps)',
        dec: '设置当前激活步骤',
        type: 'Number',
        value: '0',
        optional: '--'
      },
      {
        name: 'status(steps)',
        dec: '设置当前步骤的状态',
        type: 'String',
        value: 'process',
        optional: '<code>wait</code><code>process</code><code>finish</code><code>error</code>'
      },
      {
        name: 'title',
        dec: '标题',
        type: 'String',
        value: '--',
        optional: '--'
      },
      {
        name: 'description',
        dec: '描述性文字',
        type: 'String',
        value: '--',
        optional: '--'
      },
      {
        name: 'status',
        dec: 'status设置当前步骤的状态，不设置则根据steps确定状态',
        type: 'String',
        value: 'process',
        optional: '<code>wait</code><code>process</code><code>finish</code><code>error</code>'
      },
    ]
  };

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

