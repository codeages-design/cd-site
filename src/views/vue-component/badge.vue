<template>
  <x-component-template
    title="徽标数"
    :api="api"
  >
    <cd-col :span="12">
      <x-panel
        :code="code.badge_types"
        title="基础"
      >
        <div slot="code">
          <pre v-highlightjs>
            <code class="html">{{ code.badge_types }}</code>
          </pre>
        </div>
        <div slot="style">
          <span class="cd-badge cd-badge-danger">1</span>
          <span class="cd-badge cd-badge-success">5</span>
          <span class="cd-badge cd-badge-info">10</span>
          <span class="cd-badge cd-badge-warning">15</span>
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
  import * as code from './badge.js';

  const api = {
    attrData: [
      {
        name: 'type',
        dec: '信息类型',
        type: 'String',
        value: 'danger',
        optional: '<code>success</code> <code>info</code> <code>warning</code> <code>danger</code>'
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
  }
</script>
