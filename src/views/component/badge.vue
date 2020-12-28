<template>
  <x-component-template 
    title="徽标数"
    :card="card"
    >
  </x-component-template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import XComponentTemplate from '@/components/component-template.vue';

import * as code from './badge';

const card = [
  {
    col: '12',
    title: '基础',
    code: code.badge_base,
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

