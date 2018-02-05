<template>
  <div>
    <div class="site-content-title">评分</div>
    <div class="site-content-des">
      
    </div>
    <div class="cd-row">
      <div class="cd-xs-12">
        <x-panel :code="code.rate_base|trim">
          <span slot="title">
            基础
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.rate_base }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.rate_base"></div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
      <div class="cd-xs-12">
        <x-panel :code="code.rate_static|trim">
          <span slot="title">
            静态的
          </span>
          <div slot="code">
            <pre v-highlightjs><code class="html">
              {{ code.rate_static }}
            </code></pre>
          </div>
          <div class="cd-mb16" slot="style" v-html="code.rate_static"></div>
          <div class="" slot="dec">
            
          </div>
        </x-panel>
      </div>
    </div>
    <x-api-table 
      :code="code.rate_api" 
      :attrData="attrData" 
      :hookData="hookData">
    </x-api-table>
  </div>
</template>

<script>
import * as code from './rate';
import XPanel from '@/components/Panel';
import XApiTable from '@/components/ApiTable';

const attrData = [
  {
    name: 'el',
    dec: '要绑定的Dom元素',
    type: 'String',
    value: '无',
    optional: '--'
  },
  {
    name: 'rate',
    dec: '初始评分',
    type: 'Number',
    value: '0',
    optional: '0~5'
  },
];

const hookData = [
  {
    name: 'click',
    dec: '点击后触发的钩子',
    callback: '--',
    args: 'args1: score，评分值'
  }
];

export default {
  components: {
    XPanel,
    XApiTable
  },
  data() {
    return {
      code,
      attrData,
      hookData
    }
  },
  mounted() {
    cd.rate({
      el: '#cd-rate',
      score: 3,
    }).on('change', (score) => {
      console.log('score', score);
    })
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
