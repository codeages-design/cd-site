<template>
  <x-component-template 
    className="avatar-page"
    title="头像"
    des="通过头像能够快速识别用户，并且给某些特定场景提供足够的丰富度。"
    :card="card"
    >
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/component-template.vue';

import * as code from './avatar';

const card = [
  {
    col: '12',
    title: '圆形头像',
    dec: '在列表等场景中，默认采用圆形头像，更为灵活轻便。',
    code: code.avatar_circle,
  },
  {
    col: '12',
    title: '矩形头像',
    dec: '矩形头像一般在对排版有特殊要求的情况下才会使用，相对而言更为规整。',
    code: code.avatar_square
  }
];

@Component({
  components: {
    XComponentTemplate
  },
})
export default class extends Vue {
  card: any = card;
}
</script>

<style lang="less" scoped>
.avatar-page .cd-avatar {
  margin-right: 16px;
}
</style>
