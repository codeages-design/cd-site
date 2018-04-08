<template>
  <x-component-template 
    title="面包屑"
    :card="card"
    >
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/component-template.vue';

import * as code from './breadcrumb';

const card = [
  {
    col: '12',
    title: '基础',
    code: code.breadcrumb_base,
  },
  {
    col: '12',
    title: '无背景色',
    code: code.breadcrumb_nobg
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