<template>
  <div :class="className">
    <div class="site-content-title">
      {{ title }}
    </div>
    <div class="site-content-des">
      {{ des }}
    </div>
    <div class="cd-row">
      <div :class="'cd-xs-' + item.col || 12" v-for="(item, index) in card" :key="index">
        <x-panel :code="item.code|trim">
          <div slot="title">
            {{ item.title }}
          </div>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ item.code }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="item.code_style || item.code"></div>
          <div class="" slot="dec">
            {{ item.dec }}
          </div>
        </x-panel>
      </div>
      <slot name="card"></slot>
    </div>
    <x-api-table 
      :code="api.code"
      :eventData="api.eventData"
      :dataApiData="api.dataApiData" 
      :attrData="api.attrData" 
      :hookData="api.hookData">
    </x-api-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import XPanel from '@/components/panel.vue';
import XApiTable from '@/components/api-table.vue';

@Component({
  components: {
    XApiTable,
    XPanel
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

