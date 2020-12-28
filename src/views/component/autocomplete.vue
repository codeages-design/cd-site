<template>
  <x-component-template
    title='自动补全'
    :card="card"
    :api="api"
    >
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/component-template.vue';

import * as code from './autocomplete';

const card = [
  {
    col: '12',
    title: '基础',
    code: code.autoComplete_base
  }
]

const api = {
  code: code.autocomplete_api,
  attrData: [
    {
      name: 'el',
      dec: '要绑定的Dom元素',
      type: 'String',
      value: '无',
      optional: '--'
    },
    {
      name: 'sources',
      dec: '数据源, 如果是Function类型，则必须返回一个Promise, resolve值为数组',
      type: 'Array | Function',
      value: '无',
      optional: '--'
    },
    {
      name: 'selectKey',
      dec: '如果数据源中的每一项是一个对象，则添加selectKey来筛选要匹配的key',
      type: 'String',
      value: '无',
      optional: '--'
    },
  ],
  hookData: [
    {
      name: 'change',
      dec: '修改后触发的钩子',
      callback: '--',
      args: 'args1: value，选中的值'
    }
  ]
}

@Component({
  components: {
    XComponentTemplate,
  }
})
export default class extends Vue {
  card: any = card;
  api: any = api;

  mounted() {
    cd.autocomplete({
      el: '#cd-autocomplete',
      sources: [
        {
          id: '1',
          name: '11',
        },
        {
          id: '2',
          name: '12',
        },
        {
          id: '3',
          name: '13',
        },
        {
          id: '4',
          name: '21'
        }
      ],
      selectKey: 'name'
    });
  }
}
</script>

