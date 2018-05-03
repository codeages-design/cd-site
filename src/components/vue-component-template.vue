<template>
  <div :class="className">
    <div class="site-content-title">
      {{ title }}
    </div>
    <div class="site-content-des">
      {{ des }}
    </div>
    <cd-row>
      <slot></slot>
    </cd-row>
    <x-api-table
      :attrData="api.attrData"
    ></x-api-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import XPanel from '@/components/panel.vue';
import XApiTable from '@/components/vue-api-table.vue';

@Component({
  components: {
    XPanel,
    XApiTable
  }
})
export default class extends Vue {
  @Prop({default: ''})
  className: string;

  @Prop({ default: '' })
  title: string;

  @Prop({ default: '' })
  des: string;

  @Prop({ 
    type: Array,
    default: () => {
      return [];
    }  
  })
  card: any[];

  @Prop({ 
    type: Object, 
    default: () => {
      return {}
    } 
  })
  api: any;
}
</script>

