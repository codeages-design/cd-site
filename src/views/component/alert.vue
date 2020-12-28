<template>
  <x-component-template 
    title="提示框"
    des="提示框的作用是在页面级别的交互反馈中用以给用户展示场景信息，大部分情况下，提示框都应该是固定在某个具体位置不主动消失。"
    :card="card"
    :api="api"
    >
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/component-template.vue';

import * as code from './alert';

const card = [
  {
    col: '12',
    title: '场景提示框',
    dec: '我们将场景色引入了提示框中，为的是让用户通过场景色能够快速感知提示框可能带来的内容定义。通过成功提示框、错误提示框、警告提示框、信息提示框来区分不同场景下的信息提示。',
    code: code.alert_color,
  },
  {
    col: '12',
    title: '可关闭提示框',
    dec: '在一些偏向营销的提示框场景下，我们应该给用户以关闭“碍眼的提示信息”的权利。',
    code: code.alert_close
  }
];

const api = {
  code: code.alert_api,
  attrData: [
    {
      name: 'el',
      dec: '要绑定的Dom元素',
      type: 'String',
      value: '无',
      optional: '--'
    }
  ],
  hookData: [
    {
      name: 'close',
      dec: '关闭后触发的钩子',
      callback: '--',
      args: 'args1: $alert，被绑定的Dom元素的jquery对象'
    }
  ]
}

@Component({
  components: {
    XComponentTemplate
  },
})
export default class extends Vue {
  card: any = card;
  api: any = api;
 
  mounted() {
    cd.alert({
      el: '.js-cd-alert',
    }).on('close', () => {
      console.log('这是关闭后的回调函数');
    })
  }
}
</script>
