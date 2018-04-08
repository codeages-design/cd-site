<template>
  <div>
    <div class="site-content-title">自动补全</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.autoComplete_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.autoComplete_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.autoComplete_base" style="width: 200px">
          </div>
          <div class="" slot="dec">
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.autocomplete_api" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import * as code from './autocomplete';
import XPanel from '@/components/panel.vue';
import XApiTable from '@/components/api-table.vue';

const attrData = [
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
];

const hookData = [
  {
    name: 'change',
    dec: '修改后触发的钩子',
    callback: '--',
    args: 'args1: value，选中的值'
  }
];

@Component({
  components: {
    XPanel,
    XApiTable
  }
})
export default class extends Vue {
  code: any = code;
  attrData: any[] = attrData;
  hookData: any[] = hookData;

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

<style lang="less">

</style>
