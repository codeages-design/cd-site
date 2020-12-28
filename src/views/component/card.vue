<template>
  <x-component-template 
    title="卡片"
    des="你可以把卡片理解成一张空白的容器，在这里你可以装入任何你想要装入的界面元素，卡片并没有严格意义上内容与容器的间距限制。"
    :card="card"
    >
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/component-template.vue';

import * as code from './card';

const card = [
  {
    col: '12',
    title: '图文卡片',
    dec: '卡片内容并没有规定固定的结构，通过不同的内容布局可以达到各种灵活的业务诉求。',
    code: code.card_base,
  },
  {
    col: '12',
    title: '可关闭提示框',
    dec: '在一些偏向营销的提示框场景下，我们应该给用户以关闭“碍眼的提示信息”的权利。',
    code: code.card_cover
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
.cd-card {
  max-width: 320px;
}
</style>
